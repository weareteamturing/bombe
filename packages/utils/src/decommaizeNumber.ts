export function decommaizeNumber(value: string): number {
  return Number(value.replace(/,/g, ''));
}
