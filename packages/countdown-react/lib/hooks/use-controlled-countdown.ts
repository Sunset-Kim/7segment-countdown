import { useState, useEffect, useCallback, useRef } from "react";

export const useControlledCountdown = (initialSeconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearIntervalIfExists = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const tick = useCallback(() => {
    setSecondsLeft((prevSeconds) => {
      if (prevSeconds <= 1) {
        clearIntervalIfExists();
        setIsRunning(false);
        return 0;
      }
      return prevSeconds - 1;
    });
  }, [clearIntervalIfExists]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(tick, 1000);
    } else {
      clearIntervalIfExists();
    }

    return clearIntervalIfExists;
  }, [isRunning, tick, clearIntervalIfExists]);

  const start = useCallback(() => {
    if (isRunning || secondsLeft <= 0) return;
    setIsRunning(true);
  }, [isRunning, secondsLeft]);

  const stop = useCallback(() => {
    if (!isRunning) return;
    setIsRunning(false);
  }, [isRunning]);

  const reset = useCallback(() => {
    setIsRunning(false);
    setSecondsLeft(initialSeconds);
  }, [initialSeconds]);

  const formatTime = useCallback(() => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;
    return { hours, minutes, seconds };
  }, [secondsLeft]);

  return {
    ...formatTime(),
    isRunning,
    start,
    stop,
    reset,
  };
};
