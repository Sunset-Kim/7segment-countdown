import { useCountdownContext } from "./countdown.context";
import { SevenSegment, SevenSegmentProps } from "./seven-segment";

export const CountdownDay = ({
  ...props
}: Omit<SevenSegmentProps, "digit">) => {
  const { days } = useCountdownContext();
  const daysString = days.toString();
  return (
    <>
      {daysString.split("").map((day, index) => {
        return <SevenSegment key={index} digit={parseInt(day)} {...props} />;
      })}
    </>
  );
};
