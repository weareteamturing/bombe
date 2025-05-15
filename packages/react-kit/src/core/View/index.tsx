import { ColorKey, RadiiKey, SpaceKey, SurfaceElevationKey } from '@teamturing/token-studio';
import styled from 'styled-components';
import {
  compose,
  layout,
  color,
  flexbox,
  background,
  border,
  position,
  shadow,
  LayoutProps,
  ColorProps,
  FlexboxProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  BorderRadiusProps,
  Theme,
  BorderColorProps,
} from 'styled-system';

import { ColumnGapProps, GapProps, RowGapProps, SxProp, rowGap, columnGap, gap, sx } from '../../utils/styled-system';

type Props = {} & SxProp &
  LayoutProps &
  ColorProps<Theme, ColorKey | SurfaceElevationKey> &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  BorderColorProps<Theme, ColorKey | SurfaceElevationKey> &
  PositionProps &
  ShadowProps<Theme> &
  BorderRadiusProps<Theme, RadiiKey> &
  GapProps<Theme, SpaceKey> &
  ColumnGapProps<Theme, SpaceKey> &
  RowGapProps<Theme, SpaceKey>;

const View = styled.div<Props>`
  ${compose(layout, color, flexbox, background, border, position, shadow, gap, columnGap, rowGap)}
  ${sx}
`;

export default View;
export type { Props as ViewProps };
