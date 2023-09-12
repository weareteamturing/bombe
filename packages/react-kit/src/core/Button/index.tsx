import { color, radii, typography } from '@teamturing/token-studio';
import { ComponentType, PropsWithChildren, Ref, SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BetterSystemStyleObject } from '../../utils/styled-system';
import Spinner from '../Spinner';
import View from '../View';
import UnstyledButton, { UnstyledButtonProps } from '../_UnstyledButton';

type Props = {
  /**
   * 크기를 정의합니다.
   * 반응형 디자인이 적용됩니다.
   */
  size?: ResponsiveValue<'l' | 'm' | 's'>;
  /**
   * 색을 정의합니다.
   * hover, active, focused, disabled, loading 등의 모든 상황에 관여합니다.
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'plain' | 'danger';
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
} & UnstyledButtonProps;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
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
          {LeadingIcon ? <LeadingIcon /> : null}
          {children}
          {TrailingIcon ? <TrailingIcon /> : null}
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
            <BaseSpinner size={size} variant={variant} />
          </View>
        ) : null}
      </BaseButton>
    );
  },
);

const BaseButton = styled(UnstyledButton)<Props & { $loading?: boolean; $disabled?: boolean }>(
  ({ $loading, $disabled, fillWidth }) => ({
    'position': 'relative',
    'borderRadius': radii.full,
    'backgroundColor': 'black',
    'transition': 'background-color 100ms, color 100ms',
    'cursor': $loading ? 'progress' : $disabled ? 'not-allowed' : 'pointer',
    'width': fillWidth ? '100%' : 'initial',
    '& svg': { transition: 'color 100ms' },
  }),
  ({ leadingIcon, trailingIcon }) =>
    variant({
      prop: 'size',
      variants: {
        l: {
          'pl': leadingIcon && !trailingIcon ? 3 : 4,
          'pr': !leadingIcon && trailingIcon ? 3 : 4,
          'py': 3,
          'height': 'initial',
          'maxHeight': 'initial',
          'fontSize': typography['s'].fontSize,
          'fontWeight': typography['s'].fontWeight,
          'lineHeight': typography['s'].lineHeight,
          '& svg': { width: 20, height: 20 },
        },
        m: {
          'pl': leadingIcon && !trailingIcon ? 3 : 4,
          'pr': !leadingIcon && trailingIcon ? 3 : 4,
          'py': 2,
          'height': 'initial',
          'maxHeight': 'initial',
          'fontSize': typography['xs'].fontSize,
          'fontWeight': typography['xs'].fontWeight,
          'lineHeight': typography['xs'].lineHeight,
          '& svg': { width: 16, height: 16 },
        },
        s: {
          'pl': leadingIcon && !trailingIcon ? 2 : 3,
          'pr': !leadingIcon && trailingIcon ? 2 : 3,
          'py': 0,
          'height': 32,
          'maxHeight': 32,
          'fontSize': typography['xxs'].fontSize,
          'fontWeight': typography['xxs'].fontWeight,
          'lineHeight': typography['xxs'].lineHeight,
          '& svg': { width: 12, height: 12 },
        },
      },
    }),
  ({ $disabled }) =>
    variant<BetterSystemStyleObject>({
      prop: 'variant',
      variants: {
        primary: {
          'backgroundColor': color['bg/primary'],
          'color': color['text/inverse'],
          '& svg': { color: color['icon/inverse'] },
          ':hover:not(:disabled)': {
            backgroundColor: color['bg/primary/hovered'],
          },
          ':active:not(:disabled)': {
            backgroundColor: color['bg/primary/pressed'],
          },
          ':focus-visible': {
            outlineColor: color['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': color['bg/disabled'],
                'color': color['text/disabled'],
                '& svg': { color: color['icon/disabled'] },
              }
            : {}),
        },
        secondary: {
          'backgroundColor': color['bg/secondary'],
          'color': color['text/primary'],
          '& svg': { color: color['icon/primary'] },
          ':hover:not(:disabled)': {
            backgroundColor: color['bg/secondary/hovered'],
          },
          ':active:not(:disabled)': {
            backgroundColor: color['bg/secondary/pressed'],
          },
          ':focus-visible': {
            outlineColor: color['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': color['bg/disabled'],
                'color': color['text/disabled'],
                '& svg': { color: color['icon/disabled'] },
              }
            : {}),
        },
        tertiary: {
          'backgroundColor': color['bg/neutral'],
          'color': color['text/neutral'],
          '& svg': { color: color['icon/accent/gray'] },
          ':hover:not(:disabled)': {
            backgroundColor: color['bg/neutral/hovered'],
          },
          ':active:not(:disabled)': {
            backgroundColor: color['bg/neutral/pressed'],
          },
          ':focus-visible': {
            outlineColor: color['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': color['bg/disabled'],
                'color': color['text/disabled'],
                '& svg': { color: color['icon/disabled'] },
              }
            : {}),
        },
        outlined: {
          'backgroundColor': color['bg/neutral/subtler'],
          'color': color['text/neutral/subtle'],
          '& svg': { color: color['icon/neutral/bolder'] },
          ':after': {
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
          ':hover:not(:disabled)': {
            backgroundColor: color['bg/neutral/subtler/hovered'],
          },
          ':active:not(:disabled)': {
            backgroundColor: color['bg/neutral/subtler/pressed'],
          },
          ':focus-visible': {
            outlineColor: color['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': color['bg/disabled'],
                'color': color['text/disabled'],
                '& svg': { color: color['icon/disabled'] },
                ':after': {
                  display: 'none',
                },
              }
            : {}),
        },
        plain: {
          'backgroundColor': color['bg/neutral/subtler'],
          'color': color['text/neutral/subtle'],
          '& svg': { color: color['icon/neutral/bolder'] },
          ':hover:not(:disabled)': {
            'color': color['text/neutral'],
            '& svg': {
              color: color['icon/accent/gray'],
            },
          },
          ':active:not(:disabled)': {
            'color': color['text/neutral'],
            '& svg': {
              color: color['icon/accent/gray'],
            },
          },
          ':focus-visible': {
            outlineColor: color['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': color['bg/disabled'],
                'color': color['text/disabled'],
                '& svg': { color: color['icon/disabled'] },
              }
            : {}),
        },
        danger: {
          'backgroundColor': color['bg/danger/bold'],
          'color': color['text/inverse'],
          '& svg': { color: color['icon/inverse'] },
          ':hover:not(:disabled)': {
            backgroundColor: color['bg/danger/bold/hovered'],
          },
          ':active:not(:disabled)': {
            backgroundColor: color['bg/danger/bold/pressed'],
          },
          ':focus-visible': {
            outlineColor: color['border/focused'],
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineOffset: 2,
          },
          ...($disabled
            ? {
                'backgroundColor': color['bg/disabled'],
                'color': color['text/disabled'],
                '& svg': { color: color['icon/disabled'] },
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
  variant({
    prop: 'variant',
    variants: {
      primary: {
        color: color['icon/inverse'],
      },
      secondary: {
        color: color['icon/primary'],
      },
      tertiary: {
        color: color['icon/accent/gray'],
      },
      outlined: {
        color: color['icon/neutral/bolder'],
      },
      plain: {
        color: color['icon/neutral/bolder'],
      },
      danger: {
        color: color['icon/inverse'],
      },
    },
  }),
);

export default Button;
export type { Props as ButtonProps };
