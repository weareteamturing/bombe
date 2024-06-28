import { useCallback, useEffect, useState } from 'react';

import useProvidedOrCreatedRef from './useProvidedOrCreatedRef';

type Options<T extends HTMLElement = HTMLDivElement> = {
  targetRef?: React.RefObject<T>;
};

const useHover = <T extends HTMLElement = HTMLDivElement>({ targetRef }: Options<T>) => {
  const [hovered, setHovered] = useState(false);
  const ref = useProvidedOrCreatedRef<T>(targetRef);

  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', onMouseEnter);
      ref.current.addEventListener('mouseleave', onMouseLeave);

      return () => {
        ref.current?.removeEventListener('mouseenter', onMouseEnter);
        ref.current?.removeEventListener('mouseleave', onMouseLeave);
      };
    }

    return undefined;
  }, []);

  return { ref, hovered };
};

export default useHover;
export type { Options as UseHoverOptions };
