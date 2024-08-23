import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

import { spacing, palette } from '../../../theme';
import { type ColumnProps, Column } from '../Column';

import type { SectionProps } from './Section';

type Props = {
  style?: StyleProp<ViewStyle>;
} & SxProps;

export const SectionLayout = (props: React.PropsWithChildren<Props>) => {
  const { getStyle } = useSx(props, { fallback: { bg: 'gray100' } });
  const { children } = props;

  const childSectionStyle: ViewStyle = { marginTop: spacing[4] };
  let childSectionStyleCanBeInjected = false;

  const childrenWithProps = React.Children.map(children, (child, i) => {
    if (React.isValidElement(child)) {
      const childProps = {
        ...((child as React.ReactElement<SectionProps>).props || {}),
        style: StyleSheet.flatten([
          i !== 0 && childSectionStyleCanBeInjected ? childSectionStyle : {},
          (child as React.ReactElement<SectionProps>).props.style,
        ]),
      };

      childSectionStyleCanBeInjected = true;
      return React.cloneElement(child, childProps);
    }
    return child;
  });

  return <Column style={getStyle()}>{childrenWithProps}</Column>;
};

export const SectionDivider = (props: ColumnProps) => (
  <Column {...props} style={[props?.style, { height: spacing[4], backgroundColor: palette.gray100 }]} />
);
