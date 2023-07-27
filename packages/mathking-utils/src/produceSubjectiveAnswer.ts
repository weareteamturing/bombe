type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
const MAX_LEN = 16;
function produceWithDigit(current: string, input: Digit): string {
  return `${current}${input}`;
}
function produceWithDelete(current: string): string {
  let result = '';
  if (current.length > 0) {
    result = current.slice(0, -1);
  } else {
    result = '';
  }
  return result;
}
function produceWithMinus(current: string): string {
  let result = current;
  if (current.length === 0) {
    result = '-';
  }
  return result;
}

function removeUselessLeadingZeros(input: string): string {
  let result = input;
  let isNegative = false;
  if (result.charAt(0) === '-') {
    isNegative = true;
    result = result.substr(1);
  }

  let removed = 0;
  for (let i = 0; i < input.length; i++) {
    if (result.charAt(i) === '0') {
      removed++;
    } else {
      break;
    }
  }
  result = result.substring(removed);
  if (result.length === 0) {
    result = '0';
  } else if (isNegative) {
    result = '-' + result;
  }
  return result;
}

export function produceSubjectiveAnswer(current: string, input: Digit | 'delete' | 'minus'): string {
  let changed: string = current;

  if (input === 'delete') {
    changed = produceWithDelete(current);
  } else if (input === 'minus') {
    changed = produceWithMinus(current);
  } else {
    if (input >= 10 || input < 0) return current;
    changed = produceWithDigit(current, input);
  }

  // 정수 형태의 문자열인지 확인하고 쓸모없는 leading zero들을 지웁니다.
  if (/^-?\d+$/.test(changed)) {
    changed = removeUselessLeadingZeros(changed);
  }
  if (changed.length > MAX_LEN) {
    changed = changed.substring(0, MAX_LEN);
  }
  return changed;
}
