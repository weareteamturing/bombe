import { useCallback, useState } from 'react';

type Options = {
  initialState?: boolean;
};

const useToggleState = ({ initialState = false }: Options) => {
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

  return [state, toggle, on, off] as const;
};

export default useToggleState;
export type { Options as UseToggleStateOptions };
