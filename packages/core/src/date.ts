import { DAY_IN_SEC, HOUR_IN_SEC, MIN_IN_SEC, SEC_IN_MS } from "./constants";

/**
 * 목표 날짜까지 남은 시간(초)을 계산합니다.
 *
 * @param {Object} params - 함수 파라미터
 * @param {Date} params.targetDate - 목표 날짜
 * @param {Date} [params.currentDate=new Date()] - 현재 날짜. 기본값은 현재 시간입니다.
 * @returns {number} 목표 날짜까지 남은 시간(초). 0보다 작을 수 없습니다.
 */
export const calculateTimeLeft = ({
  targetDate,
  currentDate = new Date(),
}: {
  targetDate: Date;
  currentDate?: Date;
}) => {
  const difference = targetDate.getTime() - currentDate.getTime();
  return Math.max(Math.floor(difference / SEC_IN_MS), 0);
};

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
export const formatTimeLeft = (timeLeft: number) => {
  const days = Math.floor(timeLeft / DAY_IN_SEC);
  const hours = Math.floor((timeLeft % DAY_IN_SEC) / HOUR_IN_SEC);
  const minutes = Math.floor((timeLeft % HOUR_IN_SEC) / MIN_IN_SEC);
  const seconds = timeLeft % MIN_IN_SEC;

  return { days, hours, minutes, seconds };
};
