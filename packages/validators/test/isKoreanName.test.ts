import { isKoreanName } from '../src';

describe('isKoreanName은', () => {
  it('한국어 이름인 경우, true를 반환한다.', () => {
    expect(isKoreanName('유재석')).toEqual(true);
    expect(isKoreanName('허재')).toEqual(true);
    expect(isKoreanName('선우정아')).toEqual(true);
  });

  it('한국어 이름이 아닌 경우, false를 반환한다', () => {
    expect(isKoreanName('이렇게긴이름이세상에있을리없어')).toEqual(false);
    expect(isKoreanName('Jonh Doe')).toEqual(false);
    expect(isKoreanName('田中 幸雄')).toEqual(false);
  });
});
