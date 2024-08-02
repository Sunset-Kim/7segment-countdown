import { zeroPad } from "countdown-core";
import { useCountdownContext } from "./countdown.context";
import { SevenSegment, SevenSegmentProps } from "./seven-segment";

export const CountdownDay = ({
  ...props
}: Omit<SevenSegmentProps, "digit">) => {
  const { days } = useCountdownContext();
  const daysString = zeroPad(days, 2);
  return (
    <>
      {daysString.split("").map((day, index) => {
        return <SevenSegment key={index} digit={parseInt(day)} {...props} />;
      })}
    </>
  );
};
