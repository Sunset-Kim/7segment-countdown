import { useCountdownContext } from "../../hooks/use-countdown-context";
import { useCountdownStyle } from "../../hooks/use-countdown-style-context";
import { SevenSegment, SevenSegmentProps } from "../seven-segment";

export const CountdownDay = ({
  ...props
}: Omit<SevenSegmentProps, "digit">) => {
  const { days } = useCountdownContext();
  const daysString = days.toString().padStart(2, "0");
  const { ...styles } = useCountdownStyle();
  return (
    <>
      {daysString.split("").map((day, index) => {
        return (
          <SevenSegment
            key={index}
            digit={parseInt(day)}
            {...styles}
            {...props}
          />
        );
      })}
    </>
  );
};
