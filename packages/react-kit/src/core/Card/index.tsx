import { ColorKey, RadiiKey } from '@teamturing/token-studio';
import { forcePixelValue } from '@teamturing/utils';
import styled from 'styled-components';
import {
  BackgroundProps,
  BorderColorProps,
  BorderProps,
  BorderRadiusProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  Theme,
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
} from 'styled-system';

import { sx, SxProp } from '../../utils/styled-system';

type Props = {} & SxProp &
  LayoutProps &
  ColorProps<Theme, ColorKey> &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  BorderColorProps<Theme, ColorKey> &
  PositionProps &
  ShadowProps<Theme> &
  BorderRadiusProps<Theme, RadiiKey>;

const Card = styled.div<Props>`
  border-width: ${forcePixelValue(1)};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors['border/neutral']};
  border-radius: ${({ theme }) => forcePixelValue(theme.radii['s'])};

  ${compose(layout, color, flexbox, background, border, position, shadow)}
  ${sx}
`;

export default Card;
export type { Props as CardProps };
