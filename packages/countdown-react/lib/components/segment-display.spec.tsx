import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { SegmentDisplay } from "./segment-display";

describe("SegmentDisplay", () => {
  beforeEach(() => {
    cleanup();
  });

  it("기본 props로 렌더링", () => {
    const { container } = render(<SegmentDisplay value={42} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("다양한 값과 place로 렌더링", () => {
    const { container } = render(<SegmentDisplay value={123} place={4} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("value가 올바르게 표시되는지 확인", () => {
    render(<SegmentDisplay value={42} />);

    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("place에 따라 0이 패딩되는지 확인", () => {
    render(<SegmentDisplay value={5} place={3} />);
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });

  it("0 값 처리", () => {
    render(<SegmentDisplay value={0} />);
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("큰 숫자 처리", () => {
    render(<SegmentDisplay value={9999999} place={5} />);
    expect(screen.getAllByRole("img")).toHaveLength(7);
  });
});
