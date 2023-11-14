import { PropsWithChildren } from 'react';

import Text, { TextProps } from '../Text';

type Props = {} & TextProps;

const DialogHeaderSubtitle = ({
  typography = 'xs',
  color = 'text/neutral/subtler',
  ...props
}: PropsWithChildren<Props>) => <Text typography={typography} color={color} {...props} />;

export default DialogHeaderSubtitle;
export type { Props as DialogHeaderSubtitleProps };
