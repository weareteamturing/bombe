import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import type { SvgProps } from 'react-native-svg';

import { type PaletteColor, palette } from '../../theme';

import * as Icons from './Icons';

export type IconName = keyof typeof Icons;
type Props = {
  name: IconName;
  size?: number;
  fill?: SvgProps['fill'] | PaletteColor;
  testID?: string;
} & SxProps;

const Icon = (props: Props) => {
  const { getStyle, filteredProps } = useSx(props);
  // eslint-disable-next-line import/namespace
  const IconComponent = Icons[props.name];

  const size = props.size ?? 24;
  const fill = (props.fill ? (props.fill in palette ? palette[props.fill] : props.fill) : undefined) ?? palette.gray400;

  return <IconComponent {...filteredProps} width={size} height={size} fill={fill} style={getStyle()} />;
};

export { Icon };
export type { Props as IconProps };
