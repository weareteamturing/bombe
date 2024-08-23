import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import { type PaletteColor, palette } from '@teamturing/react-native-kit';
import { View } from 'react-native';

import { Box } from './Box';

type Props = {
  sx?: SxProps;
  color?: PaletteColor;
  borderColor?: PaletteColor;
  size?: number;
  borderWidth?: number;
  testID?: string;
};
const Dot = ({ color = 'green500', borderColor = 'white', size = 12, borderWidth = 0, testID, sx }: Props) => {
  const { getStyle } = useSx(sx);
  return (
    <Box
      testID={testID}
      style={[
        {
          backgroundColor: palette[borderColor],
          padding: borderWidth,
          width: size,
          height: size,
          borderRadius: 999,
          justifyContent: 'center',
          alignItems: 'center',
        },
        getStyle(),
      ]}
      pointerEvents={'none'}
    >
      <View style={{ backgroundColor: palette[color], width: '100%', height: '100%', borderRadius: 999 }} />
    </Box>
  );
};

export { Dot };
