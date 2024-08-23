import { useTimeoutHandler, useTimeoutHandlers } from '@teamturing/react-native-kit';
import { renderHook } from '@testing-library/react-native';

import { waitRealTime } from '../../test/util/RealTimerUtil';

jest.useRealTimers();
describe('useTimeoutHandler', () => {
  it('callback is invoked before unmount', async () => {
    const callback = jest.fn();

    const {
      result: { current },
    } = renderHook(() => useTimeoutHandler());

    current.current = setTimeout(callback, 50);
    await waitRealTime(100);

    expect(callback).toBeCalled();
  });

  it('callback is not invoked after unmount', async () => {
    const callback = jest.fn();

    const {
      result: { current },
      unmount,
    } = renderHook(() => useTimeoutHandler());

    current.current = setTimeout(callback, 50);
    unmount();
    await waitRealTime(100);

    expect(callback).not.toBeCalled();
  });
});

describe('useTimeoutHandlers', () => {
  it('callback should be cleared automatically', async () => {
    const callback = jest.fn();

    const {
      result: {
        current: { clearTimerAtUnmount },
      },
      unmount,
    } = renderHook(() => useTimeoutHandlers());

    clearTimerAtUnmount(setTimeout(callback, 50));

    unmount();
    await waitRealTime(100);

    expect(callback).not.toBeCalled();
  });

  it('clear pending callbacks using withClear option', async () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    const {
      result: {
        current: { clearTimerAtUnmount },
      },
    } = renderHook(() => useTimeoutHandlers());

    clearTimerAtUnmount(setTimeout(callback1, 50));
    await waitRealTime(25);
    clearTimerAtUnmount(setTimeout(callback2, 50), { withClear: true });

    await waitRealTime(100);

    expect(callback1).not.toBeCalled();
    expect(callback2).toBeCalled();
  });

  it('setAutoClearTimeout', async () => {
    const callback = jest.fn();

    const {
      result: {
        current: { setAutoClearTimeout },
      },
      unmount,
    } = renderHook(() => useTimeoutHandlers());

    setAutoClearTimeout(callback, 50);
    unmount();
    await waitRealTime(100);

    expect(callback).not.toBeCalled();
  });

  it('setAutoClearTimeout using withClear', async () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    const {
      result: {
        current: { setAutoClearTimeout },
      },
    } = renderHook(() => useTimeoutHandlers());

    setAutoClearTimeout(callback1, 50);
    setAutoClearTimeout(callback2, 50, { withClear: true });
    await waitRealTime(100);

    expect(callback1).not.toBeCalled();
    expect(callback2).toBeCalled();
  });
});
