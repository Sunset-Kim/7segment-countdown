# Countdown Component

이 프로젝트는 React 애플리케이션을 위한 유연하고 사용하기 쉬운 카운트다운 컴포넌트를 제공합니다. 세븐 세그먼트 디스플레이 스타일의 시각적 요소를 포함하여 남은 시간을 일, 시간, 분, 초 단위로 표시할 수 있습니다.

## 프로젝트 개요

이 라이브러리는 다음과 같은 주요 기능을 제공합니다:

1. `Countdown` 컴포넌트: 목표 날짜까지의 남은 시간을 계산하고 표시합니다.
2. `SevenSegment` 컴포넌트: 숫자를 세븐 세그먼트 디스플레이 스타일로 표시합니다.
3. `useCountdown` 훅: 카운트다운 로직을 구현하여 남은 시간을 계산합니다.

## 설치 방법

npm을 사용하여 패키지를 설치할 수 있습니다:

```bash
npm install 7segment-countdown-react
```

또는 yarn을 사용하는 경우:

```bash
yarn add 7segment-countdown-react
```

## 사용 방법

### 기본사용방법

```tsx
import { Countdown } from "countdown-component";

function App() {
  const targetDate = new Date("2024-12-31T23:59:59");

  return (
    <Countdown targetDate={targetDate}>
      <Countdown.Days />
      <Countdown.Hours />
      <Countdown.Minutes />
      <Countdown.Seconds />
    </Countdown>
  );
}
```

```tsx
function App() {
  const [count, setCount] = useState(0);
  const targetDate = useMemo(() => new Date("2024-08-03T00:00:00Z"), []);

  return (
    <>
      <div>
        <h1>7 Segment Countdown</h1>
      </div>

      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
            marginBottom: 50,
          }}
        >
          <button onClick={() => setCount((count) => count + 1)}>
            Increase
          </button>
          {count}
          <SevenSegment digit={count} />
          <button onClick={() => setCount((count) => count - 1)}>
            Decrease
          </button>
        </div>

        <Countdown targetDate={targetDate}>
          <Countdown.Days />
          <Countdown.Hours />
          <Countdown.Minutes />
          <Countdown.Seconds />
        </Countdown>
      </div>
    </>
  );
}
```

### 커스텀 스타일링

SevenSegment 컴포넌트의 스타일을 커스터마이즈할 수 있습니다:

```tsx
<Countdown.Days
  onColor="#ff0000"
  offColor="#330000"
  size={40}
  animationDuration="0.5s"
/>
```

### useCountdown 훅 사용

카운트다운 로직을 직접 사용하고 싶다면 useCountdown 훅을 활용할 수 있습니다:

```tsx
import { useCountdown } from "countdown-component";

function CustomCountdown() {
  const targetDate = new Date("2024-12-31T23:59:59");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div>
      {days}일 {hours}시간 {minutes}분 {seconds}초 남았습니다.
    </div>
  );
}
```

## Test Coverage

| File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| --------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files             | 29.85   | 54.54    | 25      | 29.85   |
| lib                   | 0       | 0        | 0       | 0       |
| main.ts               | 0       | 0        | 0       | 0       | 1                 |
| lib/components        | 37.95   | 63.15    | 33.33   | 37.95   |
| countdown-day.tsx     | 0       | 0        | 0       | 0       | 1-17              |
| countdown-hour.tsx    | 0       | 0        | 0       | 0       | 1-18              |
| countdown-minutes.tsx | 0       | 0        | 0       | 0       | 1-18              |
| countdown-seconds.tsx | 0       | 0        | 0       | 0       | 1-18              |
| countdown.context.tsx | 0       | 0        | 0       | 0       | 1-27              |
| countdown.tsx         | 0       | 0        | 0       | 0       | 1-35              |
| seven-segment.tsx     | 100     | 87.5     | 100     | 100     | 23                |
| use-countdown.ts      | 100     | 100      | 100     | 100     |

## 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
