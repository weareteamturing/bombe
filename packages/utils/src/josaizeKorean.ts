/**
 * 필요한 조사 타입이 있으면 이어서 적어주세요.
 */
type Josa = '이/가' | '을/를' | '과/와' | '은/는';

/**
 * 주어진 한글 단어에 적절할 조사를 붙여 반환합니다.
 */
export function josaizeKorean(koreanString: string, josaType: Josa): string {
  /**
   * 주어진 한글 텍스트가 받침이 있는 글자로 끝나는지 확인합니다
   */
  const isKoreanEndWithConsonant = (koreanString: string) => {
    const finalChrCode = koreanString.charCodeAt(koreanString.length - 1);
    const finalConsonantCode = (finalChrCode - 44032) % 28;
    return finalConsonantCode !== 0;
  };

  const josa = josaType.split('/')[isKoreanEndWithConsonant(koreanString) ? 0 : 1];

  return koreanString + josa;
}
