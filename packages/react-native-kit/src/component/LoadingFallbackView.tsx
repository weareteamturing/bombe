import { View } from 'react-native';

import { palette } from '../theme';

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
