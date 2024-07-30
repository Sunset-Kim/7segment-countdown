export const SEGMENT_KEY = Object.freeze(["A", "B", "C", "D", "E", "F", "G"]);
export const SEGMENT_MAP = Object.freeze({
  "0": ["A", "B", "C", "D", "E", "F"],
  "1": ["B", "C"],
  "2": ["A", "B", "G", "E", "D"],
  "3": ["A", "B", "G", "C", "D"],
  "4": ["F", "G", "B", "C"],
  "5": ["A", "F", "G", "C", "D"],
  "6": ["A", "F", "E", "D", "C", "G"],
  "7": ["A", "B", "C"],
  "8": ["A", "B", "C", "D", "E", "F", "G"],
  "9": ["A", "B", "C", "D", "F", "G"],
});

export const createHorizontalSegmentPoints = (
  x: number,
  y: number,
  width: number,
  height: number
): string => {
  const leftX = x;
  const rightX = x + width;

  const topY = y - height / 2;
  const centerY = y;
  const bottomY = y + height / 2;

  return `${leftX},${centerY} ${leftX + 10},${topY} ${rightX - 10},${topY}
   ${rightX},${centerY} ${rightX - 10},${bottomY} ${leftX + 10},${bottomY}`;
};

const createVerticalSegmentPoints = (
  x: number,
  y: number,
  width: number,
  height: number
): string => {
  const leftX = x - width / 2;
  const centerX = x;
  const rightX = x + width / 2;

  const topY = y;
  const bottomY = y + height;

  return `${centerX},${topY} ${rightX},${topY + 10} ${rightX},${bottomY - 10}
   ${centerX},${bottomY} ${leftX},${bottomY - 10} ${leftX},${topY + 10}`;
};

export const getPoints = (segment: string): string => {
  switch (segment) {
    case "A":
      return createHorizontalSegmentPoints(10, 10, 80, 15); // 상단 가로
    case "B":
      return createVerticalSegmentPoints(90, 10, 15, 80); // 우측 상단 세로
    case "C":
      return createVerticalSegmentPoints(90, 90, 15, 80); // 우측 하단 세로
    case "D":
      return createHorizontalSegmentPoints(10, 170, 80, 15); // 하단 가로
    case "E":
      return createVerticalSegmentPoints(10, 90, 15, 80); // 좌측 하단 세로
    case "F":
      return createVerticalSegmentPoints(10, 10, 15, 80); // 좌측 상단 세로
    case "G":
      return createHorizontalSegmentPoints(10, 90, 80, 15); // 중앙 가로
    default:
      return "";
  }
};
