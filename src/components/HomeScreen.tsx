import { MEDICAL_BLOCKS, type MedicalBlock } from "@/data/cases";

interface HomeScreenProps {
  onSelectBlock: (block: MedicalBlock) => void;
}

const HomeScreen = ({ onSelectBlock }: HomeScreenProps) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <div className="mb-6 text-center">
        <h2 className="font-display text-2xl font-bold text-foreground">Pilih Blok Klinis</h2>
        <p className="mt-1 text-sm text-muted-foreground">Persiapan UKMPPD — Wordle-style diagnosis game</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {MEDICAL_BLOCKS.map((block) => (
          <button
            key={block.id}
            onClick={() => onSelectBlock(block)}
            className="card-hover flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm"
          >
            <span className="text-3xl">{block.emoji}</span>
            <span className="text-xs font-medium leading-tight text-foreground">{block.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
