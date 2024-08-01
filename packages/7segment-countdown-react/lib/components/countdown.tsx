import { useCountdown } from "./use-countdown";
import { CountdownProvider } from "./countdown.context";
import { PropsWithChildren } from "react";

interface CountdownProps extends PropsWithChildren {
  targetDate: Date;
}

export function Countdown({ targetDate, children }: CountdownProps) {
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
