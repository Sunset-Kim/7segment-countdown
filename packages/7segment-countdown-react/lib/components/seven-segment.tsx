import React, { ComponentPropsWithoutRef, useId } from "react";
import { SEGMENT_KEY, SEGMENT_MAP, getPoints } from "countdown-core";

/**
 * SevenSegment 컴포넌트의 속성을 정의하는 인터페이스
 * @interface SevenSegmentProps
 */
export interface SevenSegmentProps {
  /** 표시할 숫자 (0-9) */
  digit: number;
  /** 활성화된 세그먼트의 색상 */
  onColor?: string;
  /** 비활성화된 세그먼트의 색상 */
  offColor?: string;
  /** 컴포넌트의 크기 (픽셀 단위) */
  size?: number;
  /** 세그먼트 색상 변경 애니메이션 지속 시간 (밀리초 단위) */
  animationDuration?: number;
}

export const SevenSegment: React.FC<SevenSegmentProps> = ({
  digit,
  onColor = "dodgerblue",
  offColor = "aliceblue",
  size = 100,
  animationDuration = 300,
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
              fill: segments.includes(segment) ? onColor : offColor,
              transition: `fill ${animationDuration}ms`,
            }}
          />
        ))}
      </g>
    </svg>
  );
};

/**
 * @interface SegmentProps
 * @extends {ComponentPropsWithoutRef<"polygon">}
 */
interface SegmentProps
  extends Omit<ComponentPropsWithoutRef<"polygon">, "points"> {
  /** segment 식별자 */
  segment: string;
  /** 활성화 여부 */
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
