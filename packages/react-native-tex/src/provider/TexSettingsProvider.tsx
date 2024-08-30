import { createCtx, useDynamicLayout, useStableCallback } from '@teamturing/react-native-kit';
import _ from 'lodash';
import { useMemo, useCallback } from 'react';

import { useStorageString, useStorageBoolean, useStorageNumber } from '../util/LocalStorage';

const smallSizeSet = [9, 11, 13, 15, 17, 19, 21] as const;
const largeSizeSet = [12, 14, 16, 18, 20, 22, 24] as const;
export type FontSizeLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export const [useTexSettings, TexSettingsProvider] = createCtx(() => {
  const { screenWidthWithPadding } = useDynamicLayout();

  // region tex ai animation
  const [isAiAnimationDisabled, setAiAnimationDisabled] = useStorageBoolean('latex_ai_animation_disable', {
    returnIfAbsent: false,
  });
  // endregion

  // region font size
  const defaultFontSizeLevelSet = screenWidthWithPadding >= 600 ? 'large' : 'small';
  const [fontSizeLevel, _setFontSizeLevel] = useStorageNumber('latex_font_size_level', {
    returnIfAbsent: 2,
  });
  // small, large or empty string
  const [fontSizeLevelSet, setFontSizeLevelSet] = useStorageString('latex_font_size_level_set', { returnIfAbsent: '' });
  const setFontSizeLevel = useStableCallback((_level: FontSizeLevel) => {
    const level = _.clamp(_level, 0, 6);

    _setFontSizeLevel(level);
    if (fontSizeLevelSet !== 'small' && fontSizeLevelSet !== 'large') {
      if (screenWidthWithPadding >= 600) {
        setFontSizeLevelSet('large');
      } else {
        setFontSizeLevelSet('small');
      }
    }
  });

  const getFontSizeFromFontLevelSize = useCallback(
    (fontSizeLevel: FontSizeLevel) =>
      ((fontSizeLevelSet || defaultFontSizeLevelSet) === 'large' ? largeSizeSet : smallSizeSet)[fontSizeLevel],
    [defaultFontSizeLevelSet, fontSizeLevelSet],
  );
  const fontSize = useMemo(() => {
    return getFontSizeFromFontLevelSize(fontSizeLevel as FontSizeLevel);
  }, [getFontSizeFromFontLevelSize, fontSizeLevel]);
  // endregion

  return {
    isAiAnimationDisabled,
    setAiAnimationDisabled,
    fontSize,
    setFontSizeLevel,
    fontSizeLevel,
    getFontSizeFromFontLevelSize,
  };
}, 'LaTexSettings');
