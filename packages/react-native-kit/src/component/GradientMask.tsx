import MaskedView from '@react-native-masked-view/masked-view';
import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import type { PropsWithChildren } from 'react';
import type { ViewProps } from 'react-native';
import { View, StyleSheet } from 'react-native';

import { type GradientType, gradient } from '../theme';

import { GradientCollection } from './GradientCollection';

type Props = PropsWithChildren<
  {
    gradient?: GradientType;
    disabled?: boolean;
  } & ViewProps &
    SxProps
>;
const GradientMask = (props: Props) => {
  const { filteredProps, getStyle } = useSx(props);

  const { children, gradient: _gradientKey = 'gradient4', disabled, ...viewProps } = filteredProps;

  if (disabled) {
    return <View {...viewProps}>{children}</View>;
  }
  return (
    // @ts-ignore
    <MaskedView maskElement={<>{children}</>} {...viewProps} style={getStyle()}>
      {/* layout purpose */}
      <View style={{ opacity: 0 }} pointerEvents={'none'} importantForAccessibility={'no'}>
        {children}
      </View>
      <GradientCollection {...gradient[_gradientKey]} style={StyleSheet.absoluteFill} />
    </MaskedView>
  );
};

export { GradientMask };
export type { Props as GradientMaskProps };
