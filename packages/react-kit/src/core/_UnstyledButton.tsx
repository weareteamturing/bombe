import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../utils/styled-system';

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement> & SxProp;

const UnstyledButton = styled.button.attrs<Props>((props) => ({ type: props.type ?? 'button' }))`
  background: none;
  border: 0;
  padding: 0;
  outline: none;
  cursor: pointer;

  ${sx}
`;

export default UnstyledButton;
export type { Props as UnstyledButtonProps };
