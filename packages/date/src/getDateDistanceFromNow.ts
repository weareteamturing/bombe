/**
 * 현재 시간과 주어진 시간과의 거리를 반환하는 함수입니다.
 */
export function getDateDistanceFromNow(
  time?: string,
  { includeYearPrefix }: { includeYearPrefix?: boolean } = { includeYearPrefix: false },
): string {
  if (!(time && time.length !== 0)) {
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
  if (diffSec < hour * 24) {
    return `${Math.floor(diffSec / hour)}시간 전`;
  }
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  if (includeYearPrefix) {
    return `${year}년 ${month}월 ${day}일`;
  } else {
    return `${month}월 ${day}일`;
  }
}

const min = 60;
const hour = min * 60;
