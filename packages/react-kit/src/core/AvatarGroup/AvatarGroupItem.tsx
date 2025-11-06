import { LiHTMLAttributes, Ref, forwardRef } from 'react';
import styled from 'styled-components';

import Avatar, { AvatarProps } from '../Avatar';
import Tooltip from '../Tooltip';

type Props = { alt: NonNullable<AvatarProps['alt']> } & Omit<AvatarProps, 'size' | 'alt'> &
  Pick<LiHTMLAttributes<HTMLElement>, 'onClick'>;

const AvatarGroupItem = ({ onClick, ...props }: Props, ref: Ref<HTMLImageElement>) => (
  <BaseAvatarGroupItem onClick={onClick}>
    <Tooltip text={props.alt}>
      <Avatar ref={ref} size={'s'} {...props} />
    </Tooltip>
  </BaseAvatarGroupItem>
);

const BaseAvatarGroupItem = styled.li`
  display: inline-flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default forwardRef(AvatarGroupItem);
export type { Props as AvatarGroupItemProps };
