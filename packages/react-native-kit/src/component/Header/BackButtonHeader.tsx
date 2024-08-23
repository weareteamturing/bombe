import { IconBtn } from '../Btn';
import type { IconBtnProps } from '../Btn/IconBtn';

import { type HeaderProps, Header } from './Header';

export const BackButtonHeader = ({
  left = [],
  onPressBack,
  testID,
  backButtonVariant = 'plain-gray700',
  ...rest
}: HeaderProps & { onPressBack?: () => void; backButtonVariant?: IconBtnProps['variant'] }) => {
  return (
    <Header
      left={[
        <IconBtn
          name={'chevron_left'}
          size={'m'}
          variant={backButtonVariant}
          onPress={onPressBack}
          testID={`${testID}/back`}
        />,
        ...left,
      ]}
      {...rest}
      testID={testID}
    />
  );
};
