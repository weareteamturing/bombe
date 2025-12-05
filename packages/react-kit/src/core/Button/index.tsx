import { ComponentType, PropsWithChildren, Ref, SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { AsProp, BetterSystemStyleObject } from '../../utils/styled-system';
import Spinner from '../Spinner';
import View from '../View';
import UnstyledButton, { UnstyledButtonProps } from '../_UnstyledButton';

type ButtonSizeType = 'l' | 'm' | 's';
type ButtonVariantType = 'primary' | 'secondary' | 'neutral' | 'outlined' | 'plain' | 'danger';

type Props = {
  /**
   * 크기를 정의합니다.
   * 반응형 디자인이 적용됩니다.
   */
  size?: ResponsiveValue<ButtonSizeType>;
  /**
   * 색을 정의합니다.
   * hover, active, focused, disabled, loading 등의 모든 상황에 관여합니다.
   * 반응형 디자인이 적용됩니다.
   */
  variant?: ResponsiveValue<ButtonVariantType>;
  /**
   * 감싸고 있는 컨테이너의 너비를 채웁니다.
   */
  fillWidth?: boolean;
  /**
   * 비활성화 상태를 정의합니다.
   */
  disabled?: boolean;
  /**
   * 로딩 상태를 정의합니다.
   */
  loading?: boolean;
  /**
   * 텍스트 앞에 보여질 아이콘을 정의합니다.
   */
  leadingIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * 텍스트 뒤에 보여질 아이콘을 정의합니다.
   */
  trailingIcon?: ComponentType<SVGProps<SVGSVGElement>>;
} & UnstyledButtonProps &
  AsProp;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      type = 'button',
      size = 'm',
      variant = 'primary',
      fillWidth = false,
      disabled = false,
      loading = false,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      children,
      ...props
    }: PropsWithChildren<Props>,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        type={type}
        size={size}
        disabled={disabled || loading}
        $disabled={disabled}
        $loading={loading}
        variant={variant}
        leadingIcon={LeadingIcon}
        trailingIcon={TrailingIcon}
        fillWidth={fillWidth}
        {...props}
      >
        <View
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: 1,
            visibility: !loading ? 'initial' : 'hidden',
          }}
        >
          {LeadingIcon ? <LeadingIcon className={'button__leading_icon'} /> : null}
          {children}
          {TrailingIcon ? <TrailingIcon className={'button__trailing_icon'} /> : null}
        </View>
        {loading ? (
          <View
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BaseSpinner className={'button__spinner'} size={size} variant={variant} />
          </View>
        ) : null}
      </BaseButton>
    );
  },
);

const BaseButton = styled(UnstyledButton)<Props & { $loading?: boolean; $disabled?: boolean }>(
  ({ $loading, $disabled, fillWidth, theme }) => ({
    'position': 'relative',
    'borderRadius': theme.radii.full,
    'backgroundColor': 'black',
    'transition': 'background-color 100ms, color 100ms',
    'cursor': $loading ? 'progress' : $disabled ? 'not-allowed' : 'pointer',
    'width': fillWidth ? '100%' : 'initial',
    '& svg': { transition: 'color 100ms' },
  }),
  ({ leadingIcon, trailingIcon, theme }) =>
    variant<BetterSystemStyleObject, ButtonSizeType, 'size'>({
      prop: 'size',
      variants: {
        l: {
          'pl': leadingIcon && !trailingIcon ? 3 : 4,
          'pr': !leadingIcon && trailingIcon ? 3 : 4,
          'py': 3,
          'height': 'initial',
          'maxHeight': 'initial',
          'fontSize': theme.fontSizes.s,
          'fontWeight': theme.fontWeights.medium,
          'lineHeight': theme.lineHeights[2],
          '& svg': { width: 20, height: 20 },
        },
        m: {
          'pl': leadingIcon && !trailingIcon ? 3 : 4,
          'pr': !leadingIcon && trailingIcon ? 3 : 4,
          'py': 2,
          'height': 'initial',
          'maxHeight': 'initial',
          'fontSize': theme.fontSizes.xs,
          'fontWeight': theme.fontWeights.medium,
          'lineHeight': theme.lineHeights[2],
          '& svg': { width: 16, height: 16 },
        },
        s: {
          'pl': leadingIcon && !trailingIcon ? 2 : 3,
          'pr': !leadingIcon && trailingIcon ? 2 : 3,
          'py': 0,
          'height': 32,
          'maxHeight': 32,
          'fontSize': theme.fontSizes.xxs,
          'fontWeight': theme.fontWeights.medium,
          'lineHeight': theme.lineHeights[2],
          '& svg': { width: 12, height: 12 },
        },
      },
    }),
  ({ $disabled, theme }) =>
    variant<BetterSystemStyleObject, ButtonVariantType, 'variant'>({
      prop: 'variant',
      variants: {
        primary: {
          'backgroundColor': theme.colors['bg/primary'],
          'color': theme.colors['text/inverse'],
          '& svg': { color: theme.colors['icon/inverse'] },
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              backgroundColor: theme.colors['bg/primary/hovered'],
            },
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme.colors['bg/primary/pressed'],
          },
          '&:focus-visible': {
            outlineColor: theme.colors['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': theme.colors['bg/disabled'],
                'color': theme.colors['text/disabled'],
                '& svg': { color: theme.colors['icon/disabled'] },
              }
            : {}),
        },
        secondary: {
          'backgroundColor': theme.colors['bg/secondary'],
          'color': theme.colors['text/primary'],
          '& svg': { color: theme.colors['icon/primary'] },
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              backgroundColor: theme.colors['bg/secondary/hovered'],
            },
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme.colors['bg/secondary/pressed'],
          },
          '&:focus-visible': {
            outlineColor: theme.colors['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': theme.colors['bg/disabled'],
                'color': theme.colors['text/disabled'],
                '& svg': { color: theme.colors['icon/disabled'] },
              }
            : {}),
        },
        neutral: {
          'backgroundColor': theme.colors['bg/neutral'],
          'color': theme.colors['text/neutral'],
          '& svg': { color: theme.colors['icon/accent/gray'] },
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              backgroundColor: theme.colors['bg/neutral/hovered'],
            },
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme.colors['bg/neutral/pressed'],
          },
          '&:focus-visible': {
            outlineColor: theme.colors['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': theme.colors['bg/disabled'],
                'color': theme.colors['text/disabled'],
                '& svg': { color: theme.colors['icon/disabled'] },
              }
            : {}),
        },
        outlined: {
          'backgroundColor': theme.colors['bg/neutral/subtler'],
          'color': theme.colors['text/neutral/subtle'],
          '& svg': { color: theme.colors['icon/neutral/bolder'] },
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
          '&:focus-visible': {
            outlineColor: theme.colors['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': theme.colors['bg/disabled'],
                'color': theme.colors['text/disabled'],
                '& svg': { color: theme.colors['icon/disabled'] },
                '&:after': {
                  display: 'none',
                },
              }
            : {}),
        },
        plain: {
          'backgroundColor': theme.colors['bg/neutral/subtler'],
          'color': theme.colors['text/neutral/subtle'],
          '& svg': { color: theme.colors['icon/neutral/bolder'] },
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              'color': theme.colors['text/neutral'],
              '& svg': {
                color: theme.colors['icon/accent/gray'],
              },
            },
          },
          '&:active:not(:disabled)': {
            'color': theme.colors['text/neutral'],
            '& svg': {
              color: theme.colors['icon/accent/gray'],
            },
          },
          '&:focus-visible': {
            outlineColor: theme.colors['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': theme.colors['bg/disabled/subtlest'],
                'color': theme.colors['text/disabled'],
                '& svg': { color: theme.colors['icon/disabled'] },
              }
            : {}),
        },
        danger: {
          'backgroundColor': theme.colors['bg/danger/bold'],
          'color': theme.colors['text/inverse'],
          '& svg': { color: theme.colors['icon/inverse'] },
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover:not(:disabled)': {
              backgroundColor: theme.colors['bg/danger/bold/hovered'],
            },
          },
          '&:active:not(:disabled)': {
            backgroundColor: theme.colors['bg/danger/bold/pressed'],
          },
          '&:focus-visible': {
            outlineColor: theme.colors['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': theme.colors['bg/disabled'],
                'color': theme.colors['text/disabled'],
                '& svg': { color: theme.colors['icon/disabled'] },
              }
            : {}),
        },
      },
    }),
);

const BaseSpinner = styled(Spinner)<Pick<Props, 'size' | 'variant'>>(
  variant({
    prop: 'size',
    variants: {
      l: {
        width: 20,
        height: 20,
      },
      m: {
        width: 16,
        height: 16,
      },
      s: {
        width: 16,
        height: 16,
      },
    },
  }),
  ({ theme }) =>
    variant({
      prop: 'variant',
      variants: {
        primary: {
          color: theme.colors['icon/inverse'],
        },
        secondary: {
          color: theme.colors['icon/primary'],
        },
        neutral: {
          color: theme.colors['icon/accent/gray'],
        },
        outlined: {
          color: theme.colors['icon/neutral/bolder'],
        },
        plain: {
          color: theme.colors['icon/neutral/bolder'],
        },
        danger: {
          color: theme.colors['icon/inverse'],
        },
      },
    }),
);

export default Button;
export type { Props as ButtonProps };
