import { InfoInCircleIcon, TwinkleIcon, WarningIcon } from '@teamturing/icons';
import { forcePixelValue, isNullable } from '@teamturing/utils';
import {
  ComponentType,
  ElementType,
  HTMLAttributes,
  HTMLProps,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Ref,
  SVGProps,
  forwardRef,
} from 'react';
import { isValidElementType } from 'react-is';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { BetterSystemStyleObject, sx, SxProp } from '../../utils/styled-system';

type FlashVariantType = 'neutral' | 'danger' | 'assist' | 'accent';
type Props = {
  variant?: FlashVariantType;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  trailingVisual?: ElementType | ReactNode;
  buttons?: Array<ReactElement<HTMLProps<HTMLButtonElement>>>;
} & SxProp &
  HTMLAttributes<HTMLDivElement>;

const Flash = (
  {
    variant = 'neutral',
    icon: Icon = variant === 'danger'
      ? WarningIcon
      : variant === 'assist'
      ? TwinkleIcon
      : variant === 'accent'
      ? InfoInCircleIcon
      : InfoInCircleIcon,
    trailingVisual: TrailingVisual,
    buttons,
    children,
    ...props
  }: PropsWithChildren<Props>,
  ref: Ref<HTMLDivElement>,
) => {
  const isButtonExist = !isNullable(buttons) && buttons.length > 0;
  return (
    <BaseFlash ref={ref} variant={variant} {...props}>
      <Icon className={'flash__leading_icon'} />
      <div className={'flash__content'}>
        <span className={'flash__content__children'}>{children}</span>
        {isButtonExist ? <div className={'flash__content__buttons'}>{buttons}</div> : null}
      </div>
      {TrailingVisual ? (
        <div className={'flash__trailing_visual'}>
          {typeof TrailingVisual !== 'string' && isValidElementType(TrailingVisual) ? (
            <TrailingVisual />
          ) : (
            (TrailingVisual as ReactNode)
          )}
        </div>
      ) : null}
    </BaseFlash>
  );
};

const BaseFlash = styled.div<Props>`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${({ theme }) => forcePixelValue(theme.space[3])};
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  column-gap: ${({ theme }) => forcePixelValue(theme.space[2])};

  & .flash__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  & .flash__content__children {
    font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xxs)};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: ${({ theme }) => theme.lineHeights[2]};
    color: ${({ theme }) => theme.colors['text/neutral']};
    word-break: keep-all;
    white-space: pre-wrap;
  }

  & .flash__content__buttons {
    margin-top: ${({ theme }) => forcePixelValue(theme.space[2])};
  }

  & .flash__leading_icon {
    min-width: ${forcePixelValue(16)};
    height: ${forcePixelValue(16)};
  }

  & .flash__trailing_visual {
    display: flex;
    flex-direction: column;

    svg {
      width: ${forcePixelValue(16)};
      height: ${forcePixelValue(16)};
      color: ${({ theme }) => theme.colors['icon/neutral/bold']};
    }
  }

  ${({ theme }) =>
    variant<BetterSystemStyleObject, FlashVariantType, 'variant'>({
      prop: 'variant',
      variants: {
        neutral: {
          'backgroundColor': 'bg/neutral',
          '& .flash__leading_icon': {
            color: 'icon/neutral/bold',
          },
        },
        danger: {
          'backgroundColor': 'bg/danger',
          '& .flash__leading_icon': {
            color: 'icon/danger',
          },
        },
        assist: {
          'background': `linear-gradient(${theme.colors['surface']}, ${theme.colors['surface']}) padding-box, linear-gradient(${theme.gradients['border/accent/violet']}) border-box`,
          'borderWidth': 1,
          'borderStyle': 'solid',
          'borderColor': 'transparent',

          '& .flash__leading_icon': {
            color: 'icon/primary',
          },
        },
        accent: {
          'backgroundColor': 'bg/accent/blue/subtlest',
          '& .flash__leading_icon': {
            color: 'icon/accent/blue',
          },
        },
      },
    })}

  ${sx}
`;

export default forwardRef(Flash);
export type { Props as FlashProps };
