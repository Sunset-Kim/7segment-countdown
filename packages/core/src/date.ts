export const calculateTimeLeft = ({
  targetDate,
  currentDate = new Date(),
}: {
  targetDate: Date;
  currentDate?: Date;
}) => {
  const difference = targetDate.getTime() - currentDate.getTime();
  return Math.max(Math.floor(difference / 1000), 0);
};

export const formatTimeLeft = (timeLeft: number) => {
  const days = Math.floor(timeLeft / (3600 * 24));
  const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return { days, hours, minutes, seconds };
};
