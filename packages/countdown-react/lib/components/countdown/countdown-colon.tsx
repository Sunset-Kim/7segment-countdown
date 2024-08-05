import { useCountdownStyle } from "../../hooks/use-countdown-style-context";
import { Colon, ColonProps } from "../colon";

export const CountDownColon = ({ ...props }: ColonProps) => {
  const { size, color, colonGap: spacing } = useCountdownStyle();
  return <Colon size={size} color={color} colonGap={spacing} {...props} />;
};
