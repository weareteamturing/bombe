import {
  breakpoints,
  color,
  shadowElevation,
  surfaceElevation,
  gradient,
  radii,
  space,
  fontWeights,
  fontSizes,
  lineHeights,
  opacity,
} from '@teamturing/token-studio';

const theme = {
  breakpoints,
  space,
  fontWeights,
  fontSizes,
  lineHeights,
  radii,
  colors: { ...color, ...surfaceElevation },
  gradients: gradient,
  shadows: { ...shadowElevation },
  opacity,
};

export default theme;
