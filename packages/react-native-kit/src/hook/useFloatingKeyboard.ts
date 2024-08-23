import { useEffect, useState } from 'react';
import type { KeyboardEvent } from 'react-native';
import { Keyboard } from 'react-native';

import { useDynamicLayout } from '../component';
import { is } from '../util';

/* Return true if keyboard width is not same with screen width */
export function useIsIPadFloatingKeyboard() {
  const { screenWidth } = useDynamicLayout();

  const [floating, setFloating] = useState(false);

  useEffect(() => {
    if (!is.iOS()) {
      return;
    }

    const onKeyboardWillChangeFrame = (event: KeyboardEvent) => {
      setFloating(event.endCoordinates.width < screenWidth);
    };

    const subscription = Keyboard.addListener('keyboardWillChangeFrame', onKeyboardWillChangeFrame);
    return () => {
      subscription.remove();
    };
  }, [screenWidth]);

  return floating;
}
