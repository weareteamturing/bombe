import type { SxProps } from '@react-native-styled-system/core';
import type { ReactElement } from 'react';
import type { ColorValue } from 'react-native';

import { palette } from '../../theme';
import { Icon } from '../Icon';
import { RowCenter } from '../Layout';
import { Txt } from '../Txt';

import { type BaseToolTipProps, BaseToolTip } from './BaseToolTip';

type Props = {
  text: string;
  showsCloseButton?: boolean;
  textColor?: ColorValue;
  renderText?: (text: string) => ReactElement;
  sx?: SxProps;
  contentContainerSx?: SxProps;
  contentSx?: SxProps;
} & Omit<BaseToolTipProps, 'renderContent'>;
const TextToolTip = ({
  showsCloseButton,
  text,
  textColor = palette.white,
  renderText = (text) => Txt.XS.Medium.Color(textColor).render(text),
  contentContainerSx,
  contentSx,
  ...props
}: Props) => {
  const renderContent = () => {
    const textElement = renderText(text);
    const iconElement = showsCloseButton ? <Icon name={'close'} fill={palette.white} size={16} ml={2} /> : null;

    return (
      <RowCenter px={3} py={2} justifyContent={'center'} sx={contentSx}>
        {textElement}
        {iconElement}
      </RowCenter>
    );
  };

  return (
    <BaseToolTip
      backgroundColor={palette.gray700}
      {...props}
      contentContainerSx={{ radius: 8, ...contentContainerSx }}
      renderContent={renderContent}
      pointerEvents={'none'}
    />
  );
};

export { TextToolTip };
