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
    | 'dim'
    | 'outlined-blue'
    | 'blue';
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
    {LeadingIcon ? <LeadingIcon className={'chip__leading_icon'} /> : null}
    {children}
    {TrailingIcon ? <TrailingIcon className={'chip__trailing_icon'} /> : null}
  </BaseChip>
);

const BaseChip = styled.span<Props & SxProp>(
  ({ theme }) => ({
    position: 'relative',
    width: 'max-content',
    whiteSpace: 'nowrap',
    borderRadius: theme.radii.full,
    outline: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  ({ leadingIcon, trailingIcon, theme }) =>
    variant({
      prop: 'size',
      variants: {
        l: {
          'pl': leadingIcon ? 2 : 3,
          'pr': trailingIcon ? 2 : 3,
          'py': 1,
          'fontSize': theme.fontSizes.s,
          'fontWeight': theme.fontWeights.medium,
          'lineHeight': theme.lineHeights[2],
          'columnGap': 1,
          '& svg': { width: 16, height: 16 },
        },
        m: {
          'pl': leadingIcon ? 2 : 3,
          'pr': trailingIcon ? 2 : 3,
          'py': 1,
          'fontSize': theme.fontSizes.xs,
          'fontWeight': theme.fontWeights.medium,
          'lineHeight': theme.lineHeights[2],
          'columnGap': 0.5,
          '& svg': { width: 16, height: 16 },
        },
        s: {
          'pl': !leadingIcon && trailingIcon ? 3 : 2,
          'pr': leadingIcon && !trailingIcon ? 3 : 2,
          'py': 0.5,
          'fontSize': theme.fontSizes.xxs,
          'fontWeight': theme.fontWeights.medium,
          'lineHeight': theme.lineHeights[2],
          'columnGap': 0.5,
          '& svg': { width: 12, height: 12 },
        },
      },
    }),
  ({ theme }) =>
    variant<BetterSystemStyleObject, NonNullable<Props['variant']>>({
      prop: 'variant',
      variants: {
        'primary': {
          'backgroundColor': theme.colors['bg/primary'],
          'color': theme.colors['text/inverse'],
          '& svg': { color: theme.colors['icon/inverse'] },
        },
        'secondary': {
          'backgroundColor': theme.colors['bg/secondary'],
          'color': theme.colors['text/primary'],
          '& svg': { color: theme.colors['icon/primary'] },
        },
        'outlined-primary': {
          'backgroundColor': theme.colors['bg/neutral/subtler'],
          'color': theme.colors['text/primary'],
          '& svg': { color: theme.colors['icon/primary'] },
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.colors['border/primary'],
            borderRadius: theme.radii.full,
            boxSizing: 'border-box',
          },
        },
        'outlined-neutral': {
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
        },
        'neutral': {
          'backgroundColor': theme.colors['bg/neutral'],
          'color': theme.colors['text/neutral/subtle'],
          '& svg': { color: theme.colors['icon/neutral/bolder'] },
        },
        'red': {
          'backgroundColor': theme.colors['bg/accent/red/subtlest'],
          'color': theme.colors['text/accent/red'],
          '& svg': { color: theme.colors['icon/accent/red'] },
        },
        'red-accent': {
          'backgroundColor': theme.colors['bg/accent/red'],
          'color': theme.colors['text/inverse'],
          '& svg': { color: theme.colors['icon/inverse'] },
        },
        'yellow': {
          'backgroundColor': theme.colors['bg/accent/yellow/subtlest'],
          'color': theme.colors['text/accent/yellow'],
          '& svg': { color: theme.colors['icon/accent/yellow'] },
        },
        'green': {
          'backgroundColor': theme.colors['bg/accent/green/subtlest'],
          'color': theme.colors['text/accent/green'],
          '& svg': { color: theme.colors['icon/accent/green'] },
        },
        'dim': {
          'backgroundColor': theme.colors['dim'],
          'color': theme.colors['text/inverse'],
          '& svg': { color: theme.colors['icon/inverse'] },
        },
        'outlined-blue': {
          'backgroundColor': theme.colors['bg/neutral/subtler'],
          'color': theme.colors['text/accent/blue'],
          '& svg': { color: theme.colors['icon/accent/blue'] },
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.colors['border/accent/blue'],
            borderRadius: theme.radii.full,
            boxSizing: 'border-box',
          },
        },
        'blue': {
          'backgroundColor': theme.colors['bg/accent/blue/subtlest'],
          'color': theme.colors['text/accent/blue'],
          '& svg': { color: theme.colors['icon/accent/blue'] },
        },
      },
    }),
  sx,
);

export default Chip;
export type { Props as ChipProps };
