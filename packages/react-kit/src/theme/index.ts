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

  locales: {
    FormControl: { optionalLabel: ' (선택)' },
    Pagination: { previous: '이전', next: '다음' },
    Select: { placeholder: '옵션 선택' },
    UploadInput: { placeholder: '파일을 끌어다 놓으세요', selectFile: '파일 선택' },
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
