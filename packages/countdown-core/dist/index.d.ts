declare const calculateTimeLeft: ({ targetDate, currentDate, }: {
    targetDate: Date;
    currentDate?: Date;
}) => number;
declare const formatTimeLeft: (timeLeft: number) => {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

declare const SEGMENT_KEY: readonly string[];
declare const SEGMENT_MAP: Readonly<{
    "0": string[];
    "1": string[];
    "2": string[];
    "3": string[];
    "4": string[];
    "5": string[];
    "6": string[];
    "7": string[];
    "8": string[];
    "9": string[];
}>;
declare const createHorizontalSegmentPoints: (x: number, y: number, width: number, height: number) => string;
declare const getPoints: (segment: string) => string;

declare const zeroPad: (num: number, places: number) => string;

export { SEGMENT_KEY, SEGMENT_MAP, calculateTimeLeft, createHorizontalSegmentPoints, formatTimeLeft, getPoints, zeroPad };
