import { PropsWithChildren, useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import Text from '../Text';

import { FormControlContext } from '.';

type Props = {};

const FormControlErrorMessage = ({ children }: PropsWithChildren<Props>) => {
  const { id } = useContext(FormControlContext);

  return (
    <StyledText id={id} typography={'xs'} color={'text/danger'}>
      {children}
    </StyledText>
  );
};

const errorMessageKeyframe = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledText = styled(Text)`
  animation: 170ms ${errorMessageKeyframe} cubic-bezier(0.44, 0.74, 0.36, 1);
`;

export default FormControlErrorMessage;
export type { Props as FormControlErrorMessageProps };
