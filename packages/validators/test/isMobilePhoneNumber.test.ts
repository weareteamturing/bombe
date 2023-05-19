import { isMobilePhoneNumber } from '../src';

describe('isMobilePhoneNumber은', () => {
  it('핸드폰 번호인 경우, true를 반환한다.', () => {
    expect(isMobilePhoneNumber('01012345678')).toEqual(true);
    expect(isMobilePhoneNumber('01112345678')).toEqual(true);
  });

  it('핸드폰 번호가 아닌 경우, false를 반환한다', () => {
    expect(isMobilePhoneNumber('0212345678')).toEqual(false);
    expect(isMobilePhoneNumber('03112345678')).toEqual(false);
    expect(isMobilePhoneNumber('05312345678')).toEqual(false);
  });
});
