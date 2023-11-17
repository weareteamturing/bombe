import { ChevronLeftIcon, ChevronRightIcon } from '@teamturing/icons';
import { forcePixelValue, noop } from '@teamturing/utils';
import { Fragment, ReactNode, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';
import UnstyledButton, { UnstyledButtonProps } from '../_UnstyledButton';

type PaginationTypeProps = {
  type?: ResponsiveValue<'default' | 'simple'>;
};
type Props<T extends { label: string }> = {
  pages: readonly T[];
  currentPageIndex: number;
  aroundPageCount?: number;
  edgePageCount?: number;

  renderPage?: (page: T, i: number) => ReactNode;
  renderPageWrapper?: (children: ReactNode, page: T, i: number) => ReactNode;
  renderPreviousPageDirection?: ({
    previousPageDirectionProps,
  }: {
    previousPageDirectionProps: PaginationPageDirectionProps;
  }) => ReactNode;
  renderNextPageDirection?: ({
    nextPageDirectionProps,
  }: {
    nextPageDirectionProps: PaginationPageDirectionProps;
  }) => ReactNode;
  renderTruncationIndicator?: () => ReactNode;

  onPageClick?: (page: T, i: number) => void;
  onPreviousClick?: (currentPageIndex: number) => void;
  onNextClick?: (currentPageIndex: number) => void;
} & PaginationTypeProps &
  SxProp;

const Pagination = <T extends { label: string }>({
  pages: propPages,
  currentPageIndex,
  aroundPageCount = 1,
  edgePageCount = 1,
  type = 'default',
  sx,

  onPageClick = noop,
  onPreviousClick = noop,
  onNextClick = noop,

  renderPage = (page, i) => (
    <PaginationPage onClick={() => onPageClick(page, i)} selected={i === currentPageIndex}>
      {page.label}
    </PaginationPage>
  ),
  renderPageWrapper = (children, { label }, i) => <Fragment key={[label, i].join('-')}>{children}</Fragment>,
  renderPreviousPageDirection = ({ previousPageDirectionProps }) => (
    <PaginationPageDirection {...previousPageDirectionProps}>
      <ChevronLeftIcon />
      이전
    </PaginationPageDirection>
  ),
  renderNextPageDirection = ({ nextPageDirectionProps }) => (
    <PaginationPageDirection {...nextPageDirectionProps}>
      다음
      <ChevronRightIcon />
    </PaginationPageDirection>
  ),
  renderTruncationIndicator = () => <PaginationTruncationIndicator>&hellip;</PaginationTruncationIndicator>,
}: Props<T>) => {
  const CURRENT_PAGE_COUNT = 1;
  const totalVisiblePageCount = CURRENT_PAGE_COUNT + 2 * aroundPageCount + 2 * edgePageCount;

  const pages = propPages.map((page, i) => ({ page, originalIndex: i }));
  const totalPageCount = propPages.length;
  const isCurrentPageCloseToBeginEdge = currentPageIndex < edgePageCount + aroundPageCount + CURRENT_PAGE_COUNT;
  const isCurrentPageCloseToEndEdge =
    totalPageCount - (edgePageCount + aroundPageCount + CURRENT_PAGE_COUNT) < currentPageIndex + 1;

  const isTruncationNeeded = totalVisiblePageCount < totalPageCount;

  const renderPaginationPage = useCallback(
    (page: T, i: number) => renderPageWrapper(renderPage(page, i), page, i),
    [currentPageIndex],
  );

  return (
    <BasePagination type={type} sx={sx}>
      {renderPreviousPageDirection({
        previousPageDirectionProps: {
          onClick: () => onPreviousClick(currentPageIndex),
          disabled: currentPageIndex === 0,
        },
      })}
      {!isTruncationNeeded
        ? pages.map(({ page, originalIndex }) => renderPaginationPage(page, originalIndex))
        : isTruncationNeeded && isCurrentPageCloseToBeginEdge
        ? [
            pages
              .slice(0, edgePageCount + aroundPageCount * 2 + CURRENT_PAGE_COUNT)
              .map(({ page, originalIndex }) => renderPaginationPage(page, originalIndex)),
            <Fragment key={'end_truncation_indicator'}>{renderTruncationIndicator()}</Fragment>,
            pages.slice(edgePageCount * -1).map(({ page, originalIndex }) => renderPaginationPage(page, originalIndex)),
          ]
        : isTruncationNeeded && isCurrentPageCloseToEndEdge
        ? [
            pages.slice(0, edgePageCount).map(({ page, originalIndex }) => renderPaginationPage(page, originalIndex)),
            <Fragment key={'begin_truncation_indicator'}>{renderTruncationIndicator()}</Fragment>,
            pages
              .slice(totalPageCount - (edgePageCount + aroundPageCount * 2 + CURRENT_PAGE_COUNT))
              .map(({ page, originalIndex }) => renderPaginationPage(page, originalIndex)),
          ]
        : [
            pages.slice(0, edgePageCount).map(({ page, originalIndex }) => renderPaginationPage(page, originalIndex)),
            <Fragment key={'begin_truncation_indicator'}>{renderTruncationIndicator()}</Fragment>,
            pages
              .slice(currentPageIndex - aroundPageCount, currentPageIndex + aroundPageCount + CURRENT_PAGE_COUNT)
              .map(({ page, originalIndex }) => renderPaginationPage(page, originalIndex)),
            <Fragment key={'end_truncation_indicator'}>{renderTruncationIndicator()}</Fragment>,
            pages.slice(edgePageCount * -1).map(({ page, originalIndex }) => renderPaginationPage(page, originalIndex)),
          ]}
      {renderNextPageDirection({
        nextPageDirectionProps: {
          onClick: () => onNextClick(currentPageIndex),
          disabled: currentPageIndex === totalPageCount - 1,
        },
      })}
    </BasePagination>
  );
};

const BasePagination = styled.nav<PaginationTypeProps & SxProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  column-gap: ${({ theme }) => forcePixelValue(theme.space[1])};

  ${variant<BetterSystemStyleObject>({
    prop: 'type',
    variants: {
      default: {
        '& > *:not(:first-child):not(:last-child)': {
          display: 'inline-block !important',
        },
      },
      simple: {
        '& > *:not(:first-child):not(:last-child)': {
          display: 'none !important',
        },
      },
    },
  })}
  ${sx}
`;

type PaginationPageProps = { selected?: boolean };
const PaginationPage = styled(UnstyledButton)<PaginationPageProps>`
  transition: background-color 100ms;

  height: ${forcePixelValue(32)};
  min-width: ${forcePixelValue(32)};

  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  padding: ${({ theme }) => `${forcePixelValue(theme.space[0])} ${forcePixelValue(theme.space[3])}`};
  background-color: ${({ theme }) => theme.colors['bg/neutral/subtler']};

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors['text/neutral']};

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${({ theme }) => theme.colors['bg/neutral/bolder']};
          color: ${({ theme }) => theme.colors['text/inverse']};
        `
      : css`
          &:hover {
            background-color: ${({ theme }) => theme.colors['bg/neutral/subtler/hovered']};
          }
        `}
`;

type PaginationPageDirectionProps = Pick<UnstyledButtonProps, 'onClick' | 'disabled'>;
const PaginationPageDirection = styled(UnstyledButton)`
  transition: background-color 100ms;

  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: ${({ theme }) => forcePixelValue(theme.space[1])};

  height: ${forcePixelValue(32)};
  min-width: ${forcePixelValue(32)};

  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  padding: ${({ theme }) => `${forcePixelValue(theme.space[0])} ${forcePixelValue(theme.space[3])}`};
  background-color: ${({ theme }) => theme.colors['bg/neutral/subtler']};

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors['text/neutral']};

  & svg {
    color: ${({ theme }) => theme.colors['icon/accent/gray']};
    width: ${forcePixelValue(16)};
    height: ${forcePixelValue(16)};
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors['bg/neutral/subtler/hovered']};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors['text/disabled']};
    & > svg {
      color: ${({ theme }) => theme.colors['icon/disabled']};
    }
  }
`;
const PaginationTruncationIndicator = styled.div<SxProp>`
  min-width: ${forcePixelValue(32)};

  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  padding: ${({ theme }) => `${forcePixelValue(theme.space[0])} ${forcePixelValue(theme.space[3])}`};
  background-color: ${({ theme }) => theme.colors['bg/neutral/subtler']};

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors['text/neutral']};

  pointer-events: none;

  ${sx}
`;

export default Object.assign(Pagination, {
  Page: PaginationPage,
  PageDirection: PaginationPageDirection,
  TruncationIndicator: PaginationTruncationIndicator,
});
export type { Props as PaginationProps, PaginationPageProps, PaginationPageDirectionProps };
