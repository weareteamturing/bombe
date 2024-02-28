/**
 * 괄호 문자열이 올바르게 끝나는 인덱스를 반환한다.
 * 항상 text[startIndex]는 '{'문자여야 한다.
 *
 * 반환되는 인덱스는 '}'를 가리키며 찾지 못했다면 -1을 반환한다.
 */
export function findBalancedBracketEndIndex({
  startIndex,
  text,
  topLevelBracketCount = 1,
}: {
  text: string;
  startIndex: number;
  topLevelBracketCount?: number;
}): number {
  if (text.length <= startIndex || text[startIndex] !== '{') {
    return -1;
  }
  let open = 1;

  for (let i = startIndex + 1; i < text.length; i++) {
    if (text[i] === '{') {
      open += 1;
    } else if (text[i] === '}') {
      open -= 1;
      if (open < 0) {
        return -1;
      }
      if (open === 0) {
        topLevelBracketCount -= 1;
        if (topLevelBracketCount === 0) {
          return i;
        }
      }
    }
  }

  return -1;
}
