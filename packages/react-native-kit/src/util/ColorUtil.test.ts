import { applyOpacity } from './ColorUtil';

describe('applyOpacity', () => {
  it('색이 7자리가 아니면 그대로 반환된다', () => {
    expect(applyOpacity('#FFFFFFFF', 0)).toBe('#FFFFFFFF');
  });

  it('opacity가 0~100 사이가 아니면 clamp 된다', () => {
    expect(applyOpacity('#FFFFFF', -100)).toBe('#FFFFFF00');
    expect(applyOpacity('#FFFFFF', 200)).toBe('#FFFFFFFF');
  });

  it('성공 케이스', () => {
    expect(applyOpacity('#FFFFFF', 0)).toBe('#FFFFFF00');
    expect(applyOpacity('#FFFFFF', 10)).toBe('#FFFFFF1A');
    expect(applyOpacity('#FFFFFF', 20)).toBe('#FFFFFF33');
    expect(applyOpacity('#FFFFFF', 30)).toBe('#FFFFFF4D');
    expect(applyOpacity('#FFFFFF', 40)).toBe('#FFFFFF66');
    expect(applyOpacity('#FFFFFF', 50)).toBe('#FFFFFF7F');
    expect(applyOpacity('#FFFFFF', 60)).toBe('#FFFFFF99');
    expect(applyOpacity('#FFFFFF', 70)).toBe('#FFFFFFB3');
    expect(applyOpacity('#FFFFFF', 80)).toBe('#FFFFFFCC');
    expect(applyOpacity('#FFFFFF', 90)).toBe('#FFFFFFE5');
    expect(applyOpacity('#FFFFFF', 100)).toBe('#FFFFFFFF');
  });
});
