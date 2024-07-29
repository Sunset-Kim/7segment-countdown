import { describe, expect, it } from "vitest";
import { calculateTimeLeft, formatTimeLeft } from "./date";

describe("calculateTimeLeft", () => {
  it("현재주어진 날짜가 타겟 탈짜보다 크다면 남은 시간을 숫자로 반환한다", () => {
    const targetDate = new Date("2024-01-02T01:00:00");
    const now = new Date("2024-01-01T01:00:00");
    const expected = 3600 * 24;
    const actual = calculateTimeLeft({ targetDate, currentDate: now });

    expect(actual).toBe(expected);
  });

  it("현재주어진 날짜가 타겟 탈짜보다 같거나 작다면 0을 반환한다", () => {
    const targetDate = new Date("2024-01-02T01:00:00");
    const now = new Date("2024-01-03T01:00:00");
    const expected = 0;
    const actual = calculateTimeLeft({ targetDate, currentDate: now });

    expect(actual).toBe(expected);
  });
});

describe("formatTimeLeft", () => {
  it("초를 날짜, 시간, 분, 초로 변환한다", () => {
    const timeLeft = 3600 * 24 + 3600 + 60 + 1;
    const expected = { days: 1, hours: 1, minutes: 1, seconds: 1 };
    const actual = formatTimeLeft(timeLeft);

    expect(actual).toEqual(expected);
  });

  it("초가 0이면 0으로 반환한다", () => {
    const timeLeft = 0;
    const expected = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const actual = formatTimeLeft(timeLeft);

    expect(actual).toEqual(expected);
  });
});
