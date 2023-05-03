import { first } from '../src';

describe('first는', () => {
  it('배열의 첫번째 원소를 반환해야 한다.', () => {
    expect(first([1, 2, 3])).toEqual(1);
  });

  it('빈 배열인 경우 undefined를 반환해야 한다.', () => {
    expect(first([])).toEqual(undefined);
  });
});
