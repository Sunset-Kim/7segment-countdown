import { useId } from "react";
import { SevenSegment, SevenSegmentProps } from "./seven-segment";

interface SegmentDisplayProps extends Omit<SevenSegmentProps, "digit"> {
  value: number;
  place?: number;
}

export function SegmentDisplay({
  value,
  place = 2,
  ...props
}: SegmentDisplayProps) {
  const id = useId();
  return value
    .toString()
    .padStart(place, "0")
    .split("")
    .map((digit, index) => (
      <SevenSegment key={id + index} digit={parseInt(digit)} {...props} />
    ));
}
