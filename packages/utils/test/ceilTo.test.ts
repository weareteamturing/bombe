import { ceilTo } from '../src';

describe('ceilTo는', () => {
  it('특정 자릿수에서 올림을 해주서야 한다', () => {
    expect(ceilTo(123456789, 1)).toEqual(123456790);
  });
});
