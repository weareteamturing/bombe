import { InfoInCircleIcon } from '@teamturing/icons';
import { forcePixelValue } from '@teamturing/utils';
import { ComponentType, PropsWithChildren, SVGProps } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';

type FlashVariantType = 'neutral' | 'danger';
type Props = { variant?: FlashVariantType; icon?: ComponentType<SVGProps<SVGSVGElement>> } & SxProp;

const Flash = ({
  variant = 'neutral',
  icon: Icon = InfoInCircleIcon,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <BaseFlash variant={variant} {...props}>
      <Icon />
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
      neutral: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'padding': 4,

        'fontSize': 'xs',
        'fontWeight': 'medium',
        'lineHeight': 2,
        'color': 'text/neutral',
        'backgroundColor': 'bg/neutral',
        '& > svg': {
          color: 'icon/neutral/bold',
        },
      },
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
