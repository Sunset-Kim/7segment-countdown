import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCountdown } from "./use-countdown";

describe("useCountdown", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should initialize with correct time left", () => {
    const targetDate = new Date(Date.now() + 10000); // 10 seconds from now
    const { result } = renderHook(() => useCountdown(targetDate));

    expect(result.current).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 10,
    });
  });

  it("should update time left every second", () => {
    const targetDate = new Date(Date.now() + 3000); // 3 seconds from now
    const { result } = renderHook(() => useCountdown(targetDate));

    expect(result.current).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 3,
    });

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 2,
    });

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 1,
    });
  });

  it("should stop countdown when target date is reached", () => {
    const targetDate = new Date(Date.now() + 2000); // 2 seconds from now
    const { result } = renderHook(() => useCountdown(targetDate));

    expect(result.current).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 2,
    });

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(result.current).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should handle target date in the past", () => {
    const targetDate = new Date(Date.now() - 5000); // 5 seconds in the past
    const { result } = renderHook(() => useCountdown(targetDate));

    expect(result.current).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should clear interval on unmount", () => {
    const targetDate = new Date(Date.now() + 10000); // 10 seconds from now
    const { unmount } = renderHook(() => useCountdown(targetDate));

    const clearIntervalSpy = vi.spyOn(global, "clearInterval");
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });

  it("should call onEnd callback when target date is reached", () => {
    const targetDate = new Date(Date.now() + 2000); // 2 seconds from now
    const onEnd = vi.fn();
    renderHook(() => useCountdown(targetDate, { onEnd }));

    expect(onEnd).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(onEnd).toHaveBeenCalled();
  });
});
