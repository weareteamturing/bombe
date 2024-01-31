export function removeLineBreak(str: string) {
  return str.replace(/(\r\n|\n|\r)/gm, '').trim();
}
