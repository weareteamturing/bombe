import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { is, appendImageSizeQueryParams } from '../../util';
import { Img } from '../Img';

import defaultImage from './profile_outline_gray_90.png';

// this is used for just rendering character image in light component like list item(shouldn't be heavy)
const LightProfilePhoto = ({
  profileImageUrl,
  style,
  size: _size,
  borderColor,
  borderWidth = 0,
  optimize = true,
}: {
  profileImageUrl: string;
  style?: StyleProp<Omit<ViewStyle, 'borderWidth' | 'borderColor'>>;
  size?: number;
  borderWidth?: number;
  borderColor?: string;
  optimize?: boolean;
}) => {
  const size = _size || 56;
  return (
    <View
      key={profileImageUrl}
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
        {
          width: size,
          height: size,
          borderRadius: 9999,
          borderWidth: 0,
        },
      ]}
    >
      {Img.render(
        is.notEmptyString(profileImageUrl)
          ? optimize
            ? appendImageSizeQueryParams({ url: profileImageUrl, desiredWidth: size })
            : profileImageUrl
          : defaultImage,
        {
          width: size,
          height: size,
          style: { borderWidth, borderColor, borderRadius: 999 },
        },
      )}
    </View>
  );
};

export { LightProfilePhoto };
