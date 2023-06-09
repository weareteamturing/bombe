import { useState, useCallback } from 'react';

import { useTicker } from './useTicker';

export function useReverseTicker({ onComplete }: { onComplete?: () => void }) {
  const {
    startTicker: _startTicker,
    tickSec: _tickSec,
    resetTicker: _resetTicker,
    ...rest
  } = useTicker({ onComplete });

  const [duration, setDuration] = useState(0);

  const startTicker = useCallback(
    ({ durationSec, intervalSec, tickMillis }: { durationSec: number; intervalSec?: number; tickMillis?: number }) => {
      if (durationSec >= 0) {
        setDuration(durationSec);
        _startTicker({ durationSec, intervalSec, tickMillis });
      }
    },
    [_startTicker],
  );

  const resetTicker = useCallback(() => {
    _resetTicker();
    setDuration(0);
  }, [_resetTicker]);

  return {
    startTicker,
    resetTicker,
    tickSec: duration - _tickSec,
    ...rest,
  };
}
