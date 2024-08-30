import { GradientCollection } from '@teamturing/react-native-kit';

export const LaTexTopGradient = () => {
  return (
    <GradientCollection
      style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 8 }}
      locations={[0, 1]}
      colors={['#FFFFFFFF', '#FFFFFF00']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      pointerEvents={'none'}
    />
  );
};

export const LaTexBottomGradient = () => {
  return (
    <GradientCollection
      style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 24 }}
      locations={[0, 1]}
      colors={['#FFFFFFFF', '#FFFFFF00']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      pointerEvents={'none'}
    />
  );
};

export const LaTexLeftGradient = () => {
  return (
    <GradientCollection
      locations={[0, 1]}
      colors={['#ffffffff', '#FFFFFF00']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 24 }}
    />
  );
};

export const LaTexRightGradient = () => {
  return (
    <GradientCollection
      locations={[0, 1]}
      colors={['#ffffffff', '#FFFFFF00']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 24 }}
    />
  );
};
