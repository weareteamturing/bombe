import { useState, useCallback, useRef } from 'react';

import { Ticker } from './Ticker';
import { useLifecycle } from './internal/useLifecycle';
import { useUnmount } from './internal/useUnmount';

type Status = 'initial' | 'run_pause' | 'run_progress' | 'complete';
type Params = {
  onComplete?: () => void;
};
const inf = 99999999;
export function useTicker({ onComplete }: Params = {}) {
  const { checkUnmounted } = useLifecycle();

  const onCompleteRef = useRef<Function>();
  onCompleteRef.current = onComplete;

  const [status, setStatus] = useState<Status>('initial');
  const ticker = useRef<Ticker>(new Ticker()).current;

  const [tickSec, setTickSec] = useState(0);

  const resetTicker = useCallback(() => {
    if (!checkUnmounted()) {
      setStatus('initial');
      setTickSec(0);
    }
    ticker.reset();
  }, [checkUnmounted, ticker]);

  const startTicker = useCallback(
    ({ durationSec = inf, intervalSec }: { durationSec?: number; intervalSec?: number } = { durationSec: inf }) => {
      resetTicker();

      setStatus('run_progress');
      ticker.start({
        handler: (tickSec) => {
          setTickSec(tickSec);
          if (tickSec >= durationSec) {
            setStatus('complete');
            ticker.reset();
            onCompleteRef.current?.();
          } else {
            setStatus('run_progress');
          }
        },
        intervalSec,
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
    if (status !== 'run_pause') {
      return;
    }
    setStatus('run_progress');
    ticker.resume();
  }, [status, ticker]);

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
  };
}
