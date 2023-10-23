import { focusTrap } from '@primer/behaviors';
import React from 'react';

import useProvidedOrCreatedRef from './useProvidedOrCreatedRef';

interface FocusTrapHookSettings {
  containerRef?: React.RefObject<HTMLElement>;
  initialFocusRef?: React.RefObject<HTMLElement>;
  disabled?: boolean;
  restoreFocusOnCleanUp?: boolean;
}

const useFocusTrap = (
  settings?: FocusTrapHookSettings,
  dependencies: React.DependencyList = [],
): { containerRef: React.RefObject<HTMLElement>; initialFocusRef: React.RefObject<HTMLElement> } => {
  const containerRef = useProvidedOrCreatedRef(settings?.containerRef);
  const initialFocusRef = useProvidedOrCreatedRef(settings?.initialFocusRef);
  const disabled = settings?.disabled;
  const abortController = React.useRef<AbortController>();
  const previousFocusedElement = React.useRef<Element | null>(null);

  if (!previousFocusedElement.current && !settings?.disabled) {
    previousFocusedElement.current = document.activeElement;
  }

  const disableTrap = () => {
    abortController.current?.abort();
    if (settings?.restoreFocusOnCleanUp && previousFocusedElement.current instanceof HTMLElement) {
      previousFocusedElement.current.focus();
      previousFocusedElement.current = null;
    }
  };

  React.useEffect(() => {
    if (containerRef.current instanceof HTMLElement) {
      if (!disabled) {
        abortController.current = focusTrap(containerRef.current, initialFocusRef.current ?? undefined);
        return () => {
          disableTrap();
        };
      } else {
        disableTrap();
      }
    }
  }, [containerRef, initialFocusRef, disabled, ...dependencies]);

  return { containerRef, initialFocusRef };
};

export default useFocusTrap;
export type { FocusTrapHookSettings };
