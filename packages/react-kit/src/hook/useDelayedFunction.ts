import { useEffect, useRef } from 'react';

type Options<T extends (...args: any) => void> = {
  func: T;
  /**
   * ms
   */
  delay?: number;
};

const useDelayedFunction = <T extends (...args: any) => void>({ func, delay }: Options<T>) => {
  const timeout = useRef(-1);

  const delayedFunc = (...args: any) => {
    if (delay === 0 || delay === undefined) {
      func(...args);
    } else {
      timeout.current = window.setTimeout(func, delay);
    }
  };

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  return delayedFunc as T;
};

export default useDelayedFunction;
export type { Options as UseDelayedFunctionOptions };
