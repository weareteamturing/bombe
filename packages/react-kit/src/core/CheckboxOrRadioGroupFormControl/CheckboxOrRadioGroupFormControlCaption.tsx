import { PropsWithChildren, useContext } from 'react';

import Text from '../Text';

import { CheckboxOrRadioGroupFormControlContext } from '.';

type Props = {};

const CheckboxOrRadioGroupFormControlCaption = ({ children }: PropsWithChildren<Props>) => {
  const { id } = useContext(CheckboxOrRadioGroupFormControlContext);

  return (
    <Text as={'span'} id={id} typography={'xxs'} color={'text/neutral/subtlest'}>
      {children}
    </Text>
  );
};

export default CheckboxOrRadioGroupFormControlCaption;
export type { Props as CheckboxOrRadioGroupFormControlCaptionProps };
