import { useState, useCallback } from 'react';

import { SecondsFormatter, SecondsFormats } from './SecondsFormatter';
import { useReverseTicker } from './internal/useReverseTicker';

const defaultTextFormatter = (text: string) => text;

export type DueDateTickerProps = {
  secondsFormat?: SecondsFormats;
  formatResult?: (result: string) => string;
};
export function useDueDateTicker({
  formatResult = defaultTextFormatter,
  secondsFormat = 'due_date',
}: DueDateTickerProps = {}) {
  const [isExpired, setExpired] = useState(false);
  const { startTicker: _startTicker, tickSec, status } = useReverseTicker({});

  const startTickerWithTargetUnixSec = useCallback(
    (targetUnixSec: number) => {
      const durationSec = targetUnixSec - Math.floor(Date.now() / 1000);
      if (durationSec < 0) {
        setExpired(true);
      } else {
        _startTicker({ durationSec, intervalSec: SecondsFormatter.invalidateIntervalSec(secondsFormat) });
      }
    },
    [_startTicker, secondsFormat],
  );
  const startTickerWithTargetISO8601 = useCallback(
    (iso8601: string) => {
      const unixMs = Date.parse(iso8601);
      if (isNaN(unixMs)) {
        return;
      }

      startTickerWithTargetUnixSec(Math.floor(unixMs / 1000));
    },
    [startTickerWithTargetUnixSec],
  );

  return {
    dueDateText: formatResult(SecondsFormatter.format(tickSec, secondsFormat)),
    startTickerWithTargetUnixSec,
    startTickerWithTargetDateTimeString: startTickerWithTargetISO8601,
    isExpired: isExpired || status === 'complete',
    tickSec,
  };
}
