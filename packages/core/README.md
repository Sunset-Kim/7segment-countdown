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
/**
 * 목표 날짜까지 남은 시간(초)을 계산합니다.
 *
 * @param {Object} params - 함수 파라미터
 * @param {Date} params.targetDate - 목표 날짜
 * @param {Date} [params.currentDate=new Date()] - 현재 날짜. 기본값은 현재 시간입니다.
 * @returns {number} 목표 날짜까지 남은 시간(초). 음수 값은 0으로 처리됩니다.
 */
export const calculateTimeLeft = ({
  targetDate,
  currentDate = new Date(),
}) => {};
```

### formatTimeLeft

초 단위의 시간을 일, 시간, 분, 초로 포맷팅합니다.

```js
/**
 * 주어진 시간(초)을 일, 시간, 분, 초 단위로 변환합니다.
 *
 * @param {number} timeLeft - 변환할 시간(초)
 * @returns {Object} 변환된 시간 객체
 * @returns {number} returns.days - 일 수
 * @returns {number} returns.hours - 시간 수
 * @returns {number} returns.minutes - 분 수
 * @returns {number} returns.seconds - 초 수
 */
export const formatTimeLeft = (timeLeft) => {};
```

### getPoints

7세그먼트 디스플레이의 각 세그먼트에 대한 SVG 포인트를 생성합니다.

```js
/**
 * 주어진 세그먼트 키에 해당하는 SVG 포인트 문자열을 반환합니다.
 * @param segment 세그먼트 키 (A, B, C, D, E, F, G 중 하나)
 * @returns SVG 포인트 문자열
 */
const segmentPoints = getPoints(segmentKey);
```

### 상수

```ts
/**
 * 7-segment display의 각 세그먼트를 나타내는 키 배열
 */
export const SEGMENT_KEY = Object.freeze(["A", "B", "C", "D", "E", "F", "G"]);

/**
 * 7-segment display에서 각 숫자를 표현하는 세그먼트 조합 맵
 */
export const SEGMENT_MAP = Object.freeze({
  "0": ["A", "B", "C", "D", "E", "F"],
  "1": ["B", "C"],
  "2": ["A", "B", "G", "E", "D"],
  "3": ["A", "B", "G", "C", "D"],
  "4": ["F", "G", "B", "C"],
  "5": ["A", "F", "G", "C", "D"],
  "6": ["A", "F", "E", "D", "C", "G"],
  "7": ["A", "B", "C"],
  "8": ["A", "B", "C", "D", "E", "F", "G"],
  "9": ["A", "B", "C", "D", "F", "G"],
});
```

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
