import { PropsWithChildren } from 'react';

import UnstyledDialogHeader, { UnstyledDialogHeaderProps } from './_UnstyledDialogHeader';

type Props = {} & UnstyledDialogHeaderProps;

const DialogHeader = ({ children, sx, ...props }: PropsWithChildren<Props>) => (
  <UnstyledDialogHeader
    {...props}
    sx={{
      px: 5,
      py: 4,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: 'border/neutral',
      ...sx,
    }}
  >
    {children}
  </UnstyledDialogHeader>
);

export default DialogHeader;
export type { Props as DialogHeaderProps };
