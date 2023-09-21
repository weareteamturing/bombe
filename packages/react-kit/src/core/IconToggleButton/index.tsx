import { color, radii } from '@teamturing/token-studio';
import { ComponentType, SVGProps } from 'react';
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

const IconToggleButton = ({
  icon: Icon,
  size = 'm',
  variant = 'primary',
  selected = false,
  disabled = false,
  sx,
  ...props
}: Props) => {
  return (
    <BaseIconToggleButton
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
};

const BaseIconToggleButton = styled(UnstyledButton)<Props & { $disabled?: boolean }>(
  ({ $disabled }) => ({
    'position': 'relative',
    'borderRadius': radii.full,
    'transition': 'background-color 100ms, color 100ms',
    '& svg': { display: 'block' },
    'cursor': $disabled ? 'not-allowed' : 'pointer',
    ':focus-visible': {
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
  ({ selected, $disabled }) =>
    variant<BetterSystemStyleObject>({
      prop: 'variant',
      variants: {
        primary: {
          ...(selected
            ? {
                backgroundColor: color['bg/selected/violet'],
                color: color['icon/inverse'],
              }
            : {
                backgroundColor: color['bg/neutral'],
                color: color['icon/accent/gray'],
              }),
          ...($disabled
            ? {
                backgroundColor: color['bg/disabled'],
                color: color['icon/disabled'],
              }
            : {}),
        },
        plain: {
          backgroundColor: color['bg/neutral/subtler'],
          ...(selected
            ? {
                color: color['icon/selected/violet'],
              }
            : {
                color: color['icon/neutral'],
              }),
          ...($disabled
            ? {
                backgroundColor: color['bg/disabled/subtlest'],
                color: color['icon/disabled/subtler'],
              }
            : {}),
        },
      },
    }),
  sx,
);

export default IconToggleButton;
export type { Props as IconToggleButtonProps };
