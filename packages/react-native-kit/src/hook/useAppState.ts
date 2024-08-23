import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

export function useAppState() {
  const currentState = AppState.currentState;
  const [appState, setAppState] = useState(currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', setAppState);

    return () => {
      subscription.remove();
    };
  }, []);

  return appState;
}
