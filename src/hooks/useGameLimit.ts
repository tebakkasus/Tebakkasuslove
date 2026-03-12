import { useState, useEffect, useCallback } from "react";

const MAX_FREE_PLAYS = 5;
const STORAGE_DATE_KEY = "tk_date";
const STORAGE_PLAYED_KEY = "tk_played";

function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}

export function useGameLimit(isPremium: boolean) {
  const [played, setPlayed] = useState(0);

  useEffect(() => {
    const storedDate = localStorage.getItem(STORAGE_DATE_KEY);
    const today = getTodayStr();
    if (storedDate !== today) {
      localStorage.setItem(STORAGE_DATE_KEY, today);
      localStorage.setItem(STORAGE_PLAYED_KEY, "0");
      setPlayed(0);
    } else {
      setPlayed(parseInt(localStorage.getItem(STORAGE_PLAYED_KEY) || "0", 10));
    }
  }, []);

  const canPlay = isPremium || played < MAX_FREE_PLAYS;

  const incrementPlayed = useCallback(() => {
    const newCount = played + 1;
    setPlayed(newCount);
    localStorage.setItem(STORAGE_PLAYED_KEY, String(newCount));
    localStorage.setItem(STORAGE_DATE_KEY, getTodayStr());
  }, [played]);

  return { played, maxPlays: MAX_FREE_PLAYS, canPlay, incrementPlayed };
}
