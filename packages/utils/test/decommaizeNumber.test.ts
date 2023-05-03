import { decommaizeNumber } from '../src';

describe('decommaizeNumber는', () => {
  it('콤마로 구분된 숫자를 순수한 숫자로 반환해야 한다.', () => {
    expect(decommaizeNumber('100,000,000')).toEqual(100000000);
    expect(decommaizeNumber('100')).toEqual(100);
  });
});
