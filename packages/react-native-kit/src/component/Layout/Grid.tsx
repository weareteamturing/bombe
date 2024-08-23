import React from 'react';
import type { FlexAlignType, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import { spacing as tokenSpacing, type Spacing } from '../../theme/token/spacing';

import type { LayoutStyle } from './LayoutStyle';

type Props = {
  spacing?: Spacing;
  alignItems?: FlexAlignType;
  wrap?: boolean;
  reverse?: boolean;
  layout?: LayoutStyle;
};

const Grid = ({
  children,
  spacing = 0,
  reverse = false,
  alignItems = 'center',
  wrap = true,
  layout,
}: React.PropsWithChildren<Props>) => {
  const childStyle: StyleProp<ViewStyle> = {
    paddingTop: tokenSpacing[spacing],
    paddingHorizontal: tokenSpacing[spacing] / 2,
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps = {
        ...((child as React.ReactElement<UnitProps>).props || {}),
        style: StyleSheet.flatten([childStyle, (child as React.ReactElement<UnitProps>).props.style]),
      };
      return React.cloneElement(child, childProps);
    }
    return child;
  });

  return (
    <View style={layout}>
      <View
        style={{
          flexDirection: reverse ? 'row-reverse' : 'row',
          flexWrap: wrap && reverse ? 'wrap-reverse' : wrap ? 'wrap' : 'nowrap',
          alignItems,
          marginHorizontal: -tokenSpacing[spacing] / 2,
          marginTop: -tokenSpacing[spacing],
        }}
      >
        {childrenWithProps}
      </View>
    </View>
  );
};

type UnitProps = {
  size: 'min' | 'max' | number;
  style?: StyleProp<ViewStyle>;
};

const Unit = ({ style, children, size }: React.PropsWithChildren<UnitProps>) => {
  const percetage = Math.round((size as number) * 100 * 10000) / 10000;
  return (
    <View
      style={[
        size === 'min'
          ? {
              flexGrow: 0,
              flexBasis: 'auto',
              width: 'auto',
            }
          : size === 'max'
          ? {
              flexGrow: 1,
              flex: 1,
              flexBasis: 'auto',
              width: 'auto',
              maxWidth: '100%',
            }
          : {
              flexGrow: 1,
              flexBasis: `${percetage}%`,
              maxWidth: `${percetage}%`,
            },
        style,
      ]}
    >
      {children}
    </View>
  );
};

Grid.Unit = Unit;

export { Grid };
