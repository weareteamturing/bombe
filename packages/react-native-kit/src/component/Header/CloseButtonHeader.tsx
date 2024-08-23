import { IconBtn } from '../Btn';

import { type HeaderProps, Header } from './Header';

export const CloseButtonHeader = ({
  right = [],
  onPressClose,
  testID,
  ...rest
}: HeaderProps & { onPressClose?: () => void }) => {
  return (
    <Header
      right={[
        ...right,
        <IconBtn
          name={'close'}
          size={'m'}
          variant={'plain-gray700'}
          onPress={onPressClose}
          testID={`${testID}/close`}
        />,
      ]}
      {...rest}
      testID={testID}
    />
  );
};
