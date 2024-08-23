import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import { spacing, palette, is, RowCenter, Column } from '@teamturing/react-native-kit';
import type { ReactElement } from 'react';
import type { StyleProp, ViewStyle, ColorValue } from 'react-native';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  triangleDirection?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'right'
    | 'left';
  triangleSize?: number;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: ColorValue;
  renderContent?: () => ReactElement;
  contentOuterContainerStyle?: StyleProp<ViewStyle>;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
  borderColor?: ColorValue;
  borderWidth?: number;
  sx?: SxProps;
  contentContainerSx?: SxProps;
};
const BaseToolTip = ({
  triangleDirection = 'top-left',
  style,
  backgroundColor = palette.white,
  renderContent: _renderContnetProp,
  contentOuterContainerStyle,
  triangleSize = 10,
  pointerEvents,
  borderColor = palette.gray200,
  borderWidth = 0,
  sx,
  contentContainerSx,
}: Props) => {
  const showBorder = is.number(borderWidth) && borderWidth > 0 && is.notEmptyString(borderColor);
  const isTop = triangleDirection?.startsWith('top');
  const isHorizontal = triangleDirection === 'left' || triangleDirection === 'right';
  const isLeft = triangleDirection === 'left';

  const { getStyle } = useSx(sx);
  const { getStyle: contentContainerStyle } = useSx(contentContainerSx);

  const renderVerticalTriangle = () => (
    <Svg
      width={triangleSize}
      height={triangleSize * 0.6}
      viewBox={`0 0 ${triangleSize} ${triangleSize * 0.6}`}
      fill={backgroundColor}
      style={{ transform: [{ rotate: isTop ? '180deg' : '0deg' }] }}
    >
      <Path d={`M 0,0 L ${triangleSize},0 L ${triangleSize / 2},${triangleSize * 0.6} z`} />
      <Path
        d={`M 0,0 L ${triangleSize / 2},${triangleSize * 0.6} L ${triangleSize},${0}`}
        {...(showBorder
          ? {
              stroke: borderColor,
              strokeWidth: borderWidth,
            }
          : {})}
      />
    </Svg>
  );
  const renderHorizontalTriangle = () => {
    const w = triangleSize * 0.7;
    const h = triangleSize;
    return (
      <Svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill={backgroundColor}
        style={{ transform: [{ rotate: isLeft ? '180deg' : '0deg' }] }}
      >
        <Path d={`M 0,0 L ${w},${h / 2} L 0,${h} z`} />
      </Svg>
    );
  };

  const renderContent = () => {
    return (
      <View
        style={[
          {
            backgroundColor,
          },
          showBorder
            ? {
                borderWidth,
                borderColor,
              }
            : {},
          contentContainerStyle(),
        ]}
      >
        {_renderContnetProp?.()}
      </View>
    );
  };

  if (isHorizontal) {
    return (
      <RowCenter pointerEvents={pointerEvents} style={[style, getStyle()]}>
        {!isLeft ? null : (
          <View
            style={{
              transform: [{ translateX: 1 }],
            }}
          >
            {renderHorizontalTriangle()}
          </View>
        )}
        <View style={contentOuterContainerStyle}>{renderContent()}</View>
        {isLeft ? null : (
          <View
            style={{
              transform: [{ translateX: -1 }],
            }}
          >
            {renderHorizontalTriangle()}
          </View>
        )}
      </RowCenter>
    );
  } else {
    return (
      <Column pointerEvents={pointerEvents} style={[style, getStyle()]}>
        {!isTop ? null : (
          <View
            style={{
              alignSelf:
                triangleDirection === 'top-center'
                  ? 'center'
                  : triangleDirection === 'top-right'
                  ? 'flex-end'
                  : 'flex-start',
              left: triangleDirection === 'top-left' ? spacing[3] : undefined,
              right: triangleDirection === 'top-right' ? spacing[3] : undefined,
              bottom: -1,
            }}
          >
            {renderVerticalTriangle()}
          </View>
        )}
        <View style={contentOuterContainerStyle}>{renderContent()}</View>
        {isTop ? null : (
          <View
            style={{
              alignSelf:
                triangleDirection === 'bottom-center'
                  ? 'center'
                  : triangleDirection === 'bottom-right'
                  ? 'flex-end'
                  : 'flex-start',
              left: triangleDirection === 'bottom-left' ? spacing[3] : undefined,
              right: triangleDirection === 'bottom-right' ? spacing[3] : undefined,
              top: -0.2 - borderWidth,
            }}
          >
            {renderVerticalTriangle()}
          </View>
        )}
      </Column>
    );
  }
};
export type { Props as BaseToolTipProps };
export { BaseToolTip };
