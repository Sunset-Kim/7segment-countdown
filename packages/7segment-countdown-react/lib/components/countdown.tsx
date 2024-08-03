import { useCountdown } from "./use-countdown";

import { PropsWithChildren } from "react";
import { CountdownDay } from "./countdown-day";
import { CountdownMinutes } from "./countdown-minutes";
import { CountdownHour } from "./countdown-hour";
import { CountdownSeconds } from "./countdown-seconds";
import { CountdownStyleProvider } from "../contexts/coundown-style.context";
import { CountdownProvider } from "../contexts/countdown.context";
import { SevenSegmentProps } from "./seven-segment";

interface CountdownProps
  extends PropsWithChildren,
    Omit<SevenSegmentProps, "digit"> {
  targetDate: Date;
}

function CountdownContainer({
  targetDate,
  children,
  ...props
}: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <CountdownProvider
      value={{
        days,
        hours,
        minutes,
        seconds,
      }}
    >
      <CountdownStyleProvider value={{ ...props }}>
        {children}
      </CountdownStyleProvider>
    </CountdownProvider>
  );
}

export const Countdown = Object.assign(CountdownContainer, {
  Days: CountdownDay,
  Minutes: CountdownMinutes,
  Hours: CountdownHour,
  Seconds: CountdownSeconds,
});
