import type { PressableProps } from 'react-native';
import { Pressable } from 'react-native';

import is from '../../util/is';

import { useDisabilityAwareDebouncer } from './useDisabilityAwareDebouncer';

type Props = {
  delayAfterEvent?: number;
  delayAfterEnabled?: number;
} & PressableProps;
const PressableDelayed = ({ onPress, disabled, delayAfterEnabled, delayAfterEvent, ...rest }: Props) => {
  const { shouldBeHandled } = useDisabilityAwareDebouncer({
    disabled: disabled || false,
    delayAfterEnabled,
    delayAfterEvent,
  });
  return (
    <Pressable
      {...rest}
      disabled={disabled}
      onPress={
        is.function(onPress)
          ? (e) => {
              shouldBeHandled() && onPress?.(e);
            }
          : undefined
      }
      accessibilityRole={'button'}
    />
  );
};

export { PressableDelayed };
