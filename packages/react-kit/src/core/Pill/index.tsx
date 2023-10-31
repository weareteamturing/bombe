import { CloseIcon } from '@teamturing/icons';
import { ComponentType, ElementType, ReactNode, Ref, SVGProps, forwardRef } from 'react';
import { isValidElementType } from 'react-is';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { forcePixelValue } from '../../utils/forcePixelValue';
import { isNullable } from '../../utils/isNullable';
import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';
import UnstyledButton from '../_UnstyledButton';

type Props = {
  text?: string;
  /**
   * 크기를 정의합니다.
   * 반응형 디자인이 적용됩니다.
   */
  size?: ResponsiveValue<'l' | 'm' | 's'>;
  /**
   * 색을 정의합니다.
   * hover, active, focused, disabled, loading 등의 모든 상황에 관여합니다.
   */
  variant?: ResponsiveValue<'secondary'>;
  /**
   * text 앞에 보여질 시각적 요소를 정의합니다. Icon, Image 등이 될 수 있습니다.
   */
  leadingVisual?: ElementType | ReactNode;
  /**
   * 없앨 수 있을 때 onRemove를 넘기면 삭제 버튼이 trailingVisual 자리에 생깁니다.
   */
  onRemove?: () => void;
  /**
   * onRemove가 undefined가 아닐 때 나오는 삭제 버튼의 아이콘을 정의합니다.
   */
  removeIcon?: ComponentType<SVGProps<SVGSVGElement>>;
} & SxProp;

const Pill = (
  {
    text,
    size = 'm',
    variant = 'secondary',
    leadingVisual: LeadingVisual,
    onRemove,
    removeIcon: RemoveIcon = CloseIcon,
    ...props
  }: Props,
  ref: Ref<HTMLSpanElement>,
) => (
  <BasePill
    ref={ref}
    size={size}
    variant={variant}
    hasLeadingVisual={!isNullable(LeadingVisual)}
    hasRemoveButton={!isNullable(onRemove)}
    {...props}
  >
    {typeof LeadingVisual !== 'string' && isValidElementType(LeadingVisual) ? (
      <LeadingVisual />
    ) : (
      (LeadingVisual as ReactNode)
    )}
    <span title={text}>{text}</span>
    {onRemove ? (
      <UnstyledButton type={'button'} onClick={onRemove} aria-label={'Remove Pill'}>
        <RemoveIcon />
      </UnstyledButton>
    ) : null}
  </BasePill>
);

const BasePill = styled.span<Omit<Props, 'leadingVisual'> & { hasLeadingVisual: boolean; hasRemoveButton: boolean }>`
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xxs)};

  & span {
    max-width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
    word-break: break-all;
  }
  & > button {
    display: flex;
    transition: background-color 100ms;
    border-radius: ${({ theme }) => forcePixelValue(theme.radii.full)};
  }

  ${({ theme, hasLeadingVisual, hasRemoveButton }) =>
    variant<BetterSystemStyleObject>({
      prop: 'size',
      variants: {
        l: {
          'pl': hasLeadingVisual || hasRemoveButton ? 2 : 3,
          'pr': hasRemoveButton ? 0.5 : hasLeadingVisual ? 2 : 3,
          'py': 1,
          'fontSize': theme.fontSizes.s,
          'fontWeight': theme.fontWeights.medium,
          'lineHeight': theme.lineHeights[2],
          'columnGap': 1,
          '& svg': { minWidth: 16, height: 16, color: theme.colors['icon/primary'] },
          '& button': { p: 1 },
        },
        m: {
          'pl': hasLeadingVisual || hasRemoveButton ? 2 : 3,
          'pr': hasRemoveButton ? 1 : hasLeadingVisual ? 2 : 3,
          'py': 1,
          'fontSize': theme.fontSizes.xs,
          'fontWeight': theme.fontWeights.medium,
          'lineHeight': theme.lineHeights[2],
          'columnGap': 0.5,
          '& svg': { minWidth: 16, height: 16, color: theme.colors['icon/primary'] },
          '& button': { p: 0.5 },
        },
        s: {
          'pl': 2,
          'pr': hasRemoveButton ? 1 : 2,
          'py': 0.5,
          'fontSize': theme.fontSizes.xxs,
          'fontWeight': theme.fontWeights.medium,
          'lineHeight': theme.lineHeights[2],
          'columnGap': 0.5,
          '& svg': { minWidth: 12, height: 12, color: theme.colors['icon/primary'] },
          '& button': { p: 0.5 },
        },
      },
    })}
  ${({ theme }) =>
    variant<BetterSystemStyleObject>({
      prop: 'variant',
      variants: {
        secondary: {
          'color': theme.colors['text/primary'],
          'backgroundColor': theme.colors['bg/secondary'],
          '& button': {
            '&:hover': { backgroundColor: theme.colors['bg/secondary/hovered'] },
          },
        },
      },
    })}
  ${sx}
`;

export default forwardRef<HTMLSpanElement, Props>(Pill);
export type { Props as PillProps };
