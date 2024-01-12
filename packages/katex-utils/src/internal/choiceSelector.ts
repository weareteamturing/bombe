/**
 * _choiceSectionSelector -> _seperateChoiceSelector
 */
export const choiceSelector = (text: string) => {
  return extractChoiceAnswerLineWithoutPrefixNumber(extractTexOnlyBelowChoiceMark(text));

  /**
   * ex)
   * 1. A
   * 2. B
   * 3. C
   * 4. A,B
   * 5. A,B,c
   *
   * -> 5개 동일하게 각각 앞의 숫자 (예: '1. ')를 제외하고 글자 (예: A)만 선택한다.
   */
  function extractChoiceAnswerLineWithoutPrefixNumber(text?: string): string[] {
    if (!text) {
      return [];
    }
    return text
      .split(/\n/)
      .filter((s) => /^[1-5]\.\s+/.test(s))
      .map((s) => s.replace(/^[1-5]\.\s+/, ''));
  }

  /**
   * Selects below [선지n?]
   */
  function extractTexOnlyBelowChoiceMark(text: string): string {
    return /(^\[선지\s*\d*\](\r|\n))(.*)/gms.exec(text)?.[0] || '';
  }
};
