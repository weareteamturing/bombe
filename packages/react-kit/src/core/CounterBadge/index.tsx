import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { forcePixelValue } from '../../utils/forcePixelValue';
import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';

type CounterBadgeVariantType = 'red';
type CounterBadgeSizeType = 'm';

type Props = {
  variant?: ResponsiveValue<CounterBadgeVariantType>;
  size?: ResponsiveValue<CounterBadgeSizeType>;
  /**
   * maxCounter보다 큰 숫자가 children에 명시되면, {maxCounter+} 형식으로 표기됩니다.
   */
  maxCounter?: number;
  children?: string | number;
} & SxProp &
  Pick<HTMLAttributes<HTMLSpanElement>, 'style'>;

const CounterBadge = ({
  variant = 'red',
  size = 'm',
  children: propChildren = '',
  maxCounter = 99,
  ...props
}: Props) => {
  const numberChildren = typeof propChildren === 'number' ? propChildren : parseInt(propChildren);
  const children = maxCounter < numberChildren ? `${maxCounter}+` : `${numberChildren}`;

  return (
    <BaseCounterBadge variant={variant} size={size} {...props} aria-label={`${numberChildren}`}>
      {children}
    </BaseCounterBadge>
  );
};

const BaseCounterBadge = styled.span<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.full)};

  ${variant<BetterSystemStyleObject, CounterBadgeVariantType, 'variant'>({
    prop: 'variant',
    variants: {
      red: {
        backgroundColor: 'bg/accent/red',
        color: 'text/inverse',
      },
    },
  })}
  ${variant<BetterSystemStyleObject, CounterBadgeSizeType, 'size'>({
    prop: 'size',
    variants: {
      m: {
        minWidth: forcePixelValue(20),
        fontSize: 'xxs',
        fontWeight: 'medium',
        lineHeight: 2,

        px: 1,
        py: 0.25,
      },
    },
  })}

  ${sx}
`;

export default CounterBadge;
export type { Props as CounterBadgeProps };
