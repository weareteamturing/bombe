import { useRef } from 'react';

import { useStableCallback } from './useStableCallback';
import { useUnmount } from './useUnmount';

function useTimeoutHandler() {
  const handler = useRef<any>(-1);

  useUnmount(() => {
    clearTimeout(handler.current);
  });

  return handler;
}

function useTimeoutHandlers() {
  const handler = useRef<number[]>([]);

  useUnmount(() => {
    handler.current.forEach(clearTimeout);
  });

  const clearAllTimers = useStableCallback(() => {
    handler.current.forEach(clearTimeout);
    handler.current = [];
  });

  const clearTimerAtUnmount = useStableCallback(
    (id: any, { withClear }: { withClear?: boolean } = { withClear: false }) => {
      if (withClear) {
        clearAllTimers();
      }
      handler.current.push(id);
      return id;
    },
  );

  const setAutoClearTimeout = useStableCallback(
    (callback: () => void, ms: number, { withClear }: { withClear?: boolean } = { withClear: false }) => {
      if (withClear) {
        clearAllTimers();
      }
      return clearTimerAtUnmount(setTimeout(callback, ms));
    },
  );

  return { clearTimerAtUnmount, clearAllTimers, setAutoClearTimeout };
}

export { useTimeoutHandler, useTimeoutHandlers };
