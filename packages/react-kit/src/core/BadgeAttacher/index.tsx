import { CSSProperties, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type BadgeAnchor = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type Props = {
  renderBadge: (badgeProps: Pick<HTMLAttributes<HTMLElement>, 'style'>) => ReactNode;
  anchor?: BadgeAnchor;
  offsetX?: string | number; // 수평 바깥 방향 이동량 (default '10%')
  offsetY?: string | number; // 수직 바깥 방향 이동량 (default '10%')
} & SxProp;

const toLength = (value: string | number) => (typeof value === 'number' ? `${value}px` : value);

// 바깥 방향(양수 offset)이 anchor에 따라 반대 축이므로, top/left 앵커에서는 값 자체를 반전한다.
const negate = (length: string) => (length.startsWith('-') ? length.slice(1) : `-${length}`);

const resolveBadgeStyle = (anchor: BadgeAnchor, offsetX: string | number, offsetY: string | number): CSSProperties => {
  const [vertical, horizontal] = anchor.split('-') as ['top' | 'bottom', 'left' | 'right'];
  const x = toLength(offsetX);
  const y = toLength(offsetY);
  const translateX = horizontal === 'right' ? x : negate(x);
  const translateY = vertical === 'bottom' ? y : negate(y);

  return {
    position: 'absolute',
    [vertical]: 0,
    [horizontal]: 0,
    transform: `translate(${translateX}, ${translateY})`,
  };
};

const BadgeAttacher = ({
  children,
  renderBadge,
  anchor = 'top-right',
  offsetX = '10%',
  offsetY = '10%',
  ...props
}: PropsWithChildren<Props>) => (
  <BadgeAttacherWrapper {...props}>
    {children}
    {renderBadge({ style: resolveBadgeStyle(anchor, offsetX, offsetY) })}
  </BadgeAttacherWrapper>
);

const BadgeAttacherWrapper = styled.div<SxProp>`
  position: relative;
  width: fit-content;

  ${sx}
`;

export default BadgeAttacher;
export type { Props as BadgeAttacherProps, BadgeAnchor };
