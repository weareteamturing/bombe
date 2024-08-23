import type { Ref } from 'react';
import { useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';
import type { ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolateColor,
  withRepeat,
  withSequence,
  interpolate,
  cancelAnimation,
  Easing,
  withDelay,
} from 'react-native-reanimated';

import { palette, spacing } from '../../theme';
import type { IconName } from '../Icon';
import { AnimatedIcon } from '../Icon/AnimatedIcon';
import { Touch } from '../Pressable';

type Variant = 'gray-primary' | 'lightgray-darkgray';
const ColorByVariant: Record<
  Variant,
  {
    idleColor: string;
    idleBgColor: string;
    blinkColor: string;
    blinkBgColor: string;
    activeColor: string;
    activeBgColor: string;
  }
> = {
  'gray-primary': {
    idleColor: palette.gray900,
    idleBgColor: palette.gray100,
    blinkColor: palette.violet500,
    blinkBgColor: palette.violet50,
    activeColor: palette.white,
    activeBgColor: palette.violet500,
  },
  'lightgray-darkgray': {
    idleColor: palette.gray900,
    idleBgColor: palette.gray100,
    blinkColor: palette.white,
    blinkBgColor: palette.gray900,
    activeColor: palette.white,
    activeBgColor: palette.gray900,
  },
};

export type InteractiveToggledIconBtnRef = {
  blink: () => void;
};

type Props = {
  name: IconName;
  onPress?: () => void;
  value?: boolean;
  variant?: Variant;
};

const commonStyle: ViewStyle = {
  width: 48,
  height: 48,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 999,
};
Animated.addWhitelistedUIProps({ fill: true });
export const InteractiveToggledIconBtn = forwardRef(
  ({ name, value, onPress, variant = 'gray-primary' }: Props, ref: Ref<InteractiveToggledIconBtnRef>) => {
    const anim = useSharedValue(value ? 1 : 0);
    const { blinkBgColor, activeBgColor, activeColor, idleColor, blinkColor, idleBgColor } = ColorByVariant[variant];

    useEffect(() => {
      cancelAnimation(anim);
      anim.value = withTiming(value ? 1 : 0, { duration: 200 });
    }, [value, anim]);

    const animStyle = useAnimatedStyle(
      () => ({
        backgroundColor: interpolateColor(anim.value, [-1, 0, 1], [blinkBgColor, idleBgColor, activeBgColor]),
        transform: [{ scale: interpolate(anim.value, [-1, 0, 0.4, 1], [1.2, 1, 0.9, 1]) }],
      }),
      [idleBgColor, blinkBgColor, activeBgColor],
    );
    const iconAnimStyle = useAnimatedStyle(
      () => ({
        color: interpolateColor(anim.value, [-1, 0, 1], [blinkColor, idleColor, activeColor]),
      }),
      [idleColor, blinkColor, activeColor],
    );

    const blink = useCallback(() => {
      anim.value = withDelay(
        2000,
        withRepeat(
          withSequence(
            withTiming(-1, { duration: 400, easing: Easing.out(Easing.ease) }),
            withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) }),
          ),

          5,
          true,
        ),
      );
    }, [anim]);
    useImperativeHandle(
      ref,
      () => ({
        blink,
      }),
      [blink],
    );

    return (
      <Animated.View style={[commonStyle, animStyle]}>
        <Touch
          activeOpacity={1}
          style={commonStyle}
          hitSlop={{ top: spacing[1], right: spacing[1], bottom: spacing[1], left: spacing[1] }}
          onPress={onPress}
        >
          <AnimatedIcon name={name} size={20} animatedStyle={iconAnimStyle} />
        </Touch>
      </Animated.View>
    );
  },
);
