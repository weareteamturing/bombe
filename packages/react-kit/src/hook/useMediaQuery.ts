import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const getMatches = (query: string): boolean => {
    /**
     * SSR 문제를 방지하기 위해 있습니다.
     */
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    /**
     * 클라이언트에서 mediaQuery를 반영하기 위해 로드됩니다.
     */
    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
