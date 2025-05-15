import { SpaceKey } from '@teamturing/token-studio';
import { forcePixelValue, isArray, isNullable } from '@teamturing/utils';
import { HTMLAttributes, PropsWithChildren, Ref, forwardRef } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { AsProp, BetterSystemStyleObject } from '../../utils/styled-system';
import View, { ViewProps } from '../View';

type Props = {
  gapX?: ResponsiveValue<SpaceKey>;
  gapY?: ResponsiveValue<SpaceKey>;
  wrap?: ResponsiveValue<boolean>;
} & Pick<ViewProps, 'alignItems' | 'justifyContent' | 'sx'> &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'> &
  AsProp;

const Grid = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (
    { children, wrap: propWrap = true, gapX = 0, gapY = 0, as, ...props }: PropsWithChildren<Props>,
    ref: Ref<HTMLDivElement>,
  ) => {
    const wrap = Array.isArray(propWrap)
      ? propWrap.map((value) => (value === true ? 'true' : 'false'))
      : propWrap === true
      ? 'true'
      : 'false';

    return (
      <BaseGrid ref={ref} gapX={gapX} gapY={gapY} wrap={wrap} as={as} {...props}>
        {children}
      </BaseGrid>
    );
  },
);

const BaseGrid = styled(View)<Omit<Props, 'wrap'> & { wrap?: ResponsiveValue<'true' | 'false'> }>(
  {
    display: 'flex',
    flexDirection: 'row',
  },
  ({ theme }) =>
    variant({
      prop: 'gapX',
      variants: Object.fromEntries(
        Object.entries<number>(theme.space).map(([key, value]) => {
          const styleValue: BetterSystemStyleObject = {
            '& > *': { px: forcePixelValue(value / 2) },
            'mx': forcePixelValue(-value / 2),
          };
          return [key, styleValue];
        }),
      ),
    }),
  ({ theme }) =>
    variant({
      prop: 'gapY',
      variants: Object.fromEntries(
        Object.entries<number>(theme.space).map(([key, value]) => {
          const styleValue: BetterSystemStyleObject = {
            '& > *': { mt: forcePixelValue(value) },
            'mt': forcePixelValue(-value),
          };
          return [key, styleValue];
        }),
      ),
    }),
  variant<BetterSystemStyleObject>({
    prop: 'wrap',
    variants: {
      true: {
        flexWrap: 'wrap',
      },
      false: {
        flexWrap: 'nowrap',
      },
    },
  }),
);

type UnitSizeType = 'min' | 'max' | number;

type GridUnitProps = { size: ResponsiveValue<UnitSizeType> } & Pick<ViewProps, 'order' | 'sx'> &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'> &
  AsProp;

const mapValueToResponsiveValueProps = <T,>(
  value: ResponsiveValue<T>,
  propsAccessor: (value: T) => Record<string, any>,
) => {
  if (isNullable(value) || (typeof value === 'object' && !isArray(value))) return null;
  if (!isArray(value)) return propsAccessor(value);
  return value.reduce<Record<string, any>>((acc, cur) => {
    const curProps = propsAccessor(cur as T);
    const curPropKeys = Object.keys(curProps);
    return Object.fromEntries(
      curPropKeys.map((curPropKey) => [
        curPropKey,
        acc[curPropKey] === undefined || acc[curPropKey] === null
          ? [curProps[curPropKey]]
          : isArray(acc[curPropKey])
          ? [...acc[curPropKey], curProps[curPropKey]]
          : [acc[curPropKey], curProps[curPropKey]],
      ]),
    );
  }, {});
};

const Unit = ({ size, as, children, ...props }: PropsWithChildren<GridUnitProps>) => {
  const getFlexGrowBySize = (size: UnitSizeType) => (size === 'max' ? 1 : size === 'min' ? 0 : 1);
  const getFlexBySize = (size: UnitSizeType) => (size === 'max' ? 1 : size === 'min' ? 'none' : 'none');
  const getFlexBasisBySize = (size: UnitSizeType) => {
    const percentage = Math.round((size as number) * 100 * 10000) / 10000;
    return size === 'max' ? 'auto' : size === 'min' ? 'auto' : `${percentage}%`;
  };
  const getWidthBySize = (size: UnitSizeType) => (size === 'max' ? 'auto' : size === 'min' ? 'auto' : 'none');
  const getMaxWidthBySize = (size: UnitSizeType) => {
    const percentage = Math.round((size as number) * 100 * 10000) / 10000;
    return size === 'max' ? '100%' : size === 'min' ? 'none' : `${percentage}%`;
  };
  return (
    <View
      {...mapValueToResponsiveValueProps(size, (value) => ({
        display: value === 0 ? 'none' : 'initial',
        flowGrow: getFlexGrowBySize(value),
        flex: getFlexBySize(value),
        flexBasis: getFlexBasisBySize(value),
        width: getWidthBySize(value),
        maxWidth: getMaxWidthBySize(value),
      }))}
      as={as}
      {...props}
    >
      {children}
    </View>
  );
};

export default Object.assign(Grid, { Unit });
export type { Props as GridProps, GridUnitProps };
