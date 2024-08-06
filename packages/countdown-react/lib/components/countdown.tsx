import { useCountdown } from "../hooks/use-countdown";
import { memo, PropsWithChildren, useMemo } from "react";
import { SevenSegmentProps } from "./seven-segment";
import { Colon, ColonProps } from "./colon";
import { SegmentDisplay } from "./segment-display";

export interface CountdownProps
  extends PropsWithChildren,
    Omit<SevenSegmentProps, "digit">,
    ColonProps {
  targetDate: Date;
  onEnd?: () => void;
}

function CountdownContainer(props: CountdownProps) {
  const {
    targetDate,
    children,
    onEnd,
    animationDuration,
    color,
    offColor,
    onColor,
    colonGap,
    size,
  } = props;

  const _targetDate = useMemo(() => targetDate, [targetDate]);
  const { days, hours, minutes, seconds } = useCountdown(_targetDate, {
    onEnd,
  });

  const segmentDisplayProps = {
    animationDuration,
    offColor,
    onColor,
    size,
  };
  const colonProps = {
    color,
    colonGap,
    size,
  };

  return (
    children ?? (
      <>
        <SegmentDisplay
          value={days}
          place={Math.max(2, days.toString().length)}
          {...segmentDisplayProps}
        />
        <Colon {...colonProps} />
        <SegmentDisplay value={hours} {...segmentDisplayProps} />
        <Colon {...colonProps} />
        <SegmentDisplay value={minutes} {...segmentDisplayProps} />
        <Colon {...colonProps} />
        <SegmentDisplay value={seconds} {...segmentDisplayProps} />
      </>
    )
  );
}

export const Countdown = memo(CountdownContainer);
