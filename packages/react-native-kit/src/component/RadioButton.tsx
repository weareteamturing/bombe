import type { PressableProps } from 'react-native';
import { Pressable, View } from 'react-native';

import type { LayoutStyle } from './Layout/LayoutStyle';

import { palette } from '@teamturing/react-native-kit';

type Props = { layout?: LayoutStyle; value: boolean } & PressableProps;
const RadioButton = ({ layout, value, ...props }: Props) => {
  return (
    <Pressable
      {...props}
      style={[layout, { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }]}
      hitSlop={12}
    >
      <View
        style={{
          width: 22,
          height: 22,
          borderRadius: 999,
          borderWidth: value ? 6 : 3,
          borderColor: value ? palette.gray900 : palette.gray200,
        }}
      />
    </Pressable>
  );
};

export { RadioButton };
