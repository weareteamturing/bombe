import { PropsWithChildren, useContext } from 'react';

import Text from '../Text';

import { FormControlContext } from '.';

type Props = {};

const FormControlCaption = ({ children }: PropsWithChildren<Props>) => {
  const { id } = useContext(FormControlContext);

  return (
    <Text as={'span'} id={id} typography={'xxs'} color={'text/neutral/subtlest'}>
      {children}
    </Text>
  );
};

export default FormControlCaption;
export type { Props as FormControlCaptionProps };
