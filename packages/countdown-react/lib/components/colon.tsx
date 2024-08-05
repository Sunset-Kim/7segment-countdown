import { CommonProps } from "../types";

export interface ColonProps extends CommonProps {
  colonGap?: number;
}

export const Colon: React.FC<ColonProps> = ({
  color = "dodgerblue",
  size = 100,
  colonGap = 60,
}) => {
  return (
    <svg width={size * 0.2} height={size * 2} viewBox="0 0 20 200" role="img">
      <circle cx={10} cy={100 - colonGap / 2} r={5} fill={color} />
      <circle cx={10} cy={100 + colonGap / 2} r={5} fill={color} />
    </svg>
  );
};
