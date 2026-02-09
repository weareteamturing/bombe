import { ButtonHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../utils/styled-system';

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement> & SxProp;

const BaseButton = styled.button<Props>`
  background: none;
  border: 0;
  padding: 0;
  outline: none;
  cursor: pointer;

  ${sx}
`;

const UnstyledButton = forwardRef<HTMLButtonElement, Props>(
  ({ type = 'button', ...props }, ref) => <BaseButton ref={ref} type={type} {...props} />,
);

UnstyledButton.displayName = 'UnstyledButton';

export default UnstyledButton;
export type { Props as UnstyledButtonProps };
