import toArray from 'lodash.toarray';

const segmenter =
  typeof Intl?.Segmenter !== 'undefined' ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;

/**
 * 주어진 텍스트를 사람이 인지하는 하나의 글자 단위로 쪼개어 길이를 샙니다.
 * 이모지 및 특수문자가 포함된 텍스트의 합리적인 길이를 구하기 위해 사용합니다.
 */
export const getGraphemeLength = (value: string) => {
  if (segmenter) {
    return Array.from(segmenter.segment(value)).length;
  }

  return toArray(value).length;
};
