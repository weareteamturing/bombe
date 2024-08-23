import { Txt, is, spacing } from '@teamturing/react-native-kit';
import React from 'react';
import { View } from 'react-native';

import { type IconName, type IconProps, Icon } from '../Icon';
import { type ImgSource, Img } from '../Img/Img';
import { GapW } from '../Layout/Gap';

export type BannerItemProps = {
  icon?: {
    name: IconName;
    fill?: IconProps['fill'];
  };
  image?: ImgSource;
  text?: string;
  renderText?: (text: string) => React.ReactElement;
  showsChevron?: boolean;
  renderTrailing?: () => React.ReactElement;
  renderLeading?: () => React.ReactElement;
  testID?: string;
};
const BannerItem = ({
  icon,
  image,
  renderText = (text) => Txt.S.Medium.render(text, { numberOfLines: 1, testID: `${testID}/text` }),
  text,
  showsChevron = true,
  renderTrailing,
  renderLeading,
  testID = 'BannerItem',
}: BannerItemProps) => {
  const renderLeadingElement = () => {
    if (is.function(renderLeading)) {
      return (
        <>
          {renderLeading()}
          <GapW unit={2} />
        </>
      );
    } else if (icon) {
      return <Icon name={icon.name} fill={icon.fill} size={24} mr={2} />;
    } else if (image) {
      return Img.S24.render(image, { style: { marginRight: spacing[2] } });
    } else {
      return null;
    }
  };
  return (
    <View testID={testID} style={{ flexDirection: 'row', alignItems: 'center' }}>
      {renderLeadingElement()}
      <View style={{ flex: 1, marginRight: spacing[2] }}>{renderText(text || '')}</View>
      {is.function(renderTrailing) ? renderTrailing() : showsChevron ? <Icon name={'chevron_right'} size={16} /> : null}
    </View>
  );
};

export { BannerItem };
