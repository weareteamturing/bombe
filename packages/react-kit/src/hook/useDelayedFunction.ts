import { useEffect, useRef } from 'react';

type Options<T extends (...args: any) => void> = {
  func: T;
  /**
   * ms
   */
  delay?: number;
};

type DelayedFunction<T extends (...args: any) => void> = T & {
  /**
   * 예약된 지연 호출을 취소한다.
   */
  cancel: () => void;
};

const useDelayedFunction = <T extends (...args: any) => void>({ func, delay }: Options<T>) => {
  const timeout = useRef(-1);

  const cancel = () => {
    window.clearTimeout(timeout.current);
  };

  const delayedFunc = ((...args: any) => {
    if (delay === 0 || delay === undefined) {
      func(...args);
    } else {
      cancel();
      timeout.current = window.setTimeout(() => func(...args), delay);
    }
  }) as DelayedFunction<T>;

  delayedFunc.cancel = cancel;

  useEffect(() => () => cancel(), []);

  return delayedFunc;
};

export default useDelayedFunction;
export type { Options as UseDelayedFunctionOptions, DelayedFunction };
