import { ColorKey, SurfaceElevationKey } from '@teamturing/token-studio';
import styled from 'styled-components';
import { BorderColorProps, BorderProps, Theme, border } from 'styled-system';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {
  width?: BorderProps['borderBottomWidth'];
  color?: BorderColorProps<Theme, ColorKey | SurfaceElevationKey>['borderBottomColor'];
  variant?: BorderProps['borderBottomStyle'];
} & SxProp;

const HorizontalDivider = ({ width = 1, color = 'border/neutral', variant = 'solid', ...props }: Props) => (
  <BaseHorizontalDivider borderBottomWidth={width} borderBottomStyle={variant} borderBottomColor={color} {...props} />
);

const BaseHorizontalDivider = styled.hr<BorderProps & BorderColorProps & SxProp>`
  display: block;
  margin: 0;
  padding: 0;
  border: none;

  width: 100%;

  ${border}
  ${sx}
`;

export default HorizontalDivider;
export type { Props as HorizontalDividerProps };
