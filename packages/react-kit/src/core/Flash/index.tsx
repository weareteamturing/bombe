import { InfoInCircleIcon, TwinkleIcon, WarningIcon } from '@teamturing/icons';
import { forcePixelValue, isNullable } from '@teamturing/utils';
import {
  ComponentType,
  HTMLAttributes,
  HTMLProps,
  PropsWithChildren,
  ReactElement,
  Ref,
  SVGProps,
  forwardRef,
} from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { BetterSystemStyleObject, sx, SxProp } from '../../utils/styled-system';

type FlashVariantType = 'neutral' | 'danger' | 'assist';
type Props = {
  variant?: FlashVariantType;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  buttons?: Array<ReactElement<HTMLProps<HTMLButtonElement>>>;
} & SxProp &
  HTMLAttributes<HTMLDivElement>;

const Flash = (
  {
    variant = 'neutral',
    icon: Icon = variant === 'danger' ? WarningIcon : variant === 'assist' ? TwinkleIcon : InfoInCircleIcon,
    buttons,
    children,
    ...props
  }: PropsWithChildren<Props>,
  ref: Ref<HTMLDivElement>,
) => {
  const isButtonExist = !isNullable(buttons) && buttons.length > 0;
  return (
    <BaseFlash ref={ref} variant={variant} {...props}>
      <Icon />
      <div className={'flash__content'}>
        <span className={'flash__content__children'}>{children}</span>
        {isButtonExist ? <div className={'flash__content__buttons'}>{buttons}</div> : null}
      </div>
    </BaseFlash>
  );
};

const BaseFlash = styled.div<Props>`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${({ theme }) => forcePixelValue(theme.space[4])};
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};

  & .flash__content__children {
    font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: ${({ theme }) => theme.lineHeights[2]};
    color: ${({ theme }) => theme.colors['text/neutral']};
    word-break: keep-all;
    white-space: pre-wrap;
  }

  & .flash__content__buttons {
    margin-top: ${({ theme }) => forcePixelValue(theme.space[2])};
  }

  & > svg {
    min-width: ${forcePixelValue(20)};
    height: ${forcePixelValue(20)};
    margin-right: ${({ theme }) => forcePixelValue(theme.space[2])};
  }

  ${({ theme }) =>
    variant<BetterSystemStyleObject, FlashVariantType, 'variant'>({
      prop: 'variant',
      variants: {
        neutral: {
          'backgroundColor': 'bg/neutral',
          '& > svg': {
            color: 'icon/neutral/bold',
          },
        },
        danger: {
          'backgroundColor': 'bg/danger',
          '& > svg': {
            color: 'icon/danger',
          },
        },
        assist: {
          'background': `linear-gradient(${theme.colors['surface/overlay']}, ${theme.colors['surface/overlay']}) padding-box, linear-gradient(${theme.gradients['border/accent/violet']}) border-box`,
          'borderWidth': 1,
          'borderStyle': 'solid',
          'borderColor': 'transparent',

          '& > svg': {
            color: 'icon/primary',
          },
        },
      },
    })}

  ${sx}
`;

export default forwardRef(Flash);
export type { Props as FlashProps };
