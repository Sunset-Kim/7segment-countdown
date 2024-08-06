import { calculateTimeLeft, formatTimeLeft } from "../../../core/dist";
import { useEffect, useState } from "react";

interface CountdownHookOption {
  onEnd?: () => void;
}

/**
 * 주어진 목표 날짜까지의 카운트다운을 관리하는 커스텀 React 훅입니다.
 *
 * @param {Date} targetDate - 카운트다운의 목표 날짜입니다.
 * @param {Object} [option] - 선택적 설정 객체입니다.
 * @param {Function} [option.onEnd] - 카운트다운이 0에 도달했을 때 호출될 콜백 함수입니다.
 *
 * @returns {Object} 남은 시간을 포맷팅한 객체를 반환합니다.
 * @returns {number} returns.days - 남은 일수
 * @returns {number} returns.hours - 남은 시간
 * @returns {number} returns.minutes - 남은 분
 * @returns {number} returns.seconds - 남은 초
 *
 * @example
 * const { days, hours, minutes, seconds } = useCountdown(new Date('2025-01-01'), {
 *   onEnd: () => console.log('카운트다운 종료!')
 * });
 */
export const useCountdown = (
  targetDate: Date,
  option?: CountdownHookOption
) => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft({ targetDate, currentDate: new Date() })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft({
        targetDate,
        currentDate: new Date(),
      });
      setTimeLeft(newTimeLeft);

      if (newTimeLeft <= 0) {
        clearInterval(interval);
        option?.onEnd?.();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, option]);

  return formatTimeLeft(timeLeft);
};
