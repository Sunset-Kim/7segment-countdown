# Countdown Component

이 프로젝트는 React 애플리케이션을 위한 유연하고 사용하기 쉬운 카운트다운 컴포넌트를 제공합니다. 세븐 세그먼트 디스플레이 스타일의 시각적 요소를 포함하여 남은 시간을 일, 시간, 분, 초 단위로 표시할 수 있습니다.

## 프로젝트 개요

이 라이브러리는 다음과 같은 주요 기능을 제공합니다:

1. `SevenSegment` 컴포넌트는 7-세그먼트 디스플레이 형식을 사용하여 숫자(0-9)를 시각적으로 표시하는 React 컴포넌트입니다. 숫자의 각 세그먼트는 활성화 상태에 따라 다른 색상으로 표시됩니다.

2. `SegmentDisplay` 컴포넌트는 주어진 숫자를 7-세그먼트 디스플레이 형식으로 시각적으로 표시하는 React 컴포넌트입니다. 이 컴포넌트는 SevenSegment 컴포넌트를 사용하여 여러 자릿수를 표시합니다.

3. `Countdown` 컴포넌트는 주어진 목표 날짜(targetDate)까지 남은 시간을 7-세그먼트 디스플레이 형식으로 시각적으로 표시하는 React 컴포넌트입니다. 이 컴포넌트는 useCountdown 훅을 사용하여 남은 시간을 계산하고, SegmentDisplay와 Colon 컴포넌트를 사용하여 남은 시간의 각 부분을 표시합니다.

4. `useCountdown` 훅은 주어진 목표 날짜까지 남은 시간을 계산하고 관리하는 커스텀 React 훅입니다. 이 훅은 남은 시간을 일, 시간, 분, 초 단위로 포맷하여 반환하며, 카운트다운이 0에 도달하면 지정된 콜백 함수를 호출합니다.

5. `useControlledCountdown` 훅은 제어 가능한 카운트다운 타이머를 제공하는 React 훅입니다. 이 훅은 주어진 초기 시간에서 시작하여, 남은 시간을 일, 시간, 분, 초 단위로 포맷하여 반환하며, 카운트다운의 시작, 중지, 초기화 기능을 제공합니다.

## 설치 방법

npm을 사용하여 패키지를 설치할 수 있습니다:

```bash
npm install @7segment/react
```

또는 yarn을 사용하는 경우:

```bash
yarn add @7segment/react
```

## 사용 방법

### Seven Segment

다음과 같은 속성을 가집니다.

| 속성                | 타입   | 설명                                             | 기본값       |
| ------------------- | ------ | ------------------------------------------------ | ------------ |
| `digit`             | number | 표시할 숫자 (0-9)                                | -            |
| `onColor`           | string | 활성화된 세그먼트의 색상                         | "dodgerblue" |
| `offColor`          | string | 비활성화된 세그먼트의 색상                       | "aliceblue"  |
| `size`              | number | 컴포넌트의 크기 (픽셀 단위)                      | 100          |
| `animationDuration` | number | 세그먼트 색상 변경 애니메이션 지속 시간 (밀리초) | 300          |

```ts
import React from "react";
import { SevenSegment } from "./path/to/SevenSegment";

const App = () => {
  return (
    <div>
      <h1>Seven Segment Display</h1>
      <SevenSegment
        digit={5}
        onColor="red"
        offColor="gray"
        size={150}
        animationDuration={500}
      />
    </div>
  );
};

export default App;
```

### Segment Display

컴포넌트는 아래와 같은 속성을 가집니다
| 속성 | 타입 | 설명 | 기본값 |
|----------------------|---------|--------------------------------------------------|-------------|
| `value` | number | 표시할 숫자 | - |
| `place` | number | 표시할 자리수 (자릿수를 맞추기 위해 앞에 0을 채움) | 2 |
| `onColor` | string | 활성화된 세그먼트의 색상 | "dodgerblue"|
| `offColor` | string | 비활성화된 세그먼트의 색상 | "aliceblue" |
| `size` | number | 컴포넌트의 크기 (픽셀 단위) | 100 |
| `animationDuration` | number | 세그먼트 색상 변경 애니메이션 지속 시간 (밀리초) | 300 |

```ts
import React from "react";
import { SegmentDisplay } from "./path/to/SegmentDisplay";

const App = () => {
  return (
    <div>
      <h1>Segment Display</h1>
      <SegmentDisplay value={5} /> // 05
      <SegmentDisplay value={42} onColor="green" /> //42
      <SegmentDisplay value={7} size={150} />
      <SegmentDisplay value={123} place={5} animationDuration={1000} /> //00123
    </div>
  );
};

export default App;
```

### Countdown

| 속성                | 타입     | 설명                                                  | 기본값       |
| ------------------- | -------- | ----------------------------------------------------- | ------------ |
| `targetDate`        | Date     | 목표 날짜와 시간                                      | -            |
| `onEnd`             | function | 카운트다운 종료 시 호출되는 콜백 함수                 | -            |
| `onColor`           | string   | 활성화된 세그먼트의 색상                              | "dodgerblue" |
| `offColor`          | string   | 비활성화된 세그먼트의 색상                            | "aliceblue"  |
| `size`              | number   | 컴포넌트의 크기 (픽셀 단위)                           | 100          |
| `animationDuration` | number   | 세그먼트 색상 변경 애니메이션 지속 시간 (밀리초 단위) | 300          |
| `color`             | string   | 콜론의 색상                                           | "black"      |
| `colonGap`          | number   | 콜론 간격 (픽셀 단위)                                 | 10           |

```ts
import React from "react";
import { Countdown } from "./path/to/Countdown";

const App = () => {
  const targetDate = new Date("2024-12-31T23:59:59");

  return (
    <div>
      <h1>Countdown to New Year</h1>
      <Countdown
        targetDate={targetDate}
        onColor="red"
        offColor="gray"
        size={50}
        animationDuration={500}
        color="black"
        colonGap={10}
      />
    </div>
  );
};

export default App;
```

### useCountdown

#### Parameter

| 파라미터       | 타입     | 설명                                                 |
| -------------- | -------- | ---------------------------------------------------- |
| `targetDate`   | Date     | 카운트다운의 목표 날짜입니다.                        |
| `option`       | Object   | 선택적 설정 객체입니다.                              |
| `option.onEnd` | Function | 카운트다운이 0에 도달했을 때 호출될 콜백 함수입니다. |

#### Returns

| 속성      | 타입   | 설명      |
| --------- | ------ | --------- |
| `days`    | number | 남은 일수 |
| `hours`   | number | 남은 시간 |
| `minutes` | number | 남은 분   |
| `seconds` | number | 남은 초   |

#### Example

```ts
import React from "react";
import { useCountdown } from "./path/to/useCountdown";

const CountdownComponent = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2025-01-01"),
    {
      onEnd: () => console.log("카운트다운 종료!"),
    }
  );

  return (
    <div>
      <h1>Countdown to 2025</h1>
      <div>
        {days}일 {hours}시간 {minutes}분 {seconds}초 남음
      </div>
    </div>
  );
};

export default CountdownComponent;
```

### useControlledCountdown

#### Parameter

| 파라미터         | 타입   | 설명                            |
| ---------------- | ------ | ------------------------------- |
| `initialSeconds` | number | 카운트다운의 초기 시간(초 단위) |

#### Returns

| 속성        | 타입     | 설명                    |
| ----------- | -------- | ----------------------- |
| `days`      | number   | 남은 일수               |
| `hours`     | number   | 남은 시간               |
| `minutes`   | number   | 남은 분                 |
| `seconds`   | number   | 남은 초                 |
| `isRunning` | boolean  | 카운트다운 실행 중 여부 |
| `start`     | function | 카운트다운 시작 함수    |
| `stop`      | function | 카운트다운 중지 함수    |
| `reset`     | function | 카운트다운 초기화 함수  |

#### Example

```ts
import React from "react";
import { useControlledCountdown } from "./path/to/useControlledCountdown";

const CountdownComponent = () => {
  const { days, hours, minutes, seconds, isRunning, start, stop, reset } =
    useControlledCountdown(3600);

  return (
    <div>
      <div>
        {days}일 {hours}시간 {minutes}분 {seconds}초 남음
      </div>
      <div>
        {isRunning ? (
          <button onClick={stop}>중지</button>
        ) : (
          <button onClick={start}>시작</button>
        )}
        <button onClick={reset}>리셋</button>
      </div>
    </div>
  );
};

export default CountdownComponent;
```

## Test Coverage

| File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| --------------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files                   | 85      | 89.13    | 78.57   | 85      |
| lib                         | 0       | 0        | 0       | 0       |
| main.ts                     | 0       | 0        | 0       | 0       | 1                 |
| lib/components              | 99.28   | 90       | 100     | 99.28   |
| colon.tsx                   | 100     | 100      | 100     | 100     |
| countdown.tsx               | 100     | 100      | 100     | 100     |
| dot.tsx                     | 95.65   | 83.33    | 100     | 95.65   | 12                |
| segment-display.tsx         | 100     | 100      | 100     | 100     |
| seven-segment.tsx           | 100     | 87.5     | 100     | 100     | 32                |
| lib/hooks                   | 100     | 100      | 100     | 100     |
| use-controlled-countdown.ts | 100     | 100      | 100     | 100     |
| use-countdown.ts            | 100     | 100      | 100     | 100     |

## 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
