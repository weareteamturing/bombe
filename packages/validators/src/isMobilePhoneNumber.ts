/**
 * 핸드폰 전화번호인지 판별합니다.
 * 1. 01로 시작하고,
 * 2. 숫자로만 이루어져 있고,
 * 3. 11자의 길이를 가져야합니다.
 */
export function isMobilePhoneNumber(value: string): boolean {
  // const isStartWith01 = value.startsWith('01');
  // const isValidLength = value.length === 11;
  return /^01[0-9]{9}$/.test(value);
}
