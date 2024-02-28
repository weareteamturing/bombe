export function isSubStringMatch(str: string, match: string, offset: number) {
  if (str.length < offset + match.length) return false;
  for (let i = offset; i < offset + match.length; i++) {
    if (match.charAt(i - offset) !== str.charAt(i)) {
      return false;
    }
  }
  return true;
}
