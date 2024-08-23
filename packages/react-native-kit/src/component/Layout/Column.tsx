import type { SxProps } from '@react-native-styled-system/core';
import type { PropsWithChildren } from 'react';
import type { ViewProps } from 'react-native';

import { Box } from '../Box';

type Props = { reverse?: boolean } & PropsWithChildren<ViewProps & SxProps>;
const Column = (props: Props) => {
  return <Box flexDirection={props.reverse ? 'column-reverse' : 'column'} {...props} />;
};
export const ColumnCenter = (props: Props) => {
  return <Column alignItems={'center'} {...props} />;
};

export { Column };
export type { Props as ColumnProps };
