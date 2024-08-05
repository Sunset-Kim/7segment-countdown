import { useCountdownContext } from "../../hooks/use-countdown-context";
import { useCountdownStyle } from "../../hooks/use-countdown-style-context";
import { SevenSegment, SevenSegmentProps } from "../seven-segment";

export const CountdownHour = ({
  ...props
}: Omit<SevenSegmentProps, "digit">) => {
  const { hours } = useCountdownContext();
  const hoursString = hours.toString().padStart(2, "0");
  const { ...styles } = useCountdownStyle();

  return (
    <>
      {hoursString.split("").map((hour, index) => {
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
