import { ComponentType, Ref, SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BetterSystemStyleObject } from '../../utils/styled-system';
import Spinner from '../Spinner';
import UnstyledButton, { UnstyledButtonProps } from '../_UnstyledButton';

type Props = {
  /**
   * IconButton에 사용할 아이콘을 정의합니다.
   */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * 크기를 정의합니다.
   * 반응형 디자인이 적용됩니다.
   */
  size?: ResponsiveValue<'l' | 'm' | 's'>;
  /**
   * 색을 정의합니다.
   * hover, active, focused, disabled, loading 등의 모든 상황에 관여합니다.
   */
  variant?: 'primary' | 'secondary' | 'neutral' | 'outlined' | 'plain-bold' | 'plain' | 'plain-subtle' | 'danger';
  /**
   * 비활성화 상태를 정의합니다.
   */
  disabled?: boolean;
  /**
   * 로딩 상태를 정의합니다.
   */
  loading?: boolean;
} & Pick<UnstyledButtonProps, 'type' | 'onClick'>;

const IconButton = forwardRef<HTMLButtonElement, Props>(
  (
    { icon: Icon, size = 'm', variant = 'primary', disabled = false, loading = false, ...props },
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseIconButton
        ref={ref}
        icon={Icon}
        size={size}
        variant={variant}
        disabled={disabled || loading}
        $disabled={disabled}
        $loading={loading}
        {...props}
      >
        {!loading ? <Icon /> : <Spinner color={'currentColor'} />}
      </BaseIconButton>
    );
  },
);

const BaseIconButton = styled(UnstyledButton)<Props & { $loading?: boolean; $disabled?: boolean }>(
  ({ $loading, $disabled, theme }) => ({
    'width': 'fit-content',
    'position': 'relative',
    'borderRadius': theme.radii.full,
    'transition': 'background-color 100ms, color 100ms',
    '& svg': { display: 'block', pointerEvents: 'none' },
    'cursor': $loading ? 'progress' : $disabled ? 'not-allowed' : 'pointer',
    '&:focus-visible': {
      outlineColor: theme.colors['border/focused'],
      outlineStyle: 'solid',
      outlineWidth: 2,
      outlineOffset: 2,
    },
  }),
  variant<BetterSystemStyleObject>({
    prop: 'size',
    variants: {
      l: {
        'p': 3,
        '& svg': { width: 24, height: 24 },
      },
      m: {
        'p': 2,
        '& svg': { width: 24, height: 24 },
      },
      s: {
        'p': 2,
        '& svg': { width: 16, height: 16 },
      },
    },
  }),
  ({ $disabled, theme }) =>
    variant<BetterSystemStyleObject, NonNullable<Props['variant']>>({
      prop: 'variant',
      variants: {
        'primary': {
          'backgroundColor': theme.colors['bg/primary'],
          'color': theme.colors['icon/inverse'],
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              backgroundColor: theme.colors['bg/primary/hovered'],
            },
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme.colors['bg/primary/pressed'],
          },
          ...($disabled
            ? {
                backgroundColor: theme.colors['bg/disabled'],
                color: theme.colors['icon/disabled'],
              }
            : {}),
        },
        'secondary': {
          'backgroundColor': theme.colors['bg/secondary'],
          'color': theme.colors['icon/primary'],
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              backgroundColor: theme.colors['bg/secondary/hovered'],
            },
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme.colors['bg/secondary/pressed'],
          },
          ...($disabled
            ? {
                backgroundColor: theme.colors['bg/disabled'],
                color: theme.colors['icon/disabled'],
              }
            : {}),
        },
        'neutral': {
          'backgroundColor': theme.colors['bg/neutral'],
          'color': theme.colors['icon/accent/gray'],
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              backgroundColor: theme.colors['bg/neutral/hovered'],
            },
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme.colors['bg/neutral/pressed'],
          },
          ...($disabled
            ? {
                backgroundColor: theme.colors['bg/disabled'],
                color: theme.colors['icon/disabled'],
              }
            : {}),
        },
        'outlined': {
          'backgroundColor': theme.colors['bg/neutral/subtler'],
          'color': theme.colors['icon/neutral/bolder'],
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.colors['border/neutral/bolder'],
            borderRadius: theme.radii.full,
            boxSizing: 'border-box',
          },
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              backgroundColor: theme.colors['bg/neutral/subtler/hovered'],
            },
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme.colors['bg/neutral/subtler/pressed'],
          },
          ...($disabled
            ? {
                'backgroundColor': theme.colors['bg/disabled'],
                'color': theme.colors['icon/disabled'],
                '&:after': {
                  display: 'none',
                },
              }
            : {}),
        },
        'plain-bold': {
          'backgroundColor': theme.colors['bg/neutral/subtler'],
          'color': theme.colors['icon/neutral/bolder'],
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              color: theme.colors['icon/accent/gray'],
            },
          },
          '&:active:not(:disabled)': {
            color: theme.colors['icon/accent/gray'],
          },
          ...($disabled
            ? {
                backgroundColor: theme.colors['bg/disabled/subtlest'],
                color: theme.colors['icon/disabled'],
              }
            : {}),
        },
        'plain': {
          'backgroundColor': theme.colors['bg/neutral/subtler'],
          'color': theme.colors['icon/neutral/bold'],
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              color: theme.colors['icon/neutral/bolder'],
            },
          },
          '&:active:not(:disabled)': {
            color: theme.colors['icon/neutral/bolder'],
          },
          ...($disabled
            ? {
                backgroundColor: theme.colors['bg/disabled/subtlest'],
                color: theme.colors['icon/disabled/subtler'],
              }
            : {}),
        },
        'plain-subtle': {
          'backgroundColor': theme.colors['bg/neutral/subtler'],
          'color': theme.colors['icon/neutral'],
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              color: theme.colors['icon/neutral/bold'],
            },
          },
          '&:active:not(:disabled)': {
            color: theme.colors['icon/neutral/bold'],
          },
          ...($disabled
            ? {
                backgroundColor: theme.colors['bg/disabled/subtlest'],
                color: theme.colors['icon/disabled/subtler'],
              }
            : {}),
        },
        'danger': {
          'backgroundColor': theme.colors['bg/danger/bold'],
          'color': theme.colors['icon/inverse'],
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              backgroundColor: theme.colors['bg/danger/bold/hovered'],
            },
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme.colors['bg/danger/bold/pressed'],
          },
          ...($disabled
            ? {
                backgroundColor: theme.colors['bg/disabled'],
                color: theme.colors['icon/disabled'],
              }
            : {}),
        },
      },
    }),
);

export default IconButton;
export type { Props as IconButtonProps };
