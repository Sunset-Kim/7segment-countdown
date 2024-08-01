import { zeroPad } from "countdown-core";
import { useCountdownContext } from "./countdown.context";
import { SevenSegment, SevenSegmentProps } from "./seven-segment";

export const CountdownHour = ({
  ...props
}: Omit<SevenSegmentProps, "digit">) => {
  const { hours } = useCountdownContext();
  const hoursString = zeroPad(hours, 2);

  return (
    <>
      {hoursString.split("").map((hour, index) => {
        return <SevenSegment key={index} digit={parseInt(hour)} {...props} />;
      })}
    </>
  );
};
