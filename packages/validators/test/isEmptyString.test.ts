import { isEmptyString } from '../src';

describe('isEmptyString은', () => {
  it('빈 string인 경우, true를 반환해야 한다.', () => {
    expect(isEmptyString('')).toEqual(true);
  });
  it('빈 string인 아닌 경우, false를 반환해야 한다.', () => {
    expect(isEmptyString('테스트 작성하기 너무 귀찮다.')).toEqual(false);
  });
});
