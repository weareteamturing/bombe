import { FloatingArrow, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { forcePixelValue } from '@teamturing/utils';
import { HTMLProps, ReactNode, cloneElement, forwardRef, isValidElement } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';

import { sx, SxProp } from '../../utils/styled-system';

import { TooltipOptions, useTooltip } from './useTooltip';
import { TooltipContext, useTooltipContext } from './useTooltipContext';

export function BaseTooltip({ children, ...options }: { children: ReactNode } & TooltipOptions) {
  const tooltip = useTooltip(options);
  return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>;
}

export const BaseTooltipTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(function TooltipTrigger(
  { children, ...props },
  propRef,
) {
  const context = useTooltipContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  if (isValidElement(children)) {
    return cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      }),
    );
  }

  return (
    <button ref={ref} data-state={context.open ? 'open' : 'closed'} {...context.getReferenceProps(props)}>
      {children}
    </button>
  );
});

export const BaseTooltipContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(function TooltipContent(
  { style, ...props },
  propRef,
) {
  const theme = useTheme();

  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!context.open) return null;

  return (
    <FloatingPortal>
      <StyledBaseTooltipContent
        ref={ref}
        style={{
          ...context.floatingStyles,
          ...style,
        }}
        {...context.getFloatingProps(props)}
      >
        {props.children}
        <FloatingArrow
          ref={context.arrowRef}
          context={context as any}
          width={10}
          height={6}
          fill={theme.colors['bg/neutral/bolder']}
          stroke={theme.colors['bg/neutral/bolder']}
        />
      </StyledBaseTooltipContent>
    </FloatingPortal>
  );
});

const tooltipAppear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledBaseTooltipContent = styled.div<SxProp>`
  z-index: 99999;
  background-color: ${({ theme }) => theme.colors['bg/neutral/bolder']};
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
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

  width: max-content;
  max-width: ${forcePixelValue(240)};
  word-wrap: break-word;
  white-space: pre-line;
  border-collapse: separate;

  animation-name: ${tooltipAppear};
  animation-duration: 100ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;

  ${sx}
`;
