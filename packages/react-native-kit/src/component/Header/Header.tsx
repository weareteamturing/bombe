import { type Spacing, Txt, is, useDynamicLayout, spacing, RowCenter, palette } from '@teamturing/react-native-kit';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import { OpacityAnimatedView } from '../Animation';
import { Box } from '../Box';

type Props = {
  title?: string;
  renderTitle?: (title?: string) => React.ReactNode;
  left?: (React.ReactElement | undefined | null | boolean)[];
  right?: (React.ReactElement | undefined | null | boolean)[];
  isTopSafeAreaConsumed?: boolean;
  hideElements?: boolean;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  enableTitleFadeAnimation?: boolean;
  shrinkPaddingHorizontalEvenWideLayout?: boolean;
  leftTitleLayout?: boolean;
  isHeaderShowingAtCenter?: boolean;
  showBottomDivider?: boolean;
  rightElementGap?: Spacing;
};
export const HeaderHeight = 48;
const Header = ({
  title,
  renderTitle = (title) => Txt.L.Bold.render(title, { numberOfLines: 1 }),
  left = [],
  right = [],
  isTopSafeAreaConsumed,
  hideElements,
  testID,
  style,
  enableTitleFadeAnimation,
  shrinkPaddingHorizontalEvenWideLayout = false,
  leftTitleLayout,
  isHeaderShowingAtCenter = true,
  showBottomDivider = false,
  rightElementGap = 3,
}: Props) => {
  if (leftTitleLayout && is.notEmptyArray(left)) {
    throw new Error('Header - leftTitleLayout는 left와 같이 쓰일 수 없습니다');
  }
  const { sfTop, sidePadding, sfLeft } = useDynamicLayout();

  const backgroundColor = (StyleSheet.flatten(style) || {})?.backgroundColor || 'transparent';

  return (
    <View
      style={[
        {
          justifyContent: 'flex-end',
          paddingTop: isTopSafeAreaConsumed ? 0 : sfTop,
          backgroundColor,
        },
      ]}
      testID={testID}
    >
      <View style={{ paddingHorizontal: shrinkPaddingHorizontalEvenWideLayout ? spacing[5] + sfLeft : sidePadding }}>
        <RowCenter
          style={[
            {
              justifyContent: 'space-between',
              height: HeaderHeight,
            },
            style,
          ]}
        >
          {leftTitleLayout ? (
            <OpacityAnimatedView
              duration={150}
              opacity={enableTitleFadeAnimation ? (isHeaderShowingAtCenter ? 0 : 1) : 1}
            >
              {Txt.H2.render(title)}
            </OpacityAnimatedView>
          ) : null}
          <Box center absoluteFill pointerEvents={'box-none'}>
            <OpacityAnimatedView
              duration={150}
              opacity={enableTitleFadeAnimation ? (isHeaderShowingAtCenter ? 1 : 0) : leftTitleLayout ? 0 : 1}
              style={{ paddingHorizontal: spacing[8] }}
            >
              {renderTitle(title)}
            </OpacityAnimatedView>
          </Box>
          {!hideElements ? (
            <RowCenter
              style={{ marginHorizontal: -spacing[1], justifyContent: 'space-between', flex: 1 }}
              pointerEvents={'box-none'}
            >
              <RowCenter style={{ flex: 1 }} gapX={3} pointerEvents={'box-none'}>
                {left
                  ?.filter((e) => !is.boolean(e) && !is.undefined(e) && !is.null(e))
                  ?.map((element, i) => (
                    <React.Fragment key={i}>{element}</React.Fragment>
                  ))}
              </RowCenter>
              <RowCenter pointerEvents={'box-none'} gapX={rightElementGap}>
                {right
                  ?.filter((e) => !is.boolean(e) && !is.undefined(e))
                  ?.map((element, i) => (
                    <React.Fragment key={i}>{element}</React.Fragment>
                  ))}
              </RowCenter>
            </RowCenter>
          ) : null}
        </RowCenter>
      </View>
      <OpacityAnimatedView
        duration={150}
        opacity={showBottomDivider ? 1 : 0}
        style={{ borderBottomWidth: 1, borderBottomColor: palette.gray100 }}
      />
    </View>
  );
};

export { Header };
export type { Props as HeaderProps };
