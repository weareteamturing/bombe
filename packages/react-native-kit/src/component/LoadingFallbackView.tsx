import { palette } from '@teamturing/react-native-kit';
import { View } from 'react-native';

type Props = {
  height: number;
};

const LoadingFallbackView = ({ height }: Props) => {
  if (height === 0) {
    return null;
  }
  return <View style={{ backgroundColor: palette.transparent, minHeight: height }} />;
};

export { LoadingFallbackView };
