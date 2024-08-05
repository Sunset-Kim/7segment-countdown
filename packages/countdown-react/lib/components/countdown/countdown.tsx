import { useCountdown } from "../../hooks/use-countdown";

import { PropsWithChildren } from "react";
import { CountdownDay } from "./countdown-day";
import { CountdownMinutes } from "./countdown-minutes";
import { CountdownHour } from "./countdown-hour";
import { CountdownSeconds } from "./countdown-seconds";
import { CountdownStyleProvider } from "../../contexts/coundown-style.context";
import { CountdownProvider } from "../../contexts/countdown.context";
import { SevenSegmentProps } from "../seven-segment";
import { CountDownColon } from "./countdown-colon";
import { ColonProps } from "../colon";

interface CountdownProps
  extends PropsWithChildren,
    Omit<SevenSegmentProps, "digit">,
    ColonProps {
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
        {children ?? (
          <>
            <Countdown.Days />
            <Countdown.Colon />
            <Countdown.Hours />
            <Countdown.Colon />
            <Countdown.Minutes />
            <Countdown.Colon />
            <Countdown.Seconds />
          </>
        )}
      </CountdownStyleProvider>
    </CountdownProvider>
  );
}

export const Countdown = Object.assign(CountdownContainer, {
  Days: CountdownDay,
  Minutes: CountdownMinutes,
  Hours: CountdownHour,
  Seconds: CountdownSeconds,
  Colon: CountDownColon,
});
