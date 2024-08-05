import { DAY_IN_SEC, HOUR_IN_SEC, MIN_IN_SEC, SEC_IN_MS } from "./constants";

export const calculateTimeLeft = ({
  targetDate,
  currentDate = new Date(),
}: {
  targetDate: Date;
  currentDate?: Date;
}) => {
  const difference = targetDate.getTime() - currentDate.getTime();
  return Math.max(Math.floor(difference / SEC_IN_MS), 0);
};

export const formatTimeLeft = (timeLeft: number) => {
  const days = Math.floor(timeLeft / DAY_IN_SEC);
  const hours = Math.floor((timeLeft % DAY_IN_SEC) / HOUR_IN_SEC);
  const minutes = Math.floor((timeLeft % HOUR_IN_SEC) / MIN_IN_SEC);
  const seconds = timeLeft % MIN_IN_SEC;

  return { days, hours, minutes, seconds };
};
