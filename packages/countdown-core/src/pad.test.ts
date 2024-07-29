import { describe, expect, it } from "vitest";
import { zeroPad } from "../dist";

describe("zero pad", () => {
  it("자릿수가 입력숫자보다 작을 때 0으로 채움", () => {
    expect(zeroPad(1, 2)).toBe("01");
    expect(zeroPad(1, 3)).toBe("001");
    expect(zeroPad(10, 2)).toBe("10");
    expect(zeroPad(10, 3)).toBe("010");
    expect(zeroPad(100, 2)).toBe("100");
    expect(zeroPad(100, 3)).toBe("100");
  });

  it("입력숫자가 음수거나 0일때, 0으로 채움", () => {
    expect(zeroPad(0, 3)).toBe("000");
    expect(zeroPad(-1, 3)).toBe("0-1");
  });

  it("자릿수가 0이거나 음수일 때, 원래 숫자를 그대로 반환", () => {
    expect(zeroPad(123, 0)).toBe("123");
    expect(zeroPad(123, -1)).toBe("123");
  });
});
