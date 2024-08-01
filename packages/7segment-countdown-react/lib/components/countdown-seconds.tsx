import { zeroPad } from "countdown-core";
import { useCountdownContext } from "./countdown.context";
import { SevenSegment, SevenSegmentProps } from "./seven-segment";

export const CountdownSeconds = ({
  ...props
}: Omit<SevenSegmentProps, "digit">) => {
  const { seconds } = useCountdownContext();
  const secondsString = zeroPad(seconds, 2);

  return (
    <>
      {secondsString.split("").map((hour, index) => {
        return <SevenSegment key={index} digit={parseInt(hour)} {...props} />;
      })}
    </>
  );
};
