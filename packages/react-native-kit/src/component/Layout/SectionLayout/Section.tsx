import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import React from 'react';
import type { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { View } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
} & Pick<ViewProps, 'onLayout'> &
  SxProps;

const Section = (props: React.PropsWithChildren<Props>) => {
  const { children, onLayout } = props;
  const { getStyle } = useSx(props, { fallback: { bg: 'white' } });
  return (
    <View style={getStyle()} {...{ onLayout }}>
      {children}
    </View>
  );
};

export default Section;
export type { Props as SectionProps };
