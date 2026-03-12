import { Crown, X } from "lucide-react";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLogin: () => void;
}

const XENDIT_URL = "https://checkout-staging.xendit.co/od/TebakKasusVIP";

const PremiumModal = ({ isOpen, onClose, isLoggedIn, onLogin }: PremiumModalProps) => {
  if (!isOpen) return null;

  const handlePremium = () => {
    if (!isLoggedIn) {
      alert("Silakan login terlebih dahulu untuk mendaftar Premium.");
      onLogin();
      return;
    }
    window.open(XENDIT_URL, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-2xl bg-card p-6 shadow-xl">
        <button onClick={onClose} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>

        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-warning/15 p-4">
            <Crown className="h-8 w-8 text-warning" />
          </div>
        </div>

        <h3 className="mb-2 text-center font-display text-xl font-bold text-foreground">
          Limit Harian Tercapai
        </h3>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Kamu sudah memainkan 5 kasus hari ini. Upgrade ke Premium untuk akses tanpa batas!
        </p>

        <button
          onClick={handlePremium}
          className="medical-gradient w-full rounded-xl py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Daftar Premium — Rp39k/Bulan
        </button>

        <p className="mt-3 text-center text-xs text-muted-foreground">
          Akses unlimited kasus, semua blok, tanpa iklan.
        </p>
      </div>
    </div>
  );
};

export default PremiumModal;
