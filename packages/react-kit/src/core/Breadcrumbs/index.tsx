import { Children, PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

import { forcePixelValue } from '../../utils';

import BreadcrumbsItem from './BreadcrumbsItem';

type Props = {
  /**
   * 최대로 표시될 BreadcrumbsItem의 갯수를 정의합니다.
   * BreadcrumbsItem의 갯수가 maxItemCount보다 클 경우, 자동으로 중간 BreadcrumbsItem들을 줄여서 보여줍니다.
   */
  maxItemCount?: number;
};

const Breadcrumbs = ({ children, maxItemCount = 5, ...props }: PropsWithChildren<Props>) => {
  const childrenArray = Children.toArray(children);
  const shouldCollapse = maxItemCount < childrenArray.length;
  const [isExpanded, setIsExpanded] = useState(!shouldCollapse);

  const breadcrumbsItems = isExpanded
    ? childrenArray
    : [
        ...childrenArray.slice(0, 1),
        <BreadcrumbsItem key={'collapse'} text={'...'} onClick={() => setIsExpanded(true)} />,
        ...childrenArray.slice(1 + 1 + childrenArray.length - maxItemCount),
      ];

  return (
    <BaseBreadcrumbs {...props}>
      {Children.map(breadcrumbsItems, (child) => (
        <BreadcrumbsItemWrapper role={'listitem'}>{child}</BreadcrumbsItemWrapper>
      ))}
    </BaseBreadcrumbs>
  );
};

const BaseBreadcrumbs = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  column-gap: ${({ theme }) => forcePixelValue(theme.space[2])};
  row-gap: ${({ theme }) => forcePixelValue(theme.space[1])};
`;

const BreadcrumbsItemWrapper = styled.span`
  display: inline-flex;

  &::after {
    content: '/';
    font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xxs)};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: ${({ theme }) => theme.lineHeights[2]};
    color: ${({ theme }) => theme.colors['text/neutral/subtlest']};
    margin-left: ${({ theme }) => forcePixelValue(theme.space[2])};
  }

  &:last-child {
    &::after {
      content: none;
    }
  }
`;

export default Object.assign(Breadcrumbs, { Item: BreadcrumbsItem });
export type { Props as BreadcrumbsProps };
