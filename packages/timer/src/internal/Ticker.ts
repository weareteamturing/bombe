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

  constructor(private internalSec = 1) {}

  start({ handler, intervalSec = 1 }: { handler: TickerHandler; intervalSec?: number }) {
    this.internalSec = intervalSec;
    this.handler = handler;
    this.reset();
    this.resume();
  }

  resume() {
    this.status = 'progress';
    this.lastStartedUnixMs = currentUnixMs();
    const handler = setInterval(() => {
      this.callHandler();
    }, this.internalSec * 1000);
    this.clear = () => {
      clearInterval(handler);
    };
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
