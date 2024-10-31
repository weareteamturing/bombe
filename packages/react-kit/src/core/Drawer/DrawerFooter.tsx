import { PropsWithChildren } from 'react';

import UnstyledDrawerFooter, { UnstyledDrawerFooterProps } from './_UnstyledDrawerFooter';

type Props = {} & UnstyledDrawerFooterProps;

const DrawerFooter = ({ children, sx, ...props }: PropsWithChildren<Props>) => (
  <UnstyledDrawerFooter
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
  </UnstyledDrawerFooter>
);

export default DrawerFooter;
export type { Props as DrawerFooterProps };
