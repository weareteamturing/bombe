import { isKorean } from '../src';

describe('isKorean은', () => {
  it('한국어인 경우, true를 반환해야 한다', () => {
    expect(isKorean('이 글은 한국어로 구성된 글씨입니다')).toEqual(true);
  });

  it('한국어와, 숫자, 특수문자를 함께 사용할 경우, 한국어로 판별한다.', () => {
    expect(isKorean('이 글은 한국어로 적힌 글씨입니까?')).toEqual(true);
    expect(isKorean('세종대왕 만세!')).toEqual(true);
    expect(isKorean('123는 백이십삽으로 읽습니다.')).toEqual(true);
  });

  it('특수문자만 사용될 경우, false를 반환해야한다.', () => {
    expect(isKorean('!@#$%^&*()-+')).toEqual(false);
  });

  it('한국어가 아닌 경우, false를 반환해야 한다', () => {
    expect(isKorean('This is english.')).toEqual(false);
    expect(isKorean('これは日本語です。')).toEqual(false);
    expect(isKorean('这是中国人')).toEqual(false);
  });
});
