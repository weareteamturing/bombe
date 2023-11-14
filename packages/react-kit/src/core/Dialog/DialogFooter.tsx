import { PropsWithChildren } from 'react';

import UnstyledDialogFooter, { UnstyledDialogFooterProps } from './_UnstyledDialogFooter';

type Props = {} & UnstyledDialogFooterProps;

const DialogFooter = ({ children, sx, ...props }: PropsWithChildren<Props>) => (
  <UnstyledDialogFooter
    {...props}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexWrap: 'wrap-reverse',

      px: 5,
      py: 4,
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: 'border/neutral',

      rowGap: 1,
      columnGap: 2,
      ...sx,
    }}
  >
    {children}
  </UnstyledDialogFooter>
);

export default DialogFooter;
export type { Props as DialogFooterProps };
