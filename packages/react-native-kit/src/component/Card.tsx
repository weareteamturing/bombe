import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import React from 'react';
import { View } from 'react-native';

type Props = {} & SxProps;

const Card = ({ children, ...props }: React.PropsWithChildren<Props>) => {
  const { getStyle } = useSx(props, {
    fallback: {
      bg: 'gray50',
      borderWidth: 0,
      borderColor: 'transparent',
      radius: 20,
      overflow: 'hidden',
    },
  });
  return <View style={getStyle()}>{children}</View>;
};

export { Card };
export type { Props as CardProps };
