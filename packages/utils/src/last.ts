/**
 * 배열의 가장 마지막 원소를 반환하는 함수입니다.
 */
export function last<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}
