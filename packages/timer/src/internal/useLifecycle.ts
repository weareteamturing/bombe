import { useRef, useEffect, useCallback } from 'react';

export function useLifecycle() {
  const isMounted = useRef(false);
  const isUnmounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isUnmounted.current = true;
    };
  }, []);

  const checkMounted = useCallback(() => {
    return isMounted.current;
  }, []);

  const checkUnmounted = useCallback(() => {
    return isUnmounted.current;
  }, []);

  return {
    checkMounted,
    checkUnmounted,
  };
}
