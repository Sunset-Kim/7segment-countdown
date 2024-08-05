import { useCountdownContext } from "../../hooks/use-countdown-context";
import { useCountdownStyle } from "../../hooks/use-countdown-style-context";
import { SevenSegment, SevenSegmentProps } from "../seven-segment";

export const CountdownSeconds = ({
  ...props
}: Omit<SevenSegmentProps, "digit">) => {
  const { seconds } = useCountdownContext();
  const secondsString = seconds.toString().padStart(2, "0");
  const { ...styles } = useCountdownStyle();
  return (
    <>
      {secondsString.split("").map((hour, index) => {
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
