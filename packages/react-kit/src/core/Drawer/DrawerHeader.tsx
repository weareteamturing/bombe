import { PropsWithChildren } from 'react';

import UnstyledDrawerHeader, { UnstyledDrawerHeaderProps } from './_UnstyledDrawerHeader';

type Props = {} & UnstyledDrawerHeaderProps;

const DrawerHeader = ({ children, sx, ...props }: PropsWithChildren<Props>) => (
  <UnstyledDrawerHeader
    {...props}
    sx={{
      pl: 5,
      pr: 16,
      py: 2,
      minHeight: 56,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: 'border/neutral',

      display: 'flex',
      flexDirection: 'row',
      columnGap: 1,
      flexWrap: 'nowrap',
      ...sx,
    }}
  >
    {children}
  </UnstyledDrawerHeader>
);

export default DrawerHeader;
export type { Props as DrawerHeaderProps };
