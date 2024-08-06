import { formatTimeLeft } from "@7segment/core";
import { useState, useEffect, useCallback, useRef } from "react";

/**
 * 제어 가능한 카운트다운 훅을 생성합니다.
 *
 * @param {number} initialSeconds - 카운트다운의 초기 시간(초 단위)
 * @returns {Object} 카운트다운 상태와 제어 함수를 포함하는 객체
 * @property {number} days - 남은 일 수
 * @property {number} hours - 남은 시간
 * @property {number} minutes - 남은 분
 * @property {number} seconds - 남은 초
 * @property {boolean} isRunning - 카운트다운 실행 중 여부
 * @property {Function} start - 카운트다운 시작 함수
 * @property {Function} stop - 카운트다운 중지 함수
 * @property {Function} reset - 카운트다운 초기화 함수
 */
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
