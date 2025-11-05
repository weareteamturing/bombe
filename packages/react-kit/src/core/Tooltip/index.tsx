import { type Placement } from '@floating-ui/react';
import { PropsWithChildren } from 'react';

import { BaseTooltip, BaseTooltipContent, BaseTooltipTrigger } from './BaseTooltip';

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
  /**
   * Tooltip의 활성화 여부를 정의합니다.
   */
  disabled?: boolean;
} & PropsWithChildren;

const Tooltip = ({ children, direction = 'top-center', text, disabled = false }: Props) => {
  const directionToPlacement: Placement = {
    'top-center': 'top' as const,
    'top-right': 'top-start' as const,
    'right': 'right' as const,
    'bottom-right': 'bottom-start' as const,
    'bottom-center': 'bottom' as const,
    'bottom-left': 'bottom-end' as const,
    'left': 'left' as const,
    'top-left': 'top-end' as const,
  }[direction];

  return (
    <BaseTooltip placement={directionToPlacement}>
      <BaseTooltipTrigger className={'tooltip__tooltip_trigger'}>{children}</BaseTooltipTrigger>
      {!disabled ? <BaseTooltipContent className={'tooltip__tooltip_content'}>{text}</BaseTooltipContent> : null}
    </BaseTooltip>
  );
};

export default Tooltip;
export type { Props as TooltipProps };
