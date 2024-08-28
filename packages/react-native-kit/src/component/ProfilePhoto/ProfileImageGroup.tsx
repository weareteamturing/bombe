import { toKoreanNumberUnitString } from '@teamturing/utils';
import type { ImageSourcePropType, ColorValue } from 'react-native';
import { View } from 'react-native';

import { palette, spacing } from '../../theme';
import { is, appendImageSizeQueryParams, applyOpacity } from '../../util';
import { Img } from '../Img';
import { RowCenter } from '../Layout';
import { Txt } from '../Txt';

type Props = {
  count?: number;
  imageUrls: (ImageSourcePropType | string)[];
  stackDirection?: 'left' | 'right';
  size?: number;
  backgroundColor?: string;
  showBorder?: boolean;
  maxCircleCount?: number;
  showsMoreCount?: boolean;

  borderWidth?: number;
  borderPadding?: number;
  borderColor?: ColorValue;
  resizeNetworkImage?: boolean;
  imageBorderWidth?: number;
  imageBorderColor?: ColorValue;
};
const ProfileImageGroup = ({
  count: countProp,
  imageUrls: _imageUrls,
  stackDirection = 'right',
  size = 36,
  backgroundColor = palette.gray100,
  showBorder = true,
  maxCircleCount = 3,
  showsMoreCount = true,

  borderWidth = 1,
  borderPadding = spacing[0.5],
  borderColor = palette.gray200,
  resizeNetworkImage = true,
  imageBorderWidth = 2,
  imageBorderColor = backgroundColor,
}: Props) => {
  const isReverse = stackDirection === 'left';
  const imageUrls = isReverse ? [..._imageUrls].reverse() : _imageUrls;

  const totalCount = countProp ?? imageUrls.length;
  const visibleProfileCount = Math.min(imageUrls.length, maxCircleCount);

  return (
    <RowCenter
      reverse={isReverse}
      style={showBorder ? { borderRadius: 999, borderWidth: borderWidth, padding: borderPadding, borderColor } : {}}
    >
      {imageUrls.slice(0, maxCircleCount).map((url, index) =>
        Img.render(
          resizeNetworkImage && is.string(url) ? appendImageSizeQueryParams({ url, desiredWidth: size }) : url,
          {
            key: index,
            width: size,
            height: size,
            style: [
              {
                borderColor: imageBorderColor,
                borderRadius: 999,
                borderWidth: imageBorderWidth,
              },
              stackDirection === 'right'
                ? { marginLeft: index !== 0 ? -size / 2 : 0 }
                : { marginRight: index !== 0 ? -size / 2 : 0 },
            ],
          },
        ),
      )}
      {showsMoreCount && totalCount > visibleProfileCount ? (
        <View
          style={[
            {
              width: size - 4,
              height: size - 4,
              position: 'absolute',
              backgroundColor: applyOpacity(palette.black, 60),
              borderRadius: 999,
              alignItems: 'center',
              justifyContent: 'center',
            },
            stackDirection === 'right' ? { right: spacing[showBorder ? 1 : 0] } : { left: spacing[showBorder ? 1 : 0] },
          ]}
        >
          {Txt.XXS.Bold.White.render(`+${toKoreanNumberUnitString(totalCount - (maxCircleCount - 1))}`)}
        </View>
      ) : null}
    </RowCenter>
  );
};

export { ProfileImageGroup };
