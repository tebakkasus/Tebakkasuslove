import { useState, useCallback, useEffect } from "react";
import Topbar from "@/components/Topbar";
import HomeScreen from "@/components/HomeScreen";
import GameScreen from "@/components/GameScreen";
import PremiumModal from "@/components/PremiumModal";
import { useGameLimit } from "@/hooks/useGameLimit";
import { CASES_DATABASE, type MedicalBlock, type CaseItem } from "@/data/cases";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";


const Index = () => {
  const [user, setUser] = useState<{ email?: string; name?: string } | null>(null);
  const [isPremium, setIsPremium] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<MedicalBlock | null>(null);
  const [currentCase, setCurrentCase] = useState<CaseItem | null>(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const { played, maxPlays, canPlay, incrementPlayed } = useGameLimit(isPremium);

  // Auth listener
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUser({ email: session.user.email, name: session.user.user_metadata?.full_name });
        // Check premium status
        try {
          const { data } = await supabase
            .from("profiles")
            .select("is_premium")
            .eq("id", session.user.id)
            .single();
          setIsPremium(data?.is_premium === true);
        } catch {
          setIsPremium(false);
        }
      } else {
        setUser(null);
        setIsPremium(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({ email: session.user.email, name: session.user.user_metadata?.full_name });
        supabase
          .from("profiles")
          .select("is_premium")
          .eq("id", session.user.id)
          .single()
          .then(({ data }) => {
            setIsPremium(data?.is_premium === true);
          });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = useCallback(async () => {
    await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
  }, []);

  const handleLogout = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsPremium(false);
  }, []);

  const handleSelectBlock = useCallback(
    (block: MedicalBlock) => {
      if (!canPlay) {
        setShowPremiumModal(true);
        return;
      }
      const cases = CASES_DATABASE[block.id];
      if (!cases || cases.length === 0) {
        alert("Belum ada kasus untuk blok ini.");
        return;
      }
      const randomCase = cases[Math.floor(Math.random() * cases.length)];
      setSelectedBlock(block);
      setCurrentCase(randomCase);
      // Only reduce quota after case loaded successfully
      incrementPlayed();
    },
    [canPlay, incrementPlayed]
  );

  const handleBackToMenu = useCallback(() => {
    setSelectedBlock(null);
    setCurrentCase(null);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Topbar
        played={played}
        maxPlays={maxPlays}
        isPremium={isPremium}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      {selectedBlock && currentCase ? (
        <GameScreen blockName={selectedBlock.name} caseData={currentCase} onBack={handleBackToMenu} />
      ) : (
        <HomeScreen onSelectBlock={handleSelectBlock} />
      )}

      <PremiumModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
        isLoggedIn={!!user}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
