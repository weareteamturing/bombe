import { generateArray } from '@mj-studio/js-util';
import type { SxProps } from '@react-native-styled-system/core';

import { type PaletteColor, spacing } from '../theme';

import { OpacityAnimatedView } from './Animation';
import { Dot } from './Dot';
import { RowCenter } from './Layout';

type Props = {
  dotSize?: number;
  dotColor?: PaletteColor;
  dotBorderColor?: PaletteColor;
  dotBorderWidth?: number;

  inactiveOpacity?: number;

  maxValue: number;
  value: number;
} & SxProps;
const Paginator = ({
  dotBorderColor = 'transparent',
  dotBorderWidth = 0,
  dotColor = 'white',
  dotSize = 10,
  // style,
  maxValue,
  value,
  inactiveOpacity = 0.5,
  ...sxProps
}: Props) => {
  return (
    <RowCenter justifyContent={'center'} {...sxProps} pointerEvents={'none'}>
      {generateArray(maxValue).map((i) => (
        <OpacityAnimatedView
          key={i}
          opacity={i === value ? 1 : inactiveOpacity}
          style={{ marginLeft: spacing[i ? 2 : 0] }}
        >
          <Dot size={dotSize} color={dotColor} borderColor={dotBorderColor} borderWidth={dotBorderWidth} />
        </OpacityAnimatedView>
      ))}
    </RowCenter>
  );
};

export type { Props as PaginatorProps };
export { Paginator };
