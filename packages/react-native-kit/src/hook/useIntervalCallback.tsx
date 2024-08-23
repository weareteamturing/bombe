import { useRef, useEffect } from 'react';

import { useMount } from './useMount';
import { setIntervalWithTimeout } from '@mj-studio/js-util';

export function useIntervalCallback(callback: () => void, intervalSec = 1, doImmediately = false) {
  const ref = useRef<Function>();
  ref.current = callback;

  useMount(() => {
    if (doImmediately) {
      ref.current?.();
    }
  });

  useEffect(() => {
    return setIntervalWithTimeout(() => ref.current?.(), intervalSec * 1000);
  }, [intervalSec]);
}
