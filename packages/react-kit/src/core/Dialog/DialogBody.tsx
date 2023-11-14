import { PropsWithChildren } from 'react';

import UnstyledDialogBody, { UnstyledDialogBodyProps } from './_UnstyledDialogBody';

type Props = {} & UnstyledDialogBodyProps;

const DialogBody = ({ children, sx, ...props }: PropsWithChildren<Props>) => (
  <UnstyledDialogBody
    {...props}
    sx={{
      p: 5,
      ...sx,
    }}
  >
    {children}
  </UnstyledDialogBody>
);

export default DialogBody;
export type { Props as DialogBodyProps };
