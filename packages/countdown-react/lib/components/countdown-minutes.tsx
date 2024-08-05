import { useCountdownContext } from "../hooks/use-countdown-context";
import { useCountdownStyle } from "../hooks/use-countdown-style-context";
import { SevenSegment, SevenSegmentProps } from "./seven-segment";

export const CountdownMinutes = ({
  ...props
}: Omit<SevenSegmentProps, "digit">) => {
  const { minutes } = useCountdownContext();
  const minutesString = minutes.toString().padStart(2, "0");
  const { ...styles } = useCountdownStyle();
  return (
    <>
      {minutesString.split("").map((hour, index) => {
        return (
          <SevenSegment
            key={index}
            digit={parseInt(hour)}
            {...styles}
            {...props}
          />
        );
      })}
    </>
  );
};
