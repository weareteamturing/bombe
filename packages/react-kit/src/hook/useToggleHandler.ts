import { useCallback, useState } from 'react';

type Options = {
  initialState?: boolean;
};

const useToggleHandler = ({ initialState = false }: Options) => {
  const [state, setState] = useState<boolean>(initialState);

  const on = () => {
    setState(true);
  };
  const off = () => {
    setState(false);
  };
  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return {
    state,
    on,
    off,
    toggle,
  };
};

export default useToggleHandler;
export type { Options as UseToggleHandlerOptions };
