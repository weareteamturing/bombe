import type { ReactElement } from 'react';
import { type StyleProp, type ViewStyle, View } from 'react-native';

import { palette } from '../../theme';
import { is } from '../../util';
import { Icon } from '../Icon';
import { Touch } from '../Pressable';

import { LightProfilePhoto } from './LightProfilePhoto';

const defaultLength = 90;

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  showIcon?: boolean;
  pressable?: boolean;
  length?: number;
  testID?: string;
  profileImageUrl?: string;
};
const ProfilePhoto = ({
  style,
  onPress,
  showIcon,
  pressable = false,
  length: _length,
  testID,
  profileImageUrl,
}: Props): ReactElement => {
  const length = is.number(_length) ? _length : defaultLength;

  return (
    <View
      style={[
        style,
        {
          justifyContent: 'center',
          alignItems: 'center',
          width: length,
          height: length,
        },
      ]}
    >
      <Touch
        testID={testID || 'profile_photo_button'}
        style={{
          borderRadius: 9999,
          width: '100%',
          height: '100%',
        }}
        onPress={onPress}
        disabled={!pressable}
      >
        <LightProfilePhoto profileImageUrl={profileImageUrl || ''} size={length} />
        {showIcon ? (
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: palette.gray200,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: palette.white,
              position: 'absolute',
              right: -6,
              bottom: -6,
            }}
            pointerEvents={'none'}
          >
            <Icon name={'pen'} size={16} />
          </View>
        ) : null}
      </Touch>
    </View>
  );
};

export { ProfilePhoto };
