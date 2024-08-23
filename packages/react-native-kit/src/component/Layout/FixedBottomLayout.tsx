import { is, spacing } from '@teamturing/react-native-kit';
import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import { Box } from '../Box';

import { useDynamicLayout } from './Layout/LayoutProvider';

type Props = { excludeSafeAreaBottom?: boolean };

const FixedBottomLayout = ({ excludeSafeAreaBottom = false, children }: React.PropsWithChildren<Props>) => {
  const { sfBottom, screenWidth, screenHeight } = useDynamicLayout();

  const [iosKeyboardPaddingBottom, setIosKeyboardPaddingBottom] = useState(0);

  /* iOS Handling */
  useEffect(() => {
    if (!is.iOS()) {
      return;
    }
    const subscription = Keyboard.addListener(
      'keyboardWillChangeFrame',
      ({ endCoordinates: { screenY, width }, isEventFromThisApp }) => {
        if (isEventFromThisApp) {
          const isFloatingKeyboard = width < screenWidth;
          const keyboardHeight = screenHeight - screenY;
          if (isFloatingKeyboard) {
            const isOpen = keyboardHeight > 0 && !(screenY === 0);
            if (isOpen) {
              setIosKeyboardPaddingBottom(40);
            } else {
              setIosKeyboardPaddingBottom(0);
            }
          } else {
            const isOpen = keyboardHeight > 0;
            setIosKeyboardPaddingBottom(!isOpen ? 0 : keyboardHeight - sfBottom);
          }
        }
      },
    );
    return subscription.remove;
  }, [screenHeight, screenWidth, sfBottom, iosKeyboardPaddingBottom]);

  const paddingBottom = (excludeSafeAreaBottom ? 0 : sfBottom) + spacing[4] + iosKeyboardPaddingBottom;

  return (
    <Box pos={'absolute'} right={0} left={0} bottom={0} pt={12} pb={`${paddingBottom}px`} pointerEvents={'box-none'}>
      {children}
    </Box>
  );
};

export { FixedBottomLayout };
export type { Props as FixedBottomLayoutProps };
