import { palette, applyOpacity, Box } from '@teamturing/react-native-kit';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { LoadingIndicator } from './LoadingIndicator';

export const LoadingIndicatorView = ({ isLoading, children, ...rest }: { isLoading: boolean } & ViewProps) => {
  return (
    <View {...rest}>
      {children}
      {isLoading ? (
        <Box
          absoluteFill
          style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: applyOpacity(palette.white, 30) }}
          pointerEvents={isLoading ? 'auto' : 'none'}
        >
          <LoadingIndicator />
        </Box>
      ) : null}
    </View>
  );
};