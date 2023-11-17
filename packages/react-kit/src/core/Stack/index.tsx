import { SpaceKey, space } from '@teamturing/token-studio';
import { forcePixelValue } from '@teamturing/utils';
import { PropsWithChildren, Ref, forwardRef } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { AsProp, BetterSystemStyleObject, SxProp } from '../../utils/styled-system';
import View, { ViewProps } from '../View';

type Props = {
  gapX?: ResponsiveValue<SpaceKey>;
  gapY?: ResponsiveValue<SpaceKey>;
} & Pick<ViewProps, 'alignItems' | 'justifyContent' | 'sx'> &
  AsProp;

const Stack = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (
    { gapX = 0, gapY = 0, children, alignItems = 'center', ...props }: PropsWithChildren<Props>,
    ref: Ref<HTMLDivElement>,
  ) => (
    <BaseStack ref={ref} alignItems={alignItems} gapX={gapX} gapY={gapY} {...props}>
      {children}
    </BaseStack>
  ),
);

const BaseStack = styled(View)<Props>(
  {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  variant({
    prop: 'gapX',
    variants: Object.fromEntries(
      Object.entries(space).map(([key, value]) => {
        const styleValue: BetterSystemStyleObject = {
          '& > *': { px: forcePixelValue(value / 2) },
          'mx': forcePixelValue(-value / 2),
        };
        return [key, styleValue];
      }),
    ),
  }),
  variant({
    prop: 'gapY',
    variants: Object.fromEntries(
      Object.entries(space).map(([key, value]) => {
        const styleValue: BetterSystemStyleObject = {
          '& > *': { mt: forcePixelValue(value) },
          'mt': forcePixelValue(-value),
        };
        return [key, styleValue];
      }),
    ),
  }),
);

const Item = ({ children, ...props }: PropsWithChildren<SxProp>) => <View {...props}>{children}</View>;

export default Object.assign(Stack, { Item });
export type { Props as StackProps };
