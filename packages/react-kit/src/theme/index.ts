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

  components: {
    spinner: {
      defaultVariant: 'progress-gradient' as const,
    },
  },
};

const gpaiLightTheme = {
  ...theme,
  colors: gpaiLightColor,
  components: {
    spinner: {
      defaultVariant: 'progress-line' as const,
    },
  },
};

const gpaiDarkTheme = {
  ...theme,
  colors: gpaiDarkColor,
  components: {
    spinner: {
      defaultVariant: 'progress-line' as const,
    },
  },
};

export default theme;
export { gpaiLightTheme, gpaiDarkTheme };
