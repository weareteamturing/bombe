import { WarningIcon } from '@teamturing/icons';
import { forcePixelValue } from '@teamturing/utils';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';

type FlashVariantType = 'danger';
type Props = { variant?: FlashVariantType } & SxProp;

const Flash = ({ variant = 'danger', children, ...props }: PropsWithChildren<Props>) => {
  return (
    <BaseFlash variant={variant} {...props}>
      {variant === 'danger' ? <WarningIcon /> : null}
      {children}
    </BaseFlash>
  );
};

const BaseFlash = styled.div<Props>`
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  & > svg {
    min-width: ${forcePixelValue(16)};
    height: ${forcePixelValue(16)};
    margin-right: ${({ theme }) => forcePixelValue(theme.space[2])};
  }
  word-break: keep-all;

  ${variant<BetterSystemStyleObject, FlashVariantType, 'variant'>({
    prop: 'variant',
    variants: {
      danger: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'padding': 4,

        'fontSize': 'xs',
        'fontWeight': 'medium',
        'lineHeight': 2,
        'color': 'text/neutral',
        'backgroundColor': 'bg/danger',
        '& > svg': {
          color: 'icon/danger',
        },
      },
    },
  })}

  ${sx}
`;

export default Flash;
export type { Props as FlashProps };
