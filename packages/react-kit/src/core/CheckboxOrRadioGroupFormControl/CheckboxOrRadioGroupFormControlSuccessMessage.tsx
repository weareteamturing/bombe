import { PropsWithChildren, useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import Text from '../Text';

import { CheckboxOrRadioGroupFormControlContext } from '.';

type Props = {};

const CheckboxOrRadioGroupFormControlSuccessMessage = ({ children }: PropsWithChildren<Props>) => {
  const { id } = useContext(CheckboxOrRadioGroupFormControlContext);

  return (
    <StyledText id={id} typography={'xxs'} color={'text/success'}>
      {children}
    </StyledText>
  );
};

const successMessageKeyframe = keyframes`
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
  animation: 170ms ${successMessageKeyframe} cubic-bezier(0.44, 0.74, 0.36, 1);
`;

export default CheckboxOrRadioGroupFormControlSuccessMessage;
export type { Props as CheckboxOrRadioGroupFormControlSuccessMessageProps };
