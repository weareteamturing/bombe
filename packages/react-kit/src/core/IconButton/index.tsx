import { color, radii } from '@teamturing/token-studio';
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
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'plain-bold' | 'plain' | 'plain-subtle' | 'danger';
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
    { icon: Icon, size = 'm', variant = 'primary', disabled = false, loading = false, type = 'button', ...props },
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseIconButton
        ref={ref}
        type={type}
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
  ({ $loading, $disabled }) => ({
    'position': 'relative',
    'borderRadius': radii.full,
    'transition': 'background-color 100ms, color 100ms',
    '& svg': { display: 'block', pointerEvents: 'none' },
    'cursor': $loading ? 'progress' : $disabled ? 'not-allowed' : 'pointer',
    '&:focus-visible': {
      outlineColor: color['border/focused'],
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
  ({ $disabled }) =>
    variant<BetterSystemStyleObject, NonNullable<Props['variant']>>({
      prop: 'variant',
      variants: {
        'primary': {
          'backgroundColor': color['bg/primary'],
          'color': color['icon/inverse'],
          '&:hover:not(:disabled)': {
            backgroundColor: color['bg/primary/hovered'],
          },
          '&:active:not(:disabled)': {
            backgroundColor: color['bg/primary/pressed'],
          },
          ...($disabled
            ? {
                backgroundColor: color['bg/disabled'],
                color: color['icon/disabled'],
              }
            : {}),
        },
        'secondary': {
          'backgroundColor': color['bg/secondary'],
          'color': color['icon/primary'],
          '&:hover:not(:disabled)': {
            backgroundColor: color['bg/secondary/hovered'],
          },
          '&:active:not(:disabled)': {
            backgroundColor: color['bg/secondary/pressed'],
          },
          ...($disabled
            ? {
                backgroundColor: color['bg/disabled'],
                color: color['icon/disabled'],
              }
            : {}),
        },
        'tertiary': {
          'backgroundColor': color['bg/neutral'],
          'color': color['icon/accent/gray'],
          '&:hover:not(:disabled)': {
            backgroundColor: color['bg/neutral/hovered'],
          },
          '&:active:not(:disabled)': {
            backgroundColor: color['bg/neutral/pressed'],
          },
          ...($disabled
            ? {
                backgroundColor: color['bg/disabled'],
                color: color['icon/disabled'],
              }
            : {}),
        },
        'outlined': {
          'backgroundColor': color['bg/neutral/subtler'],
          'color': color['icon/neutral/bolder'],
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: color['border/neutral/bolder'],
            borderRadius: radii.full,
            boxSizing: 'border-box',
          },
          '&:hover:not(:disabled)': {
            backgroundColor: color['bg/neutral/subtler/hovered'],
          },
          '&:active:not(:disabled)': {
            backgroundColor: color['bg/neutral/subtler/pressed'],
          },
          ...($disabled
            ? {
                'backgroundColor': color['bg/disabled'],
                'color': color['icon/disabled'],
                '&:after': {
                  display: 'none',
                },
              }
            : {}),
        },
        'plain-bold': {
          'backgroundColor': color['bg/neutral/subtler'],
          'color': color['icon/neutral/bolder'],
          '&:hover:not(:disabled)': {
            color: color['icon/accent/gray'],
          },
          '&:active:not(:disabled)': {
            color: color['icon/accent/gray'],
          },
          ...($disabled
            ? {
                backgroundColor: color['bg/disabled/subtlest'],
                color: color['icon/disabled'],
              }
            : {}),
        },
        'plain': {
          'backgroundColor': color['bg/neutral/subtler'],
          'color': color['icon/neutral/bold'],
          '&:hover:not(:disabled)': {
            color: color['icon/neutral/bolder'],
          },
          '&:active:not(:disabled)': {
            color: color['icon/neutral/bolder'],
          },
          ...($disabled
            ? {
                backgroundColor: color['bg/disabled/subtlest'],
                color: color['icon/disabled/subtler'],
              }
            : {}),
        },
        'plain-subtle': {
          'backgroundColor': color['bg/neutral/subtler'],
          'color': color['icon/neutral'],
          '&:hover:not(:disabled)': {
            color: color['icon/neutral/bold'],
          },
          '&:active:not(:disabled)': {
            color: color['icon/neutral/bold'],
          },
          ...($disabled
            ? {
                backgroundColor: color['bg/disabled/subtlest'],
                color: color['icon/disabled/subtler'],
              }
            : {}),
        },
        'danger': {
          'backgroundColor': color['bg/danger/bold'],
          'color': color['icon/inverse'],
          '&:hover:not(:disabled)': {
            backgroundColor: color['bg/danger/bold/hovered'],
          },
          '&:active:not(:disabled)': {
            backgroundColor: color['bg/danger/bold/pressed'],
          },
          ...($disabled
            ? {
                backgroundColor: color['bg/disabled'],
                color: color['icon/disabled'],
              }
            : {}),
        },
      },
    }),
);

export default IconButton;
export type { Props as IconButtonProps };
