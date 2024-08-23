import React from 'react';
import type { RefreshControlProps } from 'react-native';
import { RefreshControl } from 'react-native';

import { palette } from '@teamturing/react-native-kit';

type Props = {} & RefreshControlProps;
const RefreshControlEx: React.FC<Props> = ({ ...rest }: Props) => {
  return (
    <RefreshControl
      tintColor={palette.violet400}
      colors={[palette.violet400, palette.violet600, palette.green500]}
      {...rest}
    />
  );
};

export { RefreshControlEx };
