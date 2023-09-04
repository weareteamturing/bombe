import { isEmail } from '../src';

describe('isEmail은', () => {
  it('형식에 맞는 이메일인 경우, true를 반환해야 한다', () => {
    expect(isEmail('shdw@example.com')).toEqual(true);
  });

  it('형식에 맞지 않는 이메일인 경우, false를 반환해야 한다', () => {
    expect(isEmail('shdw@example.')).toEqual(false);
    expect(isEmail('shdw@example.123com')).toEqual(false);
    expect(isEmail('@example.com')).toEqual(false);
  });
});
