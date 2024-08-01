import { calculateTimeLeft, formatTimeLeft } from "countdown-core";
import { useEffect, useState } from "react";

export const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft({ targetDate, currentDate: new Date() })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft({ targetDate, currentDate: new Date() }));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return formatTimeLeft(timeLeft);
};
