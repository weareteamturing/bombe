import { is } from './is';

export function px(x: number): `${number}px` {
  if (!is.number(x)) {
    return '0px';
  }
  return `${x}px`;
}
