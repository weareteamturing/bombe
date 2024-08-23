import type { SxProps } from '@react-native-styled-system/core';
import type { PropsWithChildren } from 'react';
import type { ViewProps } from 'react-native';

import { Box } from '../Box';

type Props = { reverse?: boolean } & PropsWithChildren<ViewProps & SxProps>;
const Row = (props: Props) => {
  return <Box flexDirection={props.reverse ? 'row-reverse' : 'row'} {...props} />;
};
export const RowCenter = (props: Props) => {
  return <Row alignItems={'center'} {...props} />;
};

export { Row };
