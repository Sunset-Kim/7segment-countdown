import { calculateTimeLeft, formatTimeLeft } from "../../../core/dist";
import { useEffect, useState } from "react";

interface CountdownHookOption {
  onEnd?: () => void;
}

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
