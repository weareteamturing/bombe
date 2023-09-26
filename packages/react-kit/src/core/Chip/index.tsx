import { color, radii, typography } from '@teamturing/token-studio';
import { ComponentType, PropsWithChildren, SVGProps } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';

type Props = {
  /**
   * 크기를 정의합니다.
   * 반응형 디자인이 적용됩니다.
   */
  size?: ResponsiveValue<'l' | 'm' | 's'>;
  /**
   * 색을 정의합니다.
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'outlined-primary'
    | 'outlined-neutral'
    | 'neutral'
    | 'red'
    | 'red-accent'
    | 'yellow'
    | 'green'
    | 'dim';
  /**
   * 텍스트 앞에 보여질 아이콘을 정의합니다.
   */
  leadingIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * 텍스트 뒤에 보여질 아이콘을 정의합니다.
   */
  trailingIcon?: ComponentType<SVGProps<SVGSVGElement>>;
};

const Chip = ({
  children,
  size = 'm',
  variant = 'primary',
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  sx,
}: PropsWithChildren<Props & SxProp>) => (
  <BaseChip sx={sx} size={size} variant={variant} leadingIcon={LeadingIcon} trailingIcon={TrailingIcon}>
    {LeadingIcon ? <LeadingIcon /> : null}
    {children}
    {TrailingIcon ? <TrailingIcon /> : null}
  </BaseChip>
);

const BaseChip = styled.span<Props & SxProp>(
  {
    position: 'relative',
    width: 'fit-content',
    borderRadius: radii.full,
    outline: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ({ leadingIcon, trailingIcon }) =>
    variant({
      prop: 'size',
      variants: {
        l: {
          'pl': leadingIcon ? 2 : 3,
          'pr': trailingIcon ? 2 : 3,
          'py': 1,
          'fontSize': typography['s'].fontSize,
          'fontWeight': typography['s'].fontWeight,
          'lineHeight': typography['s'].lineHeight,
          'columnGap': 1,
          '& svg': { width: 16, height: 16 },
        },
        m: {
          'pl': leadingIcon ? 2 : 3,
          'pr': trailingIcon ? 2 : 3,
          'py': 1,
          'fontSize': typography['xs'].fontSize,
          'fontWeight': typography['xs'].fontWeight,
          'lineHeight': typography['xs'].lineHeight,
          'columnGap': 0.5,
          '& svg': { width: 16, height: 16 },
        },
        s: {
          'pl': !leadingIcon && trailingIcon ? 3 : 2,
          'pr': leadingIcon && !trailingIcon ? 3 : 2,
          'py': 0.5,
          'fontSize': typography['xxs'].fontSize,
          'fontWeight': typography['xxs'].fontWeight,
          'lineHeight': typography['xxs'].lineHeight,
          'columnGap': 0.5,
          '& svg': { width: 12, height: 12 },
        },
      },
    }),
  variant<BetterSystemStyleObject, NonNullable<Props['variant']>>({
    prop: 'variant',
    variants: {
      'primary': {
        'backgroundColor': color['bg/primary'],
        'color': color['text/inverse'],
        '& svg': { color: color['icon/inverse'] },
      },
      'secondary': {
        'backgroundColor': color['bg/secondary'],
        'color': color['text/primary'],
        '& svg': { color: color['icon/primary'] },
      },
      'outlined-primary': {
        'backgroundColor': color['bg/neutral/subtler'],
        'color': color['text/primary'],
        '& svg': { color: color['icon/primary'] },
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: color['border/primary'],
          borderRadius: radii.full,
          boxSizing: 'border-box',
        },
      },
      'outlined-neutral': {
        'backgroundColor': color['bg/neutral/subtler'],
        'color': color['text/neutral/subtle'],
        '& svg': { color: color['icon/neutral/bolder'] },
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
      },
      'neutral': {
        'backgroundColor': color['bg/neutral'],
        'color': color['text/neutral/subtle'],
        '& svg': { color: color['icon/neutral/bolder'] },
      },
      'red': {
        'backgroundColor': color['bg/accent/red/subtlest'],
        'color': color['text/accent/red'],
        '& svg': { color: color['icon/accent/red'] },
      },
      'red-accent': {
        'backgroundColor': color['bg/accent/red'],
        'color': color['text/inverse'],
        '& svg': { color: color['icon/inverse'] },
      },
      'yellow': {
        'backgroundColor': color['bg/accent/yellow/subtlest'],
        'color': color['text/accent/yellow'],
        '& svg': { color: color['icon/accent/yellow'] },
      },
      'green': {
        'backgroundColor': color['bg/accent/green/subtlest'],
        'color': color['text/accent/green'],
        '& svg': { color: color['icon/accent/green'] },
      },
      'dim': {
        'backgroundColor': color['dim'],
        'color': color['text/inverse'],
        '& svg': { color: color['icon/inverse'] },
      },
    },
  }),
  sx,
);

export default Chip;
export type { Props as ChipProps };
