import { PropsWithChildren } from 'react';

import Text, { TextProps } from '../Text';

type Props = {} & TextProps;

const DialogHeaderTitle = ({ typography = 'm/bold', color = 'text/neutral', ...props }: PropsWithChildren<Props>) => (
  <Text typography={typography} color={color} {...props} />
);

export default DialogHeaderTitle;
export type { Props as DialogHeaderTitleProps };
