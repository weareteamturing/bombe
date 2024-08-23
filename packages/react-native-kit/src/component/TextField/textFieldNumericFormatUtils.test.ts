import { TextFieldNumericFormatUtil } from './textFieldNumericFormatUtils';

it('parse only escape characters', () => {
  expect(TextFieldNumericFormatUtil.parseOnlyEscapeCharacters('00 / 00')).toBe('0000');
});

it('format appended', () => {
  expect(TextFieldNumericFormatUtil.formatWithType('00 / 00', '1234', '123')).toBe('12 / 34');
});

it('format popped', () => {
  expect(TextFieldNumericFormatUtil.formatWithType('00 / 00', '123', '1234')).toBe('12 / 3');
});

it('paste', () => {
  expect(TextFieldNumericFormatUtil.formatWithType('00 / 00', '1234', '1231241')).toBe('12 / 34');
});
