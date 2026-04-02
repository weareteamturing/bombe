import { PropsWithChildren, useContext } from 'react';

import Text, { TextProps } from '../Text';

import DialogContext from './DialogContext';

type Props = {} & TextProps;

const DialogHeaderTitle = ({ typography = 'm/bold', color = 'text/neutral', ...props }: PropsWithChildren<Props>) => {
  const { titleId } = useContext(DialogContext);

  return <Text id={titleId} className={'trk-dialog_header_title'} typography={typography} color={color} {...props} />;
};

export default DialogHeaderTitle;
export type { Props as DialogHeaderTitleProps };
