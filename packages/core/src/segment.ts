/**
 * 7-segment display의 각 세그먼트를 나타내는 키 배열
 */
export const SEGMENT_KEY = ["A", "B", "C", "D", "E", "F", "G"] as const;
export type SegmentKey = (typeof SEGMENT_KEY)[number];

/**
 * 7-segment display에서 각 숫자를 표현하는 세그먼트 조합 맵
 */
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

/**
 * 가로 세그먼트를 생성합니다.
 * @param x : x 좌표
 * @param y : y 좌표
 * @param width : 가로 길이
 * @param height : 세로 길이
 * @returns : svg points
 */
const createHorizontalSegmentPoints = (
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

/**
 * 세로 세그먼트를 생성합니다.
 * @param x : x 좌표
 * @param y : y 좌표
 * @param width : 가로 길이
 * @param height : 세로 길이
 * @returns svg points
 */
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

/**
 * 주어진 세그먼트 키에 해당하는 SVG 포인트 문자열을 반환합니다.
 * @param segment 세그먼트 키 (A, B, C, D, E, F, G 중 하나)
 * @returns SVG 포인트 문자열
 */
export const getPoints = (segment: SegmentKey): string => {
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
