import React, { ComponentPropsWithoutRef, useId } from "react";
import { SEGMENT_KEY, SEGMENT_MAP, getPoints } from "countdown-core";

interface SevenSegmentProps {
  digit: number;
  segmentOnColor?: string;
  segmentOffColor?: string;
  size?: number;
  animationDuration?: string;
}

export const SevenSegment: React.FC<SevenSegmentProps> = ({
  digit,
  segmentOnColor = "dodgerblue",
  segmentOffColor = "aliceblue",
  size = 100,
  animationDuration = "0.3s",
}) => {
  const id = useId();

  const absDigit = Math.abs(digit) % 10;
  const digitStr = String(absDigit) as keyof typeof SEGMENT_MAP;
  const segments = SEGMENT_MAP[digitStr] || [];

  return (
    <svg width={size} height={size * 2} viewBox="0 0 100 200" role="img">
      <g>
        {SEGMENT_KEY.map((segment) => (
          <Segment
            key={`${id}-${segment}`}
            segment={segment}
            isActive={segments.includes(segment)}
            style={{
              fill: segments.includes(segment)
                ? segmentOnColor
                : segmentOffColor,
              transition: `fill ${animationDuration}`,
            }}
          />
        ))}
      </g>
    </svg>
  );
};

interface SegmentProps
  extends Omit<ComponentPropsWithoutRef<"polygon">, "points"> {
  segment: string;
  isActive: boolean;
}

function Segment({ segment, isActive, ...props }: SegmentProps) {
  return (
    <polygon
      data-testid={`segment-${segment}`}
      id={`segment-${segment}`}
      className={`segment ${isActive ? "on" : ""}`}
      points={getPoints(segment)}
      {...props}
    />
  );
}
