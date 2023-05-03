import { commaizeNumber } from '../src';

describe('commaizeNumber는', () => {
  it('숫자를 콤마로 구분해서 반환해야 한다.', () => {
    expect(commaizeNumber(100000000)).toEqual('100,000,000');
    expect(commaizeNumber(100)).toEqual('100');
  });
});
