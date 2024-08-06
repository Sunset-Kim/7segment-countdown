import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Countdown } from "./countdown";
import { useCountdown } from "../hooks/use-countdown";

// useCountdown 훅을 모킹합니다
vi.mock("../hooks/use-countdown", () => ({
  useCountdown: vi.fn(() => ({
    days: 1,
    hours: 2,
    minutes: 3,
    seconds: 4,
  })),
}));

describe("Countdown", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("기본 props로 렌더링", () => {
    const targetDate = new Date();
    const { container } = render(<Countdown targetDate={targetDate} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("자식 컴포넌트가 있을 때 렌더링", () => {
    const targetDate = new Date();
    const { container } = render(
      <Countdown targetDate={targetDate}>
        <div>Custom child</div>
      </Countdown>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByText("Custom child")).toBeInTheDocument();
  });

  it("SegmentDisplay와 Colon에 올바른 props 전달", () => {
    const targetDate = new Date();
    render(
      <Countdown
        targetDate={targetDate}
        color="red"
        size={100}
        colonGap={50}
        offColor="gray"
        onColor="green"
        animationDuration={300}
      />
    );

    const segmentDisplays = screen.getAllByRole("img");
    expect(segmentDisplays[0]).toHaveAttribute("width", "100");

    const colons = screen.getAllByRole("img", { name: "" });
    expect(colons[0]).toHaveAttribute("height", "200");
  });

  it("useCountdown 훅이 올바른 인자로 호출됨", () => {
    const targetDate = new Date();
    const onEnd = vi.fn();
    render(<Countdown targetDate={targetDate} onEnd={onEnd} />);

    expect(vi.mocked(useCountdown)).toHaveBeenCalledWith(targetDate, { onEnd });
  });

  it("날짜가 변경되면 리렌더링", () => {
    const { rerender } = render(<Countdown targetDate={new Date()} />);
    expect(vi.mocked(useCountdown)).toHaveBeenCalledTimes(1);

    rerender(<Countdown targetDate={new Date(Date.now() + 1000)} />);
    expect(vi.mocked(useCountdown)).toHaveBeenCalledTimes(2);
  });
});
