import { PropsWithChildren } from 'react';

import UnstyledDrawerBody, { UnstyledDrawerBodyProps } from './_UnstyledDrawerBody';

type Props = {} & UnstyledDrawerBodyProps;

const DrawerBody = ({ children, sx, ...props }: PropsWithChildren<Props>) => (
  <UnstyledDrawerBody
    {...props}
    sx={{
      p: 5,
      ...sx,
    }}
  >
    {children}
  </UnstyledDrawerBody>
);

export default DrawerBody;
export type { Props as DrawerBodyProps };
