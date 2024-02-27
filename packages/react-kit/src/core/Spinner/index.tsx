import { ProgressGradientIcon } from '@teamturing/icons';
import { SVGProps } from 'react';
import styled, { keyframes } from 'styled-components';

type Props = SVGProps<SVGSVGElement>;

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(ProgressGradientIcon)`
  color: ${({ theme }) => theme.colors['icon/neutral']};
  animation: ${spin} 1000ms infinite steps(8, end);
`;

Spinner.defaultProps = {
  width: 32,
  height: 32,
};

export default Spinner;
export type { Props as SpinnerProps };
