import { InfoInCircleIcon } from '@teamturing/icons';
import { PropsWithChildren } from 'react';

import StyledIcon, { StyledIconProps } from '../StyledIcon';
import Tooltip, { TooltipProps } from '../Tooltip';

type Props = {} & Partial<StyledIconProps> & Pick<TooltipProps, 'text' | 'direction'>;

const CheckboxOrRadioGroupFormControlTooltipIcon = ({
  text,
  direction,
  icon = InfoInCircleIcon,
  size = 16,
  color = 'icon/neutral',
  ...props
}: PropsWithChildren<Props>) => (
  <Tooltip text={text} direction={direction} mouseOnly={false}>
    <StyledIcon icon={icon} size={size} color={color} {...props} />
  </Tooltip>
);

export default CheckboxOrRadioGroupFormControlTooltipIcon;
export type { Props as CheckboxOrRadioGroupFormControlTooltipIconProps };
