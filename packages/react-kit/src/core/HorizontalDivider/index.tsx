import { ColorKey, SurfaceElevationKey } from '@teamturing/token-studio';
import styled from 'styled-components';
import { BorderColorProps, BorderProps, Theme, border } from 'styled-system';

type Props = {
  width?: BorderProps['borderBottomWidth'];
  color?: BorderColorProps<Theme, ColorKey | SurfaceElevationKey>['borderBottomColor'];
  variant?: BorderProps['borderBottomStyle'];
};

const HorizontalDivider = ({ width = 1, color = 'border/neutral', variant = 'solid' }: Props) => (
  <BaseHorizontalDivider borderBottomWidth={width} borderBottomStyle={variant} borderBottomColor={color} />
);

const BaseHorizontalDivider = styled.hr<BorderProps & BorderColorProps>`
  display: block;
  margin: 0;
  padding: 0;
  border: none;

  width: 100%;

  ${border}
`;

export default HorizontalDivider;
export type { Props as HorizontalDividerProps };
