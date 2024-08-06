# @7segment/countdown-react 라이브러리 사용 예제

이 프로젝트는 `@7segment/countdown-react` 라이브러리를 사용하여 7-세그먼트 디스플레이와 카운트다운 기능을 구현하는 방법을 보여줍니다.

## 설치

먼저, 프로젝트에 라이브러리를 설치합니다:

```bash
npm install @7segment/countdown-react
```

## 기본 사용법

### 1. 기본 7-세그먼트 디스플레이

단순한 7-세그먼트 디스플레이를 구현하여 숫자를 표시합니다.

```jsx
import { useState } from "react";
import { SevenSegment } from "@7segment/countdown-react";

function BasicSevenSegment() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <SevenSegment digit={count} />
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  );
}
```

### 2. 7-세그먼트 카운트다운

특정 날짜까지 카운트다운하는 디스플레이를 구현합니다.

```jsx
import { useState } from "react";
import { Countdown } from "@7segment/countdown-react";

function SevenSegmentCountdown() {
  const [targetDate, setTargetDate] = useState(
    new Date("2024-08-09T00:00:00+09:00")
  );

  return (
    <div>
      <input
        type="datetime-local"
        value={targetDate.toISOString().slice(0, 16)}
        onChange={(e) => setTargetDate(new Date(e.target.value))}
      />
      <Countdown targetDate={targetDate} size={20} />
    </div>
  );
}
```

### 3. 7-세그먼트 카운트다운 타이머

제어 가능한 카운트다운 타이머를 구현합니다.

```jsx
import {
  SegmentDisplay,
  Colon,
  useControlledCountdown,
} from "@7segment/countdown-react";

function ControlledCountdownTimer() {
  const { days, hours, minutes, seconds, start, stop, reset, isRunning } =
    useControlledCountdown(60 * 60 * 24 * 1); // 1일

  return (
    <div>
      <div>
        <SegmentDisplay value={days} />
        <Colon />
        <SegmentDisplay value={hours} />
        <Colon />
        <SegmentDisplay value={minutes} />
        <Colon />
        <SegmentDisplay value={seconds} />
      </div>
      <div>
        <button onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={stop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
```

### 주요 컴포넌트 및 훅

SevenSegment: 단일 숫자를 표시하는 7-세그먼트 디스플레이
Countdown: 목표 날짜까지 카운트다운하는 컴포넌트
SegmentDisplay: 여러 자릿수를 표시할 수 있는 세그먼트 디스플레이
Colon: 시간 구분을 위한 콜론 컴포넌트
useControlledCountdown: 카운트다운 로직을 제어할 수 있는 커스텀 훅

이 예제를 통해 @7segment/countdown-react 라이브러리의 다양한 기능을 활용하여 7-세그먼트 디스플레이와 카운트다운 기능을 쉽게 구현할 수 있습니다.
이 README는 코드 예제를 설명하고 주요 컴포넌트와 훅의 사용법을 보여줍니다. 필요에 따라 이 내용을 수정하거나 확장할 수 있습니다.
