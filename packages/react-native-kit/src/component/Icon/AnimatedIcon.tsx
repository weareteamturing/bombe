import { useMemo } from 'react';
import type { AnimatedStyle } from 'react-native-reanimated';

import { withReanimated } from '../../hoc';
import type { LayoutStyle } from '../Layout/LayoutStyle';

import * as Icons from './Icons';

export type IconName = keyof typeof Icons;
type Props = {
  name: IconName;
  size?: number;
  layout?: LayoutStyle;
  animatedStyle?: AnimatedStyle;
};

const AnimatedIcon = ({ name, size = 24, layout, animatedStyle }: Props) => {
  if (!name.endsWith('_animation')) {
    // eslint-disable-next-line no-console
    console.warn('Name of icon in AnimatedIcon should be ended with _animation');
  }
  // eslint-disable-next-line import/namespace
  const IconComponent = useMemo(() => withReanimated(Icons[name]), [name]);
  return <IconComponent width={size} height={size} style={[layout, animatedStyle]} />;
};

export default AnimatedIcon;
