import { describe, it, expect, beforeEach, vi } from "vitest";
import { useControlledCountdown } from "./use-controlled-countdown";
import { act, renderHook } from "@testing-library/react";
import { afterEach } from "node:test";

describe("useControlledCountdown", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("초기화 상태를 올바르게 설정한다", () => {
    const { result } = renderHook(() => useControlledCountdown(3600));

    expect(result.current.hours).toBe(1);
    expect(result.current.minutes).toBe(0);
    expect(result.current.seconds).toBe(0);
    expect(result.current.isRunning).toBe(false);
  });

  it("start 함수가 카운트다운을 시작한다", () => {
    const { result } = renderHook(() => useControlledCountdown(60));

    act(() => {
      result.current.start();
    });

    expect(result.current.isRunning).toBe(true);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBe(59);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBe(58);
  });

  it("stop 함수가 카운트다운을 멈춘다", async () => {
    const { result } = renderHook(() => useControlledCountdown(60));

    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    act(() => {
      result.current.stop();
    });

    expect(result.current.seconds).toBe(59);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBe(59);
  });

  it("reset 함수가 카운트다운을 초기 상태로 되돌린다", () => {
    const { result } = renderHook(() => useControlledCountdown(60));
    expect(result.current.minutes).toBe(1);

    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBe(59);

    act(() => {
      result.current.reset();
    });

    expect(result.current.isRunning).toBe(false);
    expect(result.current.minutes).toBe(1);
  });

  it("카운트다운이 0에 도달하면 자동으로 멈춘다", () => {
    const { result } = renderHook(() => useControlledCountdown(2));

    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.isRunning).toBe(false);
    expect(result.current.seconds).toBe(0);
  });
});
