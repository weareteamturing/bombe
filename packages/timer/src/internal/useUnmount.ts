import { useEffect, EffectCallback, useRef } from 'react';

export function useUnmount(callback: EffectCallback) {
  const callbackRef = useRef<() => void>();
  callbackRef.current = callback;
  useEffect(() => {
    return () => {
      callbackRef.current?.();
    };
  }, []);
}
