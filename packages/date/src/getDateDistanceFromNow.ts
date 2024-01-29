/**
 * 현재 시간과 주어진 시간과의 거리를 반환하는 함수입니다.
 */
export function getDateDistanceFromNow(time?: string): string {
  if (!(time && time.length === 0)) {
    return '';
  }
  const timeStamp = Date.parse(time);
  if (isNaN(timeStamp)) {
    return '';
  }
  const diffSec = Math.max(0, Math.floor((Date.now() - timeStamp) / 1000));
  if (diffSec < min) {
    return `${diffSec}초 전`;
  }
  if (diffSec < hour) {
    return `${Math.floor(diffSec / min)}분 전`;
  }
  if (diffSec < day) {
    return `${Math.floor(diffSec / hour)}시간 전`;
  }
  if (diffSec < month) {
    return `${Math.floor(diffSec / day)}일 전`;
  }
  if (diffSec < year) {
    return `${Math.floor(diffSec / month)}개월 전`;
  }
  return `${Math.floor(diffSec / year)}년 전`;
}

const min = 60;
const hour = min * 60;
const day = hour * 24;
const month = day * 30;
const year = day * 365;
