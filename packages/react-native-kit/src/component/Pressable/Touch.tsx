import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import type { PropsWithChildren, Ref } from 'react';
import { forwardRef } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { type UseDisabilityAwareDebouncerParams, useDisabilityAwareDebouncer } from './useDisabilityAwareDebouncer';

import { spacing, is } from '@teamturing/react-native-kit';

type Props = {} & TouchableOpacityProps & UseDisabilityAwareDebouncerParams & SxProps;
const Touch = forwardRef((props: PropsWithChildren<Props>, ref: Ref<TouchableOpacity>) => {
  const { filteredProps, getStyle } = useSx(props);
  const { onPress, disabled, delayAfterEnabled, delayAfterEvent, ...rest } = filteredProps;
  const { shouldBeHandled } = useDisabilityAwareDebouncer({
    disabled: disabled || false,
    delayAfterEnabled,
    delayAfterEvent,
  });
  return (
    <TouchableOpacity
      ref={ref}
      hitSlop={{ bottom: spacing[1], left: spacing[1], right: spacing[1], top: spacing[1] }}
      {...rest}
      style={getStyle()}
      disabled={disabled}
      onPress={
        is.function(onPress)
          ? (e) => {
              shouldBeHandled() && onPress?.(e);
            }
          : undefined
      }
    />
  );
});

export type { Props as TouchProps };
export { Touch };
