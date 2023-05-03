import { noop } from '../src';

/**
 * TODO: 수정 필요
 */
describe('noop은', () => {
  it('아무 행위도 하지 않아야 한다.', () => {
    expect(noop()).toBeUndefined();
  });
});
