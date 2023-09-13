import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';

type ResizeCallback = () => void;

const useResize = (resizeCallback: ResizeCallback) => {
  const handleResize = useCallback(() => resizeCallback?.(), []);

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    if (window) {
      const debouncedHandleResize = debounce(handleResize, 150);
      window.addEventListener('resize', debouncedHandleResize);
      return () => window.removeEventListener('resize', debouncedHandleResize);
    }
  }, []);
};

export default useResize;
