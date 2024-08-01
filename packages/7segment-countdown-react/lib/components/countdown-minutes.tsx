import { zeroPad } from "countdown-core";
import { useCountdownContext } from "./countdown.context";
import { SevenSegment, SevenSegmentProps } from "./seven-segment";

export const CountdownMinutes = ({
  ...props
}: Omit<SevenSegmentProps, "digit">) => {
  const { minutes } = useCountdownContext();
  const minutesString = zeroPad(minutes, 2);

  return (
    <>
      {minutesString.split("").map((hour, index) => {
        return <SevenSegment key={index} digit={parseInt(hour)} {...props} />;
      })}
    </>
  );
};
