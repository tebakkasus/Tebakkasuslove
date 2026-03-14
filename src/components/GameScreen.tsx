import { useState, useCallback } from "react";
import { ArrowLeft } from "lucide-react";
import type { CaseItem } from "@/data/cases";

interface GameScreenProps {
  blockName: string;
  caseData: CaseItem;
  onBack: () => void;
  onNext: () => void;
}

const MAX_ATTEMPTS = 5;

const GameScreen = ({ blockName, caseData, onBack, onNext }: GameScreenProps) => {
  const [attempts, setAttempts] = useState(0);
  const [revealedHints, setRevealedHints] = useState(1);
  const [disabledOptions, setDisabledOptions] = useState<Set<number>>(new Set());
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const handleOptionClick = useCallback(
    (index: number) => {
      if (gameOver || disabledOptions.has(index)) return;

      if (index === caseData.answerIndex) {
        setWon(true);
        setGameOver(true);
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        setDisabledOptions((prev) => new Set(prev).add(index));

        if (newAttempts >= MAX_ATTEMPTS) {
          setGameOver(true);
        } else {
          setRevealedHints((prev) => Math.min(prev + 1, 5));
        }
      }
    },
    [attempts, caseData.answerIndex, disabledOptions, gameOver]
  );

  const getOptionStyle = (index: number) => {
    if (gameOver && index === caseData.answerIndex) {
      return "border-correct bg-correct/10 text-correct font-semibold";
    }
    if (disabledOptions.has(index)) {
      return "border-destructive/30 bg-destructive/5 text-destructive/50 cursor-not-allowed line-through";
    }
    if (gameOver) {
      return "border-border bg-muted/50 text-muted-foreground cursor-not-allowed";
    }
    return "border-border bg-card hover:border-primary/50 hover:bg-primary/5 cursor-pointer";
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-4">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="rounded-lg bg-secondary p-2 text-foreground transition-colors hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <h2 className="font-display text-lg font-bold text-foreground">{blockName}</h2>
      </div>

      {/* Attempt Tracker */}
      <div className="mb-5 flex items-center justify-center gap-2">
        {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full transition-colors ${
              i < attempts ? "bg-destructive dot-pulse" : "bg-primary/30"
            }`}
          />
        ))}
      </div>

      {/* Mystery Prompt */}
      {!gameOver && (
        <div className="mb-5 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4 text-center">
          <p className="text-sm font-medium text-primary">🔒 Vignette tersembunyi</p>
          <p className="mt-1 text-xs text-muted-foreground">Analisis petunjuk di bawah untuk menebak diagnosis.</p>
        </div>
      )}

      {/* Hints */}
      <div className="mb-5 space-y-2">
        {caseData.hints.map((hint, i) => (
          <div
            key={i}
            className={`rounded-lg border p-3 transition-all ${
              i < revealedHints
                ? "hint-reveal border-warning/30 bg-warning/5"
                : "border-border bg-muted/30"
            }`}
          >
            {i < revealedHints ? (
              <p className="text-sm text-foreground">
                <span className="mr-1.5 font-semibold text-warning">#{i + 1}</span>
                {hint}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground/40">🔒 Petunjuk #{i + 1} — Terkunci</p>
            )}
          </div>
        ))}
      </div>

      {/* Options */}
      <div className="mb-5 space-y-2">
        {caseData.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(i)}
            disabled={gameOver || disabledOptions.has(i)}
            className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-all ${getOptionStyle(i)}`}
          >
            <span className="mr-2 font-semibold">{String.fromCharCode(65 + i)}.</span>
            {option}
          </button>
        ))}
      </div>

      {/* Game Over Feedback */}
      {gameOver && (
        <div className="space-y-4">
          <div
            className={`rounded-xl border p-4 ${
              won
                ? "border-correct/30 bg-correct/5"
                : "border-destructive/30 bg-destructive/5"
            }`}
          >
            <p className="text-lg font-bold">
              {won ? "✅ Diagnosis Benar!" : "❌ Diagnosis Salah"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Jawaban: <strong className="text-foreground">{caseData.options[caseData.answerIndex]}</strong>
            </p>
          </div>

          {/* Full Vignette */}
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Vignette Lengkap</p>
            <p className="text-sm leading-relaxed text-foreground">{caseData.vignette}</p>
          </div>

          {/* Explanation */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Pembahasan</p>
            <p className="text-sm leading-relaxed text-foreground">{caseData.explanation}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="flex-1 rounded-xl border border-border bg-secondary py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Kembali ke Menu
            </button>
            <button
              onClick={onNext}
              className="flex-1 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Soal Berikutnya →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
