import { forcePixelValue } from '@teamturing/utils';
import { AnchorHTMLAttributes, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { AsProp } from '../../utils/styled-system';
import Tooltip from '../Tooltip';

type Props = { text: string; selected?: boolean; truncatedWidth?: number } & AnchorHTMLAttributes<HTMLAnchorElement> &
  AsProp;

const BreadcrumbsItem = ({ text, selected = false, truncatedWidth = 100, ...props }: Props) => {
  const itemRef = useRef<HTMLElement>(null);

  const [isOverflow, setIsOverflow] = useState(false);
  useEffect(() => {
    if (itemRef.current) {
      if (truncatedWidth <= itemRef.current.clientWidth) {
        setIsOverflow(true);
      }
    }
  }, []);

  const baseBreadCrumbsItem = (
    <BaseBreadcrumbsItem ref={itemRef} selected={selected} truncatedWidth={truncatedWidth} {...props}>
      {text}
    </BaseBreadcrumbsItem>
  );

  return isOverflow ? (
    <Tooltip text={text} direction={'bottom-center'} sx={{ display: 'inline-flex' }}>
      {baseBreadCrumbsItem}
    </Tooltip>
  ) : (
    baseBreadCrumbsItem
  );
};

const BaseBreadcrumbsItem = styled.a<Props>`
  display: inline-block;
  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xxs)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors['text/neutral/subtlest']};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  white-space: nowrap;

  max-width: ${({ truncatedWidth }) => (truncatedWidth ? forcePixelValue(truncatedWidth) : '')};

  ${({ selected }) =>
    selected
      ? css`
          color: ${({ theme }) => theme.colors['text/neutral/subtle']};
          pointer-events: none;
        `
      : ''}
`;

export default BreadcrumbsItem;
