import { type TextConfigProp, Txt } from '@teamturing/react-native-kit';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

type Props = {
  text?: string;
  style?: StyleProp<ViewStyle>;
  textConfig?: TextConfigProp;
  TxtComponent?: Txt;
};
const LiText = ({ text, textConfig, style, TxtComponent = Txt.Regular }: Props) => {
  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      {TxtComponent.render('\u2022', textConfig)}
      {TxtComponent.render(text, { ...textConfig, style: [{ flex: 1, marginLeft: 8 }, textConfig?.style] })}
    </View>
  );
};

export { LiText };
