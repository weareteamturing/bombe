import { palette, spacing } from '../../theme';
import { is } from '../../util';
import { Box } from '../Box';
import type { LayoutStyle } from '../Layout';
import { PressableDelayed } from '../Pressable';

import { type BannerItemProps, BannerItem } from './BannerItem';

type Props = {
  layout?: LayoutStyle;
  onPress?: () => void;
  backgroundColor?: keyof typeof palette;
} & BannerItemProps;
const BannerRectangle = ({ layout, onPress, backgroundColor = 'gray100', testID, ...rest }: Props) => {
  return (
    <PressableDelayed
      testID={`${testID}/button`}
      disabled={!is.function(onPress)}
      onPress={onPress}
      style={({ pressed }) => [
        layout,
        {
          paddingVertical: spacing[4],
          backgroundColor: palette[backgroundColor],
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      <Box px={'sidePadding'} backgroundColor={'transparent'}>
        <BannerItem {...rest} showsChevron={is.function(onPress)} testID={testID} />
      </Box>
    </PressableDelayed>
  );
};

export { BannerRectangle };
