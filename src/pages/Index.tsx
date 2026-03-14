import { useState, useCallback, useEffect } from "react";
import Topbar from "@/components/Topbar";
import HomeScreen from "@/components/HomeScreen";
import GameScreen from "@/components/GameScreen";
import PremiumModal from "@/components/PremiumModal";
import { useGameLimit } from "@/hooks/useGameLimit";
import { type MedicalBlock, type CaseItem } from "@/data/cases";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { toast } from "@/hooks/use-toast";


const Index = () => {
  const [user, setUser] = useState<{ email?: string; name?: string } | null>(null);
  const [isPremium, setIsPremium] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<MedicalBlock | null>(null);
  const [currentCase, setCurrentCase] = useState<CaseItem | null>(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { played, maxPlays, canPlay, incrementPlayed } = useGameLimit(isPremium);

  // Auth listener
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUser({ email: session.user.email, name: session.user.user_metadata?.full_name });
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

  const fetchRandomCase = useCallback(async (blockId: string): Promise<CaseItem | null> => {
    // Get count first, then pick random offset
    const { count } = await supabase
      .from("cases")
      .select("*", { count: "exact", head: true })
      .eq("block_id", blockId);

    if (!count || count === 0) return null;

    const randomOffset = Math.floor(Math.random() * count);
    const { data, error } = await supabase
      .from("cases")
      .select("*")
      .eq("block_id", blockId)
      .range(randomOffset, randomOffset)
      .single();

    if (error || !data) return null;

    return {
      vignette: data.vignette,
      hints: data.hints as string[],
      options: data.options as string[],
      answerIndex: data.answer_index,
      explanation: data.explanation,
    };
  }, []);

  const handleSelectBlock = useCallback(
    async (block: MedicalBlock) => {
      if (!canPlay) {
        setShowPremiumModal(true);
        return;
      }
      setLoading(true);
      const randomCase = await fetchRandomCase(block.id);
      setLoading(false);
      if (!randomCase) {
        toast({ title: "Belum ada kasus untuk blok ini.", variant: "destructive" });
        return;
      }
      setSelectedBlock(block);
      setCurrentCase(randomCase);
      incrementPlayed();
    },
    [canPlay, incrementPlayed, fetchRandomCase]
  );

  const handleNextCase = useCallback(async () => {
    if (!selectedBlock) return;
    if (!canPlay) {
      setShowPremiumModal(true);
      return;
    }
    setLoading(true);
    const randomCase = await fetchRandomCase(selectedBlock.id);
    setLoading(false);
    if (!randomCase) return;
    setCurrentCase(randomCase);
    incrementPlayed();
  }, [selectedBlock, canPlay, incrementPlayed, fetchRandomCase]);

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
        <GameScreen key={currentCase.vignette} blockName={selectedBlock.name} caseData={currentCase} onBack={handleBackToMenu} onNext={handleNextCase} />
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
