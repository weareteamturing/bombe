import { is } from '@teamturing/react-native-kit';

export type NumericFormatType = '0000 0000 0000 0000' | '00 / 00' | '000 0000 0000';
function isEscapeChar(char: string): boolean {
  return char.length === 1 && is.integerString(char);
}

function parseOnlyEscapeCharacters(value: string) {
  let ret = '';
  for (let i = 0; i < value.length; i++) {
    if (isEscapeChar(value[i])) {
      ret += value[i];
    }
  }
  return ret;
}
function isPrefixOf(check: string, source: string): boolean {
  if (check.length > source.length) {
    return false;
  }
  for (let i = 0; i < check.length; i++) {
    if (check[i] !== source[i]) {
      return false;
    }
  }
  return true;
}
function formatWithType(type: NumericFormatType, value: string, previousValue: string): string {
  const isDeleteNotNumericCharacter =
    previousValue.length === value.length + 1 &&
    isPrefixOf(value, previousValue) &&
    !isEscapeChar(previousValue[previousValue.length - 1]);
  value = parseOnlyEscapeCharacters(value).slice(0, countEscapeCharacters(type));
  let ret = '';
  let i = 0,
    j = 0;
  while (i < value.length && j < type.length) {
    while (j < type.length && !isEscapeChar(type[j])) {
      ret += type[j++];
    }
    if (j >= type.length) {
      break;
    }
    ret += value[i++];
    j += 1;
  }
  while (j < type.length && !isEscapeChar(type[j])) {
    ret += type[j++];
  }
  if (isDeleteNotNumericCharacter) {
    while (ret.length >= 1 && !isEscapeChar(ret[ret.length - 1])) {
      ret = ret.slice(0, ret.length - 1);
    }
    if (ret.length >= 1) {
      ret = ret.slice(0, ret.length - 1);
    }
  }
  return ret;

  function countEscapeCharacters(value: string) {
    let ret = 0;
    for (let i = 0; i < value.length; i++) {
      if (isEscapeChar(value[i])) {
        ret++;
      }
    }
    return ret;
  }
}

export const TextFieldNumericFormatUtil = {
  formatWithType,
  parseOnlyEscapeCharacters,
};
