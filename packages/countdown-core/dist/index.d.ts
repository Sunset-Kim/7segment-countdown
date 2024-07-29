declare const SEGMENT_MAP: {
    [key: string]: string[];
};
declare const createHorizontalSegmentPoints: (x: number, y: number, width: number, height: number) => string;
declare const getPoints: (segment: string) => string;
declare const calculateTimeLeft: (targetDate: Date) => number;
declare const formatTimeLeft: (timeLeft: number) => {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
declare const zeroPad: (num: number, places: number) => string;

export { SEGMENT_MAP, calculateTimeLeft, createHorizontalSegmentPoints, formatTimeLeft, getPoints, zeroPad };
