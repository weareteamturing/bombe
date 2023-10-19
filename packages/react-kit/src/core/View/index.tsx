import { ColorKey, RadiiKey, SurfaceElevationKey } from '@teamturing/token-studio';
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

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & SxProp &
  LayoutProps &
  ColorProps<Theme, ColorKey | SurfaceElevationKey> &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  BorderColorProps<Theme, ColorKey | SurfaceElevationKey> &
  PositionProps &
  ShadowProps<Theme> &
  BorderRadiusProps<Theme, RadiiKey>;

const View = styled.div<Props>`
  ${compose(layout, color, flexbox, background, border, position, shadow)}
  ${sx}
`;

export default View;
export type { Props as ViewProps };
