import { useCountdown } from "./use-countdown";
import { CountdownProvider } from "../contexts/countdown.context";
import { PropsWithChildren } from "react";
import { CountdownDay } from "./countdown-day";
import { CountdownMinutes } from "./countdown-minutes";
import { CountdownHour } from "./countdown-hour";
import { CountdownSeconds } from "./countdown-seconds";

interface CountdownProps extends PropsWithChildren {
  targetDate: Date;
}

function CountdownContainer({ targetDate, children }: CountdownProps) {
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
      {children}
    </CountdownProvider>
  );
}

export const Countdown = Object.assign(CountdownContainer, {
  Days: CountdownDay,
  Minutes: CountdownMinutes,
  Hours: CountdownHour,
  Seconds: CountdownSeconds,
});
