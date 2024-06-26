import { forcePixelValue } from '@teamturing/utils';
import { ComponentType, Ref, SVGProps, forwardRef } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';
import UnstyledButton, { UnstyledButtonProps } from '../_UnstyledButton';

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
} & UnstyledButtonProps;

const TextInputTrailingAction = ({ icon: Icon, disabled, ...props }: Props, ref: Ref<HTMLButtonElement>) => (
  <BaseTextInputTrailingAction ref={ref} {...props} disabled={disabled} aria-disabled={disabled}>
    <Icon />
  </BaseTextInputTrailingAction>
);

const BaseTextInputTrailingAction = styled(UnstyledButton)<SxProp>`
  display: inline-flex;
  padding: ${({ theme }) => forcePixelValue(theme.space[2])};
  background-color: ${({ theme }) => theme.colors['bg/neutral/subtler']};
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.full)};

  & svg {
    width: ${forcePixelValue(16)};
    height: ${forcePixelValue(16)};
    color: ${({ theme }) => theme.colors['icon/neutral/bolder']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['bg/neutral/subtler/hovered']};
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    & svg {
      color: ${({ theme }) => theme.colors['icon/disabled']};
    }
  }

  ${sx}
`;

export default forwardRef(TextInputTrailingAction);
export type { Props as TextInputTrailingActionProps };
