import { useState, useCallback } from "react";
import { ArrowLeft, Upload, FileJson, FileSpreadsheet, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { MEDICAL_BLOCKS } from "@/data/cases";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface CaseRow {
  block_id: string;
  vignette: string;
  hints: string[];
  options: string[];
  answer_index: number;
  explanation: string;
}

const UploadCases = () => {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{ success: number; errors: number } | null>(null);

  const parseJSON = useCallback((text: string): CaseRow[] => {
    const data = JSON.parse(text);
    // Support both array format and block-keyed format
    if (Array.isArray(data)) {
      return data.map((item: any) => ({
        block_id: item.block_id,
        vignette: item.vignette,
        hints: Array.isArray(item.hints) ? item.hints : JSON.parse(item.hints),
        options: Array.isArray(item.options) ? item.options : JSON.parse(item.options),
        answer_index: typeof item.answer_index === "number" ? item.answer_index : parseInt(item.answer_index || item.answerIndex, 10),
        explanation: item.explanation,
      }));
    }
    // Block-keyed format: { "ipd": [{ vignette, hints, ... }], ... }
    const rows: CaseRow[] = [];
    for (const [blockId, cases] of Object.entries(data)) {
      if (Array.isArray(cases)) {
        for (const c of cases as any[]) {
          rows.push({
            block_id: blockId,
            vignette: c.vignette,
            hints: Array.isArray(c.hints) ? c.hints : JSON.parse(c.hints),
            options: Array.isArray(c.options) ? c.options : JSON.parse(c.options),
            answer_index: typeof c.answerIndex === "number" ? c.answerIndex : typeof c.answer_index === "number" ? c.answer_index : parseInt(c.answerIndex || c.answer_index, 10),
            explanation: c.explanation,
          });
        }
      }
    }
    return rows;
  }, []);

  const parseCSV = useCallback((text: string): CaseRow[] => {
    const lines = text.split("\n").filter((l) => l.trim());
    if (lines.length < 2) return [];
    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/"/g, ""));
    const rows: CaseRow[] = [];

    for (let i = 1; i < lines.length; i++) {
      // Simple CSV parsing (handles quoted fields)
      const values: string[] = [];
      let current = "";
      let inQuotes = false;
      for (const char of lines[i]) {
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
          values.push(current.trim());
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current.trim());

      const obj: any = {};
      headers.forEach((h, idx) => {
        obj[h] = values[idx] || "";
      });

      try {
        rows.push({
          block_id: obj.block_id,
          vignette: obj.vignette,
          hints: JSON.parse(obj.hints),
          options: JSON.parse(obj.options),
          answer_index: parseInt(obj.answer_index || obj.answerindex, 10),
          explanation: obj.explanation,
        });
      } catch {
        // Skip malformed rows
      }
    }
    return rows;
  }, []);

  const handleFileUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploading(true);
      setResult(null);

      try {
        const text = await file.text();
        let cases: CaseRow[];

        if (file.name.endsWith(".json")) {
          cases = parseJSON(text);
        } else if (file.name.endsWith(".csv")) {
          cases = parseCSV(text);
        } else {
          toast({ title: "Format file tidak didukung. Gunakan .json atau .csv", variant: "destructive" });
          setUploading(false);
          return;
        }

        if (cases.length === 0) {
          toast({ title: "Tidak ada kasus valid ditemukan dalam file.", variant: "destructive" });
          setUploading(false);
          return;
        }

        // Validate
        const validBlockIds = MEDICAL_BLOCKS.map((b) => b.id);
        const validCases = cases.filter(
          (c) =>
            validBlockIds.includes(c.block_id) &&
            c.vignette &&
            Array.isArray(c.hints) &&
            c.hints.length === 5 &&
            Array.isArray(c.options) &&
            c.options.length === 5 &&
            c.answer_index >= 0 &&
            c.answer_index <= 4 &&
            c.explanation
        );

        const invalidCount = cases.length - validCases.length;

        // Insert in batches of 100
        let successCount = 0;
        for (let i = 0; i < validCases.length; i += 100) {
          const batch = validCases.slice(i, i + 100);
          const { error } = await supabase.from("cases").insert(
            batch.map((c) => ({
              block_id: c.block_id,
              vignette: c.vignette,
              hints: c.hints,
              options: c.options,
              answer_index: c.answer_index,
              explanation: c.explanation,
            }))
          );
          if (!error) {
            successCount += batch.length;
          }
        }

        setResult({ success: successCount, errors: invalidCount });
        toast({
          title: `${successCount} soal berhasil diupload!`,
          description: invalidCount > 0 ? `${invalidCount} soal tidak valid dan dilewati.` : undefined,
        });
      } catch (err) {
        toast({ title: "Gagal memproses file.", description: String(err), variant: "destructive" });
      }

      setUploading(false);
      e.target.value = "";
    },
    [parseJSON, parseCSV]
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-2xl items-center gap-3 px-4">
          <button
            onClick={() => navigate("/")}
            className="rounded-lg bg-secondary p-2 text-foreground transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <h1 className="font-display text-base font-bold text-foreground">Upload Soal</h1>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-6 space-y-6">
        {/* Instructions */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4">
          <h2 className="font-display text-lg font-bold text-foreground">📤 Import Soal dari File</h2>
          <p className="text-sm text-muted-foreground">
            Upload file JSON atau CSV berisi soal-soal kasus klinis. Soal akan langsung masuk ke database dan bisa dimainkan.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileJson className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm text-foreground">Format JSON</span>
              </div>
              <pre className="text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap">{`[
  {
    "block_id": "ipd",
    "vignette": "...",
    "hints": ["H1","H2","H3","H4","H5"],
    "options": ["A","B","C","D","E"],
    "answer_index": 0,
    "explanation": "..."
  }
]`}</pre>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileSpreadsheet className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm text-foreground">Format CSV</span>
              </div>
              <pre className="text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap">{`block_id,vignette,hints,options,answer_index,explanation
ipd,"...",'["H1","H2","H3","H4","H5"]','["A","B","C","D","E"]',0,"..."`}</pre>
            </div>
          </div>

          <div className="rounded-lg border border-warning/30 bg-warning/5 p-3">
            <p className="text-xs text-warning font-medium">⚠️ Validasi otomatis:</p>
            <ul className="text-xs text-muted-foreground mt-1 space-y-0.5 list-disc list-inside">
              <li>block_id harus salah satu dari: {MEDICAL_BLOCKS.map((b) => b.id).join(", ")}</li>
              <li>hints harus array dengan 5 elemen</li>
              <li>options harus array dengan 5 elemen</li>
              <li>answer_index harus 0-4</li>
            </ul>
          </div>
        </div>

        {/* Upload Button */}
        <label
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 py-8 transition-colors hover:border-primary/50 hover:bg-primary/10 ${uploading ? "opacity-50 pointer-events-none" : ""}`}
        >
          <Upload className="h-6 w-6 text-primary" />
          <span className="font-semibold text-primary">
            {uploading ? "Mengupload..." : "Pilih File JSON atau CSV"}
          </span>
          <input
            type="file"
            accept=".json,.csv"
            className="hidden"
            onChange={handleFileUpload}
            disabled={uploading}
          />
        </label>

        {/* Result */}
        {result && (
          <div className="rounded-xl border border-border bg-card p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-correct" />
              <span className="font-semibold text-foreground">{result.success} soal berhasil diimport</span>
            </div>
            {result.errors > 0 && (
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <span className="text-sm text-muted-foreground">{result.errors} soal tidak valid dan dilewati</span>
              </div>
            )}
          </div>
        )}

        {/* Also support block-keyed JSON */}
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-xs font-semibold text-foreground mb-1">💡 Format JSON alternatif (per blok):</p>
          <pre className="text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap">{`{
  "ipd": [{ "vignette": "...", "hints": [...], ... }],
  "pediatri": [{ "vignette": "...", ... }]
}`}</pre>
        </div>
      </div>
    </div>
  );
};

export default UploadCases;
