import { useEffect, useState } from 'react';
import { type KeyboardEventListener, Platform, Keyboard } from 'react-native';

export function useKeyboard() {
  const [shown, setShown] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  const handleKeyboardDidShow: KeyboardEventListener = (e) => {
    setShown(true);
    setKeyboardHeight(e.endCoordinates.height);
  };
  const handleKeyboardDidHide: KeyboardEventListener = (e) => {
    setShown(false);
    if (e) {
    } else {
      setKeyboardHeight(0);
    }
  };

  useEffect(() => {
    const sub2 = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    const sub4 = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

    return () => {
      sub2.remove();
      sub4.remove();
    };
  }, []);

  return {
    keyboardShown: shown,
    keyboardHeight,
    iosAdditionalBottomPadding: Platform.OS === 'ios' && shown ? keyboardHeight : 0,
  };
}
