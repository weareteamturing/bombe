import { ComponentType, Ref, SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';
import UnstyledButton, { UnstyledButtonProps } from '../_UnstyledButton';

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * 크기를 정의합니다.
   * 반응형 디자인이 적용됩니다.
   */
  size?: ResponsiveValue<'l' | 'm' | 's'>;
  /**
   * 색을 정의합니다.
   */
  variant?: 'primary' | 'plain';
  /**
   * 활성화 상태를 정의합니다.
   * `true`일 경우, 활성화된 상태를 그립니다.
   */
  selected?: boolean;
  /**
   * 비활성화 상태를 정의합니다.
   */
  disabled?: boolean;
} & UnstyledButtonProps &
  SxProp;

const IconToggleButton = (
  { icon: Icon, size = 'm', variant = 'primary', selected = false, disabled = false, sx, ...props }: Props,
  ref: Ref<HTMLButtonElement>,
) => (
  <BaseIconToggleButton
    ref={ref}
    icon={Icon}
    size={size}
    variant={variant}
    selected={selected}
    type={'button'}
    disabled={disabled}
    $disabled={disabled}
    sx={sx}
    {...props}
  >
    <Icon />
  </BaseIconToggleButton>
);

const BaseIconToggleButton = styled(UnstyledButton)<Props & { $disabled?: boolean }>(
  ({ $disabled, theme }) => ({
    'position': 'relative',
    'borderRadius': theme.radii.full,
    'transition': 'background-color 100ms, color 100ms',
    '& svg': { display: 'block' },
    'cursor': $disabled ? 'not-allowed' : 'pointer',
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
  ({ selected, $disabled, theme }) =>
    variant<BetterSystemStyleObject>({
      prop: 'variant',
      variants: {
        primary: {
          ...(selected
            ? {
                backgroundColor: theme.colors['bg/selected/violet'],
                color: theme.colors['icon/inverse'],
              }
            : {
                backgroundColor: theme.colors['bg/neutral'],
                color: theme.colors['icon/accent/gray'],
              }),
          ...($disabled
            ? {
                backgroundColor: theme.colors['bg/disabled'],
                color: theme.colors['icon/disabled'],
              }
            : {}),
        },
        plain: {
          backgroundColor: theme.colors['bg/neutral/subtler'],
          ...(selected
            ? {
                color: theme.colors['icon/selected/violet'],
              }
            : {
                color: theme.colors['icon/neutral'],
              }),
          ...($disabled
            ? {
                backgroundColor: theme.colors['bg/disabled/subtlest'],
                color: theme.colors['icon/disabled/subtler'],
              }
            : {}),
        },
      },
    }),
  sx,
);

export default forwardRef(IconToggleButton);
export type { Props as IconToggleButtonProps };
