# Countdown Core

이 패키지는 카운트다운 기능의 핵심 로직을 제공합니다. 시간 계산, 세그먼트 디스플레이 로직, 그리고 유틸리티 함수들을 포함합니다.

## 주요 기능

- 남은 시간 계산
- 시간을 일, 시간, 분, 초로 포맷팅
- 7세그먼트 디스플레이를 위한 세그먼트 맵핑
- 세그먼트 표시를 위한 SVG 포인트 생성

## 주요 함수

### calculateTimeLeft

목표 날짜까지 남은 시간을 초 단위로 계산합니다.

```javascript
const timeLeft = calculateTimeLeft({ targetDate, currentDate });
```

### formatTimeLeft

초 단위의 시간을 일, 시간, 분, 초로 포맷팅합니다.

```js
const { days, hours, minutes, seconds } = formatTimeLeft(timeLeftInSeconds);
```

### getPoints

7세그먼트 디스플레이의 각 세그먼트에 대한 SVG 포인트를 생성합니다.

```js
const segmentPoints = getPoints(segmentKey);
```

### zeroPad

숫자를 지정된 길이의 문자열로 변환하고, 필요한 경우 앞에 0을 채웁니다.

```js
const paddedNumber = zeroPad(number, length);
```

### 상수

SEGMENT_KEY: 7세그먼트 디스플레이의 각 세그먼트를 나타내는 키
SEGMENT_MAP: 각 숫자(0-9)에 대한 활성화된 세그먼트 맵

### 사용 예시

```js
import { calculateTimeLeft, formatTimeLeft, getPoints } from "countdown-core";

const targetDate = new Date("2024-12-31T23:59:59");
const timeLeft = calculateTimeLeft({ targetDate });
const formattedTime = formatTimeLeft(timeLeft);

console.log(formattedTime);
// 출력: { days: X, hours: Y, minutes: Z, seconds: W }

const segmentPointsForA = getPoints("A");
// 'A' 세그먼트에 대한 SVG 포인트 문자열 반환
```

## 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
