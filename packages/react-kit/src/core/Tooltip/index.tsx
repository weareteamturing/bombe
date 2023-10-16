import { HTMLAttributes, PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';

import { forcePixelValue } from '../../utils';

type Props = {
  /**
   * children 컴포넌트 기준으로 Tooltip의 위치를 정의합니다.
   */
  direction?:
    | 'top-center'
    | 'top-right'
    | 'right'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left'
    | 'left'
    | 'top-left';
  /**
   * Tooltip의 텍스트를 정의합니다.
   */
  text?: string;
} & Pick<HTMLAttributes<HTMLSpanElement>, 'className'>;

const Tooltip = ({ children, direction = 'top-center', text, className: propClassName }: PropsWithChildren<Props>) => {
  const className = [propClassName, `tooltip-direction-${direction}`].join(' ');

  return (
    <BaseTooltip role={'tooltip'} aria-label={text} className={className}>
      {children}
    </BaseTooltip>
  );
};

const tooltipAppear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const BaseTooltip = styled.span`
  display: inline-block;
  position: relative;

  &::before {
    position: absolute;
    z-index: 1000001;
    display: none;
    width: 0px;
    height: 0px;
    color: ${({ theme }) => theme.colors['bg/neutral/bolder']};
    pointer-events: none;
    content: '';
    border: 6px solid transparent;
    opacity: 0;
  }

  &::after {
    position: absolute;
    z-index: 1000000;
    display: none;
    padding: ${({ theme }) => `${forcePixelValue(theme.space[2])} ${forcePixelValue(theme.space[3])}`};
    font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xxs)};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: ${({ theme }) => theme.lineHeights[2]};
    -webkit-font-smoothing: subpixel-antialiased;
    color: ${({ theme }) => theme.colors['text/inverse']};
    text-align: center;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: break-word;
    white-space: pre;
    pointer-events: none;
    content: attr(aria-label);
    background: ${({ theme }) => theme.colors['bg/neutral/bolder']};
    border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
    box-shadow: ${({ theme }) => theme.shadows['shadow/overlay']};
    opacity: 0;
  }

  &:hover,
  &:active,
  &:focus {
    &::before,
    &::after {
      display: table-cell;
      text-decoration: none;
      animation-name: ${tooltipAppear};
      animation-duration: 100ms;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in;
      animation-delay: 300ms;
    }
  }

  &.tooltip-direction-bottom-center,
  &.tooltip-direction-bottom-right,
  &.tooltip-direction-bottom-left {
    &::after {
      top: 100%;
      right: 50%;
      margin-top: ${({ theme }) => forcePixelValue(theme.space[2])};
    }

    &::before {
      top: auto;
      right: 50%;
      bottom: ${({ theme }) => forcePixelValue(theme.space[-2] + theme.space['-0.25'])};
      margin-right: -6px;
      border-bottom-color: ${({ theme }) => theme.colors['bg/neutral/bolder']};
    }
  }

  &.tooltip-direction-bottom-right {
    &::after {
      right: auto;
      left: 50%;
      margin-left: -${({ theme }) => forcePixelValue(theme.space[4])};
    }
  }

  &.tooltip-direction-bottom-left::after {
    margin-right: -${({ theme }) => forcePixelValue(theme.space[4])};
  }

  // Tooltips above the object
  &.tooltip-direction-top-center,
  &.tooltip-direction-top-right,
  &.tooltip-direction-top-left {
    &::after {
      right: 50%;
      bottom: 100%;
      margin-bottom: ${({ theme }) => forcePixelValue(theme.space[2])};
    }

    &::before {
      top: ${({ theme }) => forcePixelValue(theme.space[-2] + theme.space['-0.25'])};
      right: 50%;
      bottom: auto;
      margin-right: -6px;
      border-top-color: ${({ theme }) => theme.colors['bg/neutral/bolder']};
    }
  }

  &.tooltip-direction-top-right {
    &::after {
      right: auto;
      left: 50%;
      margin-left: -${({ theme }) => forcePixelValue(theme.space[4])};
    }
  }

  &.tooltip-direction-top-left::after {
    margin-right: -${({ theme }) => forcePixelValue(theme.space[4])};
  }

  &.tooltip-direction-top-center::after,
  &.tooltip-direction-bottom-center::after {
    transform: translateX(50%);
  }

  &.tooltip-direction-left {
    &::after {
      right: 100%;
      bottom: 50%;
      margin-right: ${({ theme }) => forcePixelValue(theme.space[2])};
      transform: translateY(50%);
    }

    &::before {
      top: 50%;
      bottom: 50%;
      left: ${({ theme }) => forcePixelValue(theme.space[-2] + theme.space['-0.25'])};
      margin-top: -6px;
      border-left-color: ${({ theme }) => theme.colors['bg/neutral/bolder']};
    }
  }

  &.tooltip-direction-right {
    &::after {
      bottom: 50%;
      left: 100%;
      margin-left: ${({ theme }) => forcePixelValue(theme.space[2])};
      transform: translateY(50%);
    }

    &::before {
      top: 50%;
      right: ${({ theme }) => forcePixelValue(theme.space[-2] + theme.space['-0.25'])};
      bottom: 50%;
      margin-top: -6px;
      border-right-color: ${({ theme }) => theme.colors['bg/neutral/bolder']};
    }
  }

  &::after {
    width: max-content;
    max-width: 240px;
    word-wrap: break-word;
    white-space: pre-line;
    border-collapse: separate;
  }

  &.tooltip-direction-bottom-center::after,
  &.tooltip-direction-top-center::after {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }

  &.tooltip-direction-left::after,
  &.tooltip-direction-right::after {
    right: 100%;
  }
`;

export default Tooltip;
export type { Props as TooptipProps };
