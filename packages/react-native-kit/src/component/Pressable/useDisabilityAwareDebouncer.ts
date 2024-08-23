import { useCallback, useEffect, useRef } from 'react';
import { Platform } from 'react-native';

import { is, isTestEnvironment, isNewArch } from '@teamturing/react-native-kit';

const DELAY_AFTER_EVENT = 500; /* 0.5sec */
const DELAY_AFTER_ENABLED = 800; /* 0.8sec */

export interface UseDisabilityAwareDebouncerParams {
  disabled?: boolean;
  // default is 500
  delayAfterEvent?: number;
  // default is 800
  delayAfterEnabled?: number;
}

export interface UseDisabilityAwareDebouncer {
  /**
   * Call this function only when onPress is called.
   * This function will update lastPressTime.
   */
  shouldBeHandled(): boolean;
}

const useDisabilityAwareDebouncer: (param?: UseDisabilityAwareDebouncerParams) => UseDisabilityAwareDebouncer =
  isNewArch()
    ? (_: UseDisabilityAwareDebouncerParams = { disabled: false }) => ({ shouldBeHandled: () => true })
    : (param: UseDisabilityAwareDebouncerParams = { disabled: false }) => {
        const delayAfterEvent = is.number(param.delayAfterEvent) ? param.delayAfterEvent : DELAY_AFTER_EVENT;
        const delayAfterEnabled = is.number(param.delayAfterEnabled) ? param.delayAfterEnabled : DELAY_AFTER_ENABLED;
        const isDisabled = param.disabled || false;

        const lastEventTime = useRef(0);
        const latestEnableTime = useRef(0);

        const isFirstRun = useRef(true);
        useEffect(() => {
          if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
          }

          if (!isDisabled) {
            // Record latest enable time
            latestEnableTime.current = Date.now();
          }
        }, [isDisabled]);

        const shouldBeHandled = useCallback(() => {
          if (Platform.OS === 'web') {
            return true;
          }
          const now = Date.now();

          const isEventDelayElapsed = now > lastEventTime.current + delayAfterEvent;
          const isLatestEnabledDelayElapsed = now > latestEnableTime.current + delayAfterEnabled;

          const isElapsed =
            isTestEnvironment() || // in test env, Allow always
            (isEventDelayElapsed && isLatestEnabledDelayElapsed);

          if (isElapsed) {
            lastEventTime.current = now;

            return true;
          }

          return false;
        }, [delayAfterEvent, delayAfterEnabled]);

        return {
          shouldBeHandled,
        };
      };

export { useDisabilityAwareDebouncer };
