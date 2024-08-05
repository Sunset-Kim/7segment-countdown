import { CommonProps } from "../types";

export interface DotProps extends CommonProps {
  position?: "top" | "bottom" | "center";
}

const getCy = (position: DotProps["position"]) => {
  switch (position) {
    case "top":
      return 10;
    case "center":
      return 100;
    case "bottom":
    default:
      return 190;
  }
};

export const Dot: React.FC<DotProps> = ({
  color = "dodgerblue",
  size = 100,
  position = "bottom",
}) => {
  const cy = getCy(position);

  return (
    <svg width={size * 0.2} height={size * 2} viewBox="0 0 20 200" role="img">
      <circle cx={10} cy={cy} r={5} fill={color} />
    </svg>
  );
};
