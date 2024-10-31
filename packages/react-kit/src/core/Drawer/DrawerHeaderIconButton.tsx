import { PropsWithChildren } from 'react';

import IconButton, { IconButtonProps } from '../IconButton';

type Props = {} & IconButtonProps;

const DrawerHeaderIconButton = ({ size = 'm', variant = 'plain-bold', ...props }: PropsWithChildren<Props>) => (
  <IconButton size={size} variant={variant} {...props} />
);

export default DrawerHeaderIconButton;
export type { Props as DrawerHeaderIconButtonProps };
