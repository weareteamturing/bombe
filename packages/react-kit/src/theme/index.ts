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
  aisaacLightColor,
  aisaacDarkColor,
} from '@teamturing/token-studio';

import type { DialogMotionProps } from '../core/Dialog';

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
    /**
     * Dialog 애니메이션 전역 override 지점.
     * 소비처에서 ThemeProvider로 `components.dialog.motionProps` / `blanketMotionProps`를 주입하면
     * 모든 Dialog에 전역 적용된다. (인스턴스 prop이 최우선, 미지정 시 하드 기본값 사용)
     */
    dialog: {} as { motionProps?: DialogMotionProps; blanketMotionProps?: DialogMotionProps },
  },

  locales: {
    FormControl: { optionalLabel: ' (선택)' },
    Pagination: { previous: '이전', next: '다음' },
    Select: { placeholder: '옵션 선택' },
    UploadInput: { placeholder: '파일을 끌어다 놓으세요', selectFile: '파일 선택' },
    Dialog: { closeButtonLabel: '닫기' },
    Drawer: { closeButtonLabel: '닫기' },
    Tab: { scrollLeftLabel: '왼쪽으로 스크롤', scrollRightLabel: '오른쪽으로 스크롤' },
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

const aisaacLightTheme = {
  ...theme,
  colors: aisaacLightColor,
  components: {
    spinner: {
      defaultVariant: 'progress-line' as const,
    },
  },
};

const aisaacDarkTheme = {
  ...theme,
  colors: aisaacDarkColor,
  components: {
    spinner: {
      defaultVariant: 'progress-line' as const,
    },
  },
};

export default theme;
export { gpaiLightTheme, gpaiDarkTheme, aisaacLightTheme, aisaacDarkTheme };
