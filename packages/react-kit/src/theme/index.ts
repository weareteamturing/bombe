import {
  breakpoints,
  color,
  gradient,
  radii,
  space,
  fontWeights,
  fontSizes,
  lineHeights,
  opacity,
  elevation,
  gpaiLightColor,
  gpaiDarkColor,
} from '@teamturing/token-studio';

const theme = {
  breakpoints,
  space,
  fontWeights,
  fontSizes,
  lineHeights,
  radii,
  colors: color,
  gradients: gradient,
  shadows: elevation,
  opacity,
};

const gpaiLightTheme = {
  ...theme,
  colors: gpaiLightColor,
};

const gpaiDarkTheme = {
  ...theme,
  colors: gpaiDarkColor,
};

export default theme;
export { gpaiLightTheme, gpaiDarkTheme };
