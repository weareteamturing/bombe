import { CloseIcon } from '@teamturing/icons';
import {
  ComponentType,
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  Ref,
  SVGProps,
  forwardRef,
  MouseEvent as ReactMouseEvent,
  KeyboardEvent as ReactKeyboardEvent,
  useCallback,
} from 'react';
import { isValidElementType } from 'react-is';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { forcePixelValue } from '../../utils/forcePixelValue';
import { isNullable } from '../../utils/isNullable';
import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';
import UnstyledButton from '../_UnstyledButton';

type PillSizeType = 'm';
type PillVariantType = 'outlined' | 'secondary';
type Props = {
  /**
   * 크기를 정의합니다.
   * 반응형 디자인이 적용됩니다.
   */
  size?: ResponsiveValue<PillSizeType>;
  /**
   * 색을 정의합니다.
   * hover, active, focused, disabled, loading 등의 모든 상황에 관여합니다.
   */
  variant?: ResponsiveValue<PillVariantType>;
  /**
   *
   */
  disabled?: boolean;
  /**
   * text 앞에 보여질 시각적 요소를 정의합니다. Icon, Image 등이 될 수 있습니다.
   */
  leadingVisual?: ElementType | ReactNode;
  /**
   * text 뒤에 보여질 시각적 요소를 정의합니다. Icon, Image 등이 될 수 있습니다.
   */
  trailingVisual?: ElementType | ReactNode;
  /**
   * 없앨 수 있을 때 onRemove를 넘기면 삭제 버튼이 생깁니다.
   */
  onRemove?: (event: ReactMouseEvent<HTMLDivElement> | ReactKeyboardEvent<HTMLDivElement>) => void;
  /**
   * onRemove가 undefined가 아닐 때 나오는 삭제 버튼의 아이콘을 정의합니다.
   */
  removeIcon?: ComponentType<SVGProps<SVGSVGElement>>;
} & SxProp &
  Pick<HTMLAttributes<HTMLSpanElement>, 'onClick'>;

const Pill = (
  {
    children,
    size = 'm',
    variant = 'outlined',
    disabled = false,
    leadingVisual: LeadingVisual,
    trailingVisual: TrailingVisual,
    onRemove: propOnRemove,
    removeIcon: RemoveIcon = CloseIcon,
    ...props
  }: PropsWithChildren<Props>,
  ref: Ref<HTMLButtonElement>,
) => {
  const handleRemove = useCallback(
    (event: ReactMouseEvent<HTMLDivElement> | ReactKeyboardEvent<HTMLDivElement>) => {
      propOnRemove?.(event);
    },
    [propOnRemove],
  );

  const handleRemoveClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      handleRemove(event);
    },
    [handleRemove, disabled],
  );

  const handleRemoveKeydown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return;
      if ([' ', 'Enter'].includes(event.key)) {
        handleRemove(event);
      }
    },
    [handleRemove, disabled],
  );

  return (
    <BasePill
      ref={ref}
      size={size}
      variant={variant}
      hasLeadingVisual={!isNullable(LeadingVisual)}
      hasRemoveButton={!isNullable(propOnRemove)}
      disabled={disabled}
      {...props}
    >
      {typeof LeadingVisual !== 'string' && isValidElementType(LeadingVisual) ? (
        <LeadingVisual />
      ) : (
        (LeadingVisual as ReactNode)
      )}
      <span title={children?.toString()}>{children}</span>
      {typeof TrailingVisual !== 'string' && isValidElementType(TrailingVisual) ? (
        <TrailingVisual />
      ) : (
        (TrailingVisual as ReactNode)
      )}
      {propOnRemove ? (
        <div
          onClick={(e) => {
            e.preventDefault();
            handleRemoveClick(e);
            e.stopPropagation();
          }}
          onKeyDown={(e) => {
            if ([' ', 'Enter'].includes(e.key)) {
              e.preventDefault();
              e.stopPropagation();
              handleRemoveKeydown(e);
              return;
            }
          }}
          aria-label={'Remove Pill'}
          role={'button'}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          <RemoveIcon />
        </div>
      ) : null}
    </BasePill>
  );
};

const BasePill = styled(UnstyledButton)<
  Omit<Props, 'leadingVisual' | 'trailingVisual'> & { hasLeadingVisual: boolean; hasRemoveButton: boolean }
>`
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  column-gap: ${({ theme }) => forcePixelValue(theme.space[2])};

  transition: background-color 100ms;

  & span {
    max-width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
    word-break: break-all;
  }

  &:focus-visible {
    outline-color: ${({ theme }) => theme.colors['border/focused']};
    outline-style: solid;
    outline-width: ${forcePixelValue(2)};
    outline-offset: ${({ theme }) => forcePixelValue(theme.space[0.5])};
  }

  & > div {
    display: flex;
    border-radius: ${({ theme }) => forcePixelValue(theme.radii.xxs)};
  }
  & > div:focus-visible {
    outline-color: ${({ theme }) => theme.colors['border/focused']};
    outline-style: solid;
    outline-width: ${forcePixelValue(2)};
    outline-offset: ${({ theme }) => forcePixelValue(theme.space[-0.5])};
  }

  ${({ theme, hasRemoveButton }) =>
    variant<BetterSystemStyleObject, PillSizeType, 'size'>({
      prop: 'size',
      variants: {
        m: {
          'pl': 3,
          'pr': !hasRemoveButton ? 3 : 1,
          'height': forcePixelValue(32),
          'fontSize': theme.fontSizes.xxs,
          'fontWeight': theme.fontWeights.medium,
          'lineHeight': theme.lineHeights[2],
          'columnGap': 1,
          '& svg': { minWidth: 12, height: 12 },
          '& > div': { p: 1 },
        },
      },
    })}
  ${({ theme, disabled }) =>
    variant<BetterSystemStyleObject, PillVariantType, 'variant'>({
      prop: 'variant',
      variants: {
        outlined: {
          'backgroundColor': theme.colors['bg/neutral/subtler'],

          'borderWidth': 1,
          'borderStyle': 'solid',
          'borderColor': theme.colors['border/neutral'],

          'color': 'text/neutral/subtle',

          '& svg': { color: theme.colors['icon/neutral/bolder'] },

          '&:hover': {
            backgroundColor: theme.colors['bg/neutral/subtler/hovered'],
          },

          '&:active': {
            backgroundColor: theme.colors['bg/neutral/subtler/pressed'],
          },

          ...(disabled
            ? {
                'cursor': 'not-allowed',
                'backgroundColor': theme.colors['bg/disabled'],
                'color': theme.colors['text/disabled'],
                '& svg': {
                  color: theme.colors['icon/disabled'],
                },
              }
            : {}),
        },
        secondary: {
          'backgroundColor': theme.colors['bg/secondary'],

          'color': theme.colors['text/primary'],

          '& svg': { color: theme.colors['icon/primary'] },

          '&:hover': {
            backgroundColor: theme.colors['bg/secondary/hovered'],
          },

          '&:active': {
            backgroundColor: theme.colors['bg/secondary/pressed'],
          },

          ...(disabled
            ? {
                'cursor': 'not-allowed',
                'backgroundColor': theme.colors['bg/disabled'],
                'color': theme.colors['text/disabled'],
                '& svg': {
                  color: theme.colors['icon/disabled'],
                },
              }
            : {}),
        },
      },
    })}
    
  ${sx}
`;

export default forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(Pill);
export type { Props as PillProps };
