import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest"; // Ensure to import this
import { SevenSegment } from "./seven-segment";

describe("SevenSegment 컴포넌트", () => {
  afterEach(() => {
    cleanup();
  });

  it("숫자 8에 대해 모든 세그먼트가 올바르게 표시되어야 합니다", () => {
    render(<SevenSegment digit={8} />);
    const segments = ["A", "B", "C", "D", "E", "F", "G"];
    segments.forEach((segment) => {
      expect(screen.getByTestId(`segment-${segment}`)).toHaveClass("on");
    });
  });

  it("숫자 0에 대해 올바른 세그먼트를 표시해야 합니다", () => {
    render(<SevenSegment digit={0} />);
    const onSegments = ["A", "B", "C", "D", "E", "F"];
    const offSegments = ["G"];
    onSegments.forEach((segment) => {
      expect(screen.getByTestId(`segment-${segment}`)).toHaveClass("on");
    });
    offSegments.forEach((segment) => {
      expect(screen.getByTestId(`segment-${segment}`)).not.toHaveClass("on");
    });
  });

  it("음수를 나타낼 때 그 값의 절대값이 표현되어야 합니다", () => {
    render(<SevenSegment digit={-1} />);
    expect(screen.getByTestId("segment-B")).toHaveClass("on");
    expect(screen.getByTestId("segment-C")).toHaveClass("on");
    ["A", "D", "E", "F", "G"].forEach((segment) => {
      expect(screen.getByTestId(`segment-${segment}`)).not.toHaveClass("on");
    });
  });

  it("속성에 따라 올바른 색상 스타일이 적용되어야 합니다", () => {
    render(
      <SevenSegment digit={1} segmentOnColor="green" segmentOffColor="black" />
    );
    const segments = ["A", "B", "C", "D", "E", "F", "G"];
    segments.forEach((segment) => {
      const element = screen.getByTestId(`segment-${segment}`);
      if (element.classList.contains("on")) {
        expect(element).toHaveStyle("fill: green");
      } else {
        expect(element).toHaveStyle("fill: black");
      }
    });
  });

  it("애니메이션 지속 시간에 따라 세그먼트 색상이 변경되어야 합니다", () => {
    render(<SevenSegment digit={2} animationDuration="1s" />);
    const segments = ["A", "B", "C", "D", "E", "F", "G"];
    segments.forEach((segment) => {
      expect(screen.getByTestId(`segment-${segment}`)).toHaveStyle(
        "transition: fill 1s"
      );
    });
  });

  it("속성에 따라 올바른 크기로 렌더링되어야 합니다", () => {
    render(<SevenSegment digit={5} size={200} />);
    const svgElement = screen.getByRole("img"); // Assuming role='img' for the svg element
    expect(svgElement).toHaveAttribute("width", "200");
    expect(svgElement).toHaveAttribute("height", "400"); // Since height is size * 2
  });
});
