import { useState, useCallback, useMemo, type ComponentProps } from 'react';

import { useTicker, UseTickerParams } from './useTicker';

export function useReverseTicker(params: UseTickerParams & { asForwardTicker?: boolean }) {
  const {
    startTicker: _startTicker,
    tickSec: _tickSec,
    resetTicker: _resetTicker,
    TickerComponent,
    ...rest
  } = useTicker(params);

  const [duration, setDuration] = useState(0);

  const startReverseTicker = useCallback(
    ({ durationSec, intervalSec, tickMillis }: { durationSec: number; intervalSec?: number; tickMillis?: number }) => {
      if (durationSec >= 0) {
        setDuration(durationSec);
        _startTicker({ durationSec, intervalSec, tickMillis });
      }
    },
    [_startTicker],
  );

  const resetReverseTicker = useCallback(() => {
    _resetTicker();
    setDuration(0);
  }, [_resetTicker]);

  const ReverseTickerComponent = useMemo(() => {
    return (props: ComponentProps<typeof TickerComponent>) => (
      <TickerComponent initialTickSec={props.initialTickSec}>
        {({ tickSec }) => props.children({ tickSec: duration - tickSec })}
      </TickerComponent>
    );
  }, [TickerComponent, duration]);

  return {
    startTicker: startReverseTicker,
    startForwardTicker: _startTicker,
    resetTicker: params.asForwardTicker ? _resetTicker : resetReverseTicker,
    tickSec: params.asForwardTicker ? _tickSec : duration - _tickSec,
    TickerComponent: params.asForwardTicker ? TickerComponent : ReverseTickerComponent,
    ...rest,
  };
}
