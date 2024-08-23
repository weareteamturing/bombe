import type { ThemedDict } from '@react-native-styled-system/core';

import { palette, spacing } from './token';

const safeAreaMock = {
  sfTop: 0 /* injected */,
  sfRight: 0 /* injected */,
  sfBottom: 0 /* injected */,
  sfLeft: 0 /* injected */,
};

const screenDimensionMock = {
  screenWidth: 0 /* injected */,
  screenWidthWithPadding: 0 /* injected */,
  screenHeight: 0 /* injected */,
};

const StyledSystemAppTheme: ThemedDict = {
  colors: palette,
  space: {
    ...spacing,
    ...screenDimensionMock,
    ...safeAreaMock,
    pageScrollBottom: 128,
    sidePadding: 0 /* injected */,
  },
  sizes: { ...spacing, ...screenDimensionMock, ...safeAreaMock },
  radii: {
    // Don't add numeric value like `1: 4`. We use radius with numeric literal as itself
    bottomSheet: 40,
    dialog: 20,
  },
  typography: {},
};

export { StyledSystemAppTheme };
export default StyledSystemAppTheme;
