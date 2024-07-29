declare const calculateTimeLeft: ({
  targetDate,
  currentDate,
}: {
  targetDate: Date;
  currentDate?: Date;
}) => number;
declare const formatTimeLeft: (timeLeft: number) => {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

declare const createHorizontalSegmentPoints: (
  x: number,
  y: number,
  width: number,
  height: number
) => string;
declare const getPoints: (segment: string) => string;

declare const zeroPad: (num: number, places: number) => string;

export {
  calculateTimeLeft,
  createHorizontalSegmentPoints,
  formatTimeLeft,
  getPoints,
  zeroPad,
};
