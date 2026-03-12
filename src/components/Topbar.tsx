import { LogIn, LogOut, Crown } from "lucide-react";

interface TopbarProps {
  played: number;
  maxPlays: number;
  isPremium: boolean;
  user: { email?: string; name?: string } | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Topbar = ({ played, maxPlays, isPremium, user, onLogin, onLogout }: TopbarProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🩺</span>
          <h1 className="font-display text-base font-bold text-foreground sm:text-lg">TebakKasus</h1>
          {isPremium && (
            <span className="flex items-center gap-1 rounded-full bg-warning/15 px-2 py-0.5 text-xs font-semibold text-warning">
              <Crown className="h-3 w-3" /> PRO
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {!isPremium && (
            <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {played}/{maxPlays} Dimainkan
            </span>
          )}

          {user ? (
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          ) : (
            <button
              onClick={onLogin}
              className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              <LogIn className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Masuk</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
