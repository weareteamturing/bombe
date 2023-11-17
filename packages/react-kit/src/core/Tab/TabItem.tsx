import { typography } from '@teamturing/token-studio';
import { scrollIntoView } from '@teamturing/utils';
import { ComponentType, PropsWithChildren, SVGProps, useContext, useRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { BetterSystemStyleObject } from '../../utils/styled-system';
import View from '../View';
import UnstyledButton, { UnstyledButtonProps } from '../_UnstyledButton';

import { TabContext, TabContextValue } from '.';

type Props = {
  leadingIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  selected?: boolean;
  onClick?: UnstyledButtonProps['onClick'];
} & Omit<TabContextValue, 'containerRef' | 'gap'>;

const TabItem = ({
  children,
  leadingIcon: LeadingIcon,
  selected = false,
  onClick,
  size: propSize,
  variant: propVariant,
}: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLButtonElement>(null);

  const { size: contextSize, variant: contextVariant, containerRef } = useContext(TabContext);

  const size = propSize ?? contextSize;
  const variant = propVariant ?? contextVariant;

  const handleClick: UnstyledButtonProps['onClick'] = (e) => {
    if (containerRef && containerRef.current && ref.current) {
      scrollIntoView({
        scrollContainerRef: containerRef.current,
        childrenRef: ref.current,
        options: { behavior: 'smooth', offset: 72 },
      });
    }

    onClick?.(e);
  };

  return (
    <BaseTabItem
      role={'tab'}
      ref={ref}
      variant={variant}
      size={size}
      leadingIcon={LeadingIcon}
      selected={selected}
      onClick={handleClick}
    >
      <View
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: 1,
        }}
      >
        {LeadingIcon ? <LeadingIcon /> : null}
        <View>{children}</View>
      </View>
    </BaseTabItem>
  );
};

const BaseTabItem = styled(UnstyledButton)<Props & TabContextValue>(
  ({ theme }) => ({
    'width': 'initial',
    'position': 'relative',
    'transition': 'background-color 100ms, color 100ms',
    'whiteSpace': 'nowrap',
    '& svg': { transition: 'color 100ms' },
    '&:focus-visible': {
      outlineColor: theme.colors['border/focused'],
      outlineStyle: 'solid',
      outlineWidth: 2,
      outlineOffset: 2,
    },
  }),
  () =>
    variant<BetterSystemStyleObject>({
      prop: 'size',
      variants: {
        l: {
          'px': 4,
          'py': 2,
          'fontSize': typography['s'].fontSize,
          'fontWeight': typography['s'].fontWeight,
          'lineHeight': typography['s'].lineHeight,
          '& svg': { width: 20, height: 20 },
        },
        m: {
          'px': 4,
          'py': 2,
          'fontSize': typography['xs'].fontSize,
          'fontWeight': typography['xs'].fontWeight,
          'lineHeight': typography['xs'].lineHeight,
          '& svg': { width: 20, height: 20 },
        },
        s: {
          'px': 3,
          'py': 2,
          'fontSize': typography['xxs'].fontSize,
          'fontWeight': typography['xxs'].fontWeight,
          'lineHeight': typography['xxs'].lineHeight,
          '& svg': { width: 16, height: 16 },
        },
      },
    }),
  ({ theme, selected }) =>
    variant<BetterSystemStyleObject>({
      prop: 'variant',
      variants: {
        plain: {
          borderRadius: theme.radii.full,
          ...(selected
            ? {
                'color': theme.colors['text/neutral'],
                'backgroundColor': theme.colors['bg/selected/subtle'],
                '& svg': {
                  color: theme.colors['icon/selected'],
                },
              }
            : {
                'color': theme.colors['text/neutral/subtler'],
                'backgroundColor': theme.colors['bg/neutral/subtler'],
                '& svg': {
                  color: theme.colors['icon/neutral'],
                },

                '&:hover, &:active': {
                  'color': theme.colors['text/neutral/subtle'],
                  '& svg': {
                    color: theme.colors['icon/neutral/bolder'],
                  },
                },
              }),
        },
        outlined: {
          borderRadius: theme.radii.full,
          ...(selected
            ? {
                'color': theme.colors['text/inverse'],
                'backgroundColor': theme.colors['bg/selected'],
                '& svg': {
                  color: theme.colors['icon/inverse'],
                },
              }
            : {
                'color': theme.colors['text/neutral/subtler'],
                'backgroundColor': theme.colors['bg/neutral/subtler'],
                '& svg': {
                  color: theme.colors['icon/neutral'],
                },
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

                '&:hover': {
                  backgroundColor: theme.colors['bg/neutral/subtler/hovered'],
                },
                '&:active': {
                  backgroundColor: theme.colors['bg/neutral/subtler/pressed'],
                },
              }),
        },
        underline: {
          borderRadius: theme.radii.xxs,
          ...(selected
            ? {
                'color': theme.colors['text/selected'],
                'backgroundColor': theme.colors['bg/neutral/subtler'],
                '& svg': {
                  color: theme.colors['icon/selected'],
                },
                ':after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  borderBottomWidth: 2,
                  borderBottomStyle: 'solid',
                  borderBottomColor: theme.colors['border/selected'],
                  borderRadius: theme.radii.none,
                  boxSizing: 'border-box',
                },
              }
            : {
                'color': theme.colors['text/neutral/subtler'],
                'backgroundColor': theme.colors['bg/neutral/subtler'],
                '& svg': {
                  color: theme.colors['icon/neutral'],
                },

                ':hover, :active': {
                  'color': theme.colors['text/neutral/subtle'],
                  '& svg': {
                    color: theme.colors['icon/neutral/bolder'],
                  },
                },
              }),
        },
      },
    }),
);

export default TabItem;
export type { Props as TabItemProps };
