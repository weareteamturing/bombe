import { useState, useCallback, useRef, ReactElement, useMemo, useEffect } from 'react';

import { Ticker } from './Ticker';
import { useLifecycle } from './internal/useLifecycle';
import { useUnmount } from './internal/useUnmount';

type Status = 'initial' | 'run_pause' | 'run_progress' | 'complete';
export type UseTickerParams = {
  onComplete?: () => void;
  startAtResumeIfNeeded?: boolean;
  disableTickSecUpdate?: boolean;
};
const inf = 99999999;
export function useTicker({ onComplete, startAtResumeIfNeeded, disableTickSecUpdate }: UseTickerParams = {}) {
  const { checkUnmounted } = useLifecycle();

  const onCompleteRef = useRef<Function>();
  onCompleteRef.current = onComplete;

  const [status, setStatus] = useState<Status>('initial');
  const ticker = useRef<Ticker>(new Ticker()).current;

  const tickSecListeners = useRef<((tickSec: number) => void)[]>([]);
  const [tickSec, _setTickSec] = useState(0);
  const propagateTickSec = useCallback((tickSec: number) => {
    if (!disableTickSecUpdate) _setTickSec(tickSec);
    tickSecListeners.current?.forEach((listener) => listener(tickSec));
  }, []);

  const resetTicker = useCallback(() => {
    if (!checkUnmounted()) {
      setStatus('initial');
      propagateTickSec(0);
    }
    ticker.reset();
  }, [checkUnmounted, ticker]);

  const startTicker = useCallback(
    (
      {
        durationSec = inf,
        intervalSec,
        tickMillis,
      }: { durationSec?: number; intervalSec?: number; tickMillis?: number } = { durationSec: inf },
    ) => {
      resetTicker();

      setStatus('run_progress');
      ticker.start({
        handler: (tickSec) => {
          propagateTickSec(tickSec);
          if (tickSec >= durationSec) {
            setStatus('complete');
            ticker.reset();
            onCompleteRef.current?.();
          } else {
            setStatus('run_progress');
          }
        },
        intervalSec,
        tickMillis,
      });
    },
    [resetTicker, ticker],
  );

  const pauseTicker = useCallback(() => {
    if (status !== 'run_progress') {
      return;
    }
    setStatus('run_pause');
    ticker.pause();
  }, [status, ticker]);

  const resumeTicker = useCallback(() => {
    if (status === 'initial' && startAtResumeIfNeeded) {
      startTicker();
    } else if (status !== 'run_pause') {
      return;
    } else {
      setStatus('run_progress');
      ticker.resume();
    }
  }, [status, ticker]);

  const TickerComponent = useMemo(
    () =>
      ({
        children,
        initialTickSec,
      }: {
        children: ({ tickSec }: { tickSec: number }) => ReactElement | null | undefined;
        initialTickSec?: number;
      }) => {
        const [tick, setTick] = useState(initialTickSec ?? 0);
        const listener = useMemo(() => setTick, []);
        useEffect(() => {
          tickSecListeners.current.push(listener);
          return () => {
            tickSecListeners.current = tickSecListeners.current.filter((fn) => fn !== listener);
          };
        }, []);
        return children({ tickSec: tick });
      },
    [],
  );

  useUnmount(() => {
    resetTicker();
  });

  return {
    status,
    startTicker,
    tickSec,
    resetTicker,
    pauseTicker,
    resumeTicker,
    TickerComponent,
  };
}
