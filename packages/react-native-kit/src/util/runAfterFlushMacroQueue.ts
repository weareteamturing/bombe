export function runAfterFlushMacroQueue(fn: Function, delayMs = 0): number {
  return setTimeout(() => {
    fn();
  }, delayMs) as unknown as number;
}
