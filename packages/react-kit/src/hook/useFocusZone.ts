import { focusZone } from '@primer/behaviors';
import type { FocusZoneSettings } from '@primer/behaviors';
import { useEffect, useRef } from 'react';

import useProvidedOrCreatedRef from './useProvidedOrCreatedRef';

export { FocusKeys } from '@primer/behaviors';
export type { Direction } from '@primer/behaviors';

interface FocusZoneHookSettings extends Omit<FocusZoneSettings, 'activeDescendantControl'> {
  containerRef?: React.RefObject<HTMLElement>;
  activeDescendantFocus?: boolean | React.RefObject<HTMLElement>;
  disabled?: boolean;
}

const useFocusZone = (
  settings: FocusZoneHookSettings = {},
  dependencies: React.DependencyList = [],
): { containerRef: React.RefObject<HTMLElement>; activeDescendantControlRef: React.RefObject<HTMLElement> } => {
  const containerRef = useProvidedOrCreatedRef(settings.containerRef);
  const useActiveDescendant = !!settings.activeDescendantFocus;
  const passedActiveDescendantRef =
    typeof settings.activeDescendantFocus === 'boolean' || !settings.activeDescendantFocus
      ? undefined
      : settings.activeDescendantFocus;
  const activeDescendantControlRef = useProvidedOrCreatedRef(passedActiveDescendantRef);
  const disabled = settings.disabled;
  const abortController = useRef<AbortController>();

  useEffect(() => {
    if (
      containerRef.current instanceof HTMLElement &&
      (!useActiveDescendant || activeDescendantControlRef.current instanceof HTMLElement)
    ) {
      if (!disabled) {
        const defaultSettings: FocusZoneSettings = {
          ...settings,
          activeDescendantControl: activeDescendantControlRef.current ?? undefined,
        };
        abortController.current = focusZone(containerRef.current, defaultSettings);
        return () => {
          abortController.current?.abort();
        };
      } else {
        abortController.current?.abort();
      }
    }
  }, [disabled, ...dependencies]);

  return { containerRef, activeDescendantControlRef };
};

export default useFocusZone;
export type { FocusZoneHookSettings };
