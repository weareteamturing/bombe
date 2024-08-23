import { palette, Txt, spacing, Badge } from '@teamturing/react-native-kit';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { type BaseTabPropsWithoutRenderProps, BaseTab } from './BaseTab';

type Props = {
  redDotIndice?: number[];
  style?: StyleProp<ViewStyle>;
} & BaseTabPropsWithoutRenderProps;
const IndicatorTab = ({ redDotIndice, style, testID = 'IndicatorTab', ...rest }: Props) => {
  return (
    <BaseTab
      renderContainer={(children) => (
        <View style={[{ borderBottomWidth: 1, borderBottomColor: palette.gray200, flexDirection: 'row' }, style]}>
          {children}
        </View>
      )}
      renderTab={({ isSelected, text, index }) => {
        const textElement = isSelected ? Txt.M.Medium.render(text) : Txt.M.Gray500.render(text);
        return (
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: isSelected ? palette.violet500 : palette.transparent,
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              paddingVertical: spacing[3],
            }}
          >
            {redDotIndice?.includes(index) ? wrapWithRedDot() : textElement}
          </View>
        );

        function wrapWithRedDot() {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 12 }} />
              {textElement}
              <Badge color={palette.red500} size={6} layout={{ top: -8 }} />
            </View>
          );
        }
      }}
      testID={testID}
      stretchItemWidth
      {...rest}
    />
  );
};

export { IndicatorTab };
