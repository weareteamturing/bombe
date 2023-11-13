import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {
  renderBadge: (badgeProps: Pick<HTMLAttributes<HTMLElement>, 'style'>) => ReactNode;
} & SxProp;

const BadgeAttacher = ({ children, renderBadge, ...props }: PropsWithChildren<Props>) => (
  <BadgeAttacherWrapper {...props}>
    {children}
    {renderBadge({ style: { position: 'absolute', top: 0, right: 0, transform: 'translate(10%, -10%)' } })}
  </BadgeAttacherWrapper>
);

const BadgeAttacherWrapper = styled.div<SxProp>`
  position: relative;
  width: fit-content;

  ${sx}
`;

export default BadgeAttacher;
export type { Props as BadgeAttacherProps };
