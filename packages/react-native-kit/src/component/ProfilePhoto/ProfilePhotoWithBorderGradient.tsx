import { memo } from 'react';
import type { ColorValue } from 'react-native';
import { View } from 'react-native';
import { Circle, Defs, RadialGradient, Stop, Svg } from 'react-native-svg';

import { is } from '../../util';

import { LightProfilePhoto } from './LightProfilePhoto';

const ProfilePhotoWithBorderGradient = memo(
  ({
    profileImageUrl,
    size,
    borderGradientColor,
    optimize,
  }: {
    profileImageUrl: string;
    size: number;
    borderGradientColor?: ColorValue;
    optimize?: boolean;
  }) => (
    <View>
      <LightProfilePhoto profileImageUrl={profileImageUrl} size={size} optimize={optimize} />
      {is.string(borderGradientColor) ? (
        <Svg height={size} width={size} style={{ position: 'absolute' }}>
          <Defs>
            <RadialGradient id={'grad'} cx={size / 2} cy={size / 2} gradientUnits={'userSpaceOnUse'}>
              <Stop offset={'0.66'} stopColor={borderGradientColor} stopOpacity={0} />
              <Stop offset={'1'} stopColor={borderGradientColor} stopOpacity={1} />
            </RadialGradient>
          </Defs>
          <Circle r={size / 2 + 1} cx={size / 2} cy={size / 2} fill={'url(#grad)'} />
        </Svg>
      ) : null}
    </View>
  ),
);

export { ProfilePhotoWithBorderGradient };
