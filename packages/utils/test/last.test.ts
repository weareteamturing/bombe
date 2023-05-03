import { last } from '../src';

describe('last는', () => {
  it('배열의 마지막 원소를 반환해야 한다.', () => {
    expect(last([1, 2, 3])).toEqual(3);
  });

  it('빈 배열인 경우 undefined를 반환해야 한다.', () => {
    expect(last([])).toEqual(undefined);
  });
});
