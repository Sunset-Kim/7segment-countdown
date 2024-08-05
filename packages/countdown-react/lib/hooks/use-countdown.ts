import { calculateTimeLeft, formatTimeLeft } from "../../../core/dist";
import { useEffect, useState } from "react";

export const useCountdown = (targetDate: Date) => {
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
      if (!newTimeLeft) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return formatTimeLeft(timeLeft);
};
