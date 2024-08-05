import { formatTimeLeft } from "@7segment/core";
import { useState, useEffect, useCallback, useRef } from "react";

export const useControlledCountdown = (initialSeconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearCountdownInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const stopCountdown = useCallback(() => {
    clearCountdownInterval();
    setIsRunning(false);
  }, [clearCountdownInterval]);

  const tick = useCallback(() => {
    setSecondsLeft((prevSeconds) => {
      if (prevSeconds <= 1) {
        stopCountdown();
        return 0;
      }
      return prevSeconds - 1;
    });
  }, [stopCountdown]);

  useEffect(() => {
    setSecondsLeft(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(tick, 1000);
    } else {
      clearCountdownInterval();
    }

    return clearCountdownInterval;
  }, [isRunning, tick, clearCountdownInterval]);

  const start = useCallback(() => {
    if (!isRunning && secondsLeft > 0) {
      setIsRunning(true);
    }
  }, [isRunning, secondsLeft]);

  const stop = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    stopCountdown();
    setSecondsLeft(initialSeconds);
  }, [initialSeconds, stopCountdown]);

  return {
    ...formatTimeLeft(secondsLeft),
    isRunning,
    start,
    stop,
    reset,
  };
};
