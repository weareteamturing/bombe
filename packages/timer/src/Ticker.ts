import { setIntervalWithTimeout } from './setIntervalWithTimeout';

function currentUnixMs(): number {
  return Date.now();
}

type Status = 'initial' | 'pause' | 'progress';
type TickerHandler = (elapsedSec: number) => void;
export class Ticker {
  private clear?: Function;

  private accumulatedMs = 0;
  private lastStartedUnixMs = 0;
  status: Status = 'initial';

  handler?: TickerHandler;

  constructor(private intervalSec = 1) {}

  start({ handler, intervalSec = 1 }: { handler: TickerHandler; intervalSec?: number }) {
    this.intervalSec = intervalSec;
    this.handler = handler;
    this.reset();
    this.resume();
  }

  resume() {
    this.status = 'progress';
    this.lastStartedUnixMs = currentUnixMs();
    this.clear = setIntervalWithTimeout(() => {
      this.callHandler();
    }, this.intervalSec * 1000);
  }

  pause() {
    this.status = 'pause';
    this.accumulatedMs += currentUnixMs() - this.lastStartedUnixMs;
    this.clear?.();
  }

  reset() {
    this.accumulatedMs = 0;
    this.lastStartedUnixMs = 0;
    this.clear?.();
    this.status = 'initial';
  }

  private callHandler() {
    const elapsedFromLastStarted = currentUnixMs() - this.lastStartedUnixMs;
    this.handler?.(Math.floor((this.accumulatedMs + elapsedFromLastStarted) / 1000));
  }
}
