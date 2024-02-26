import { useState } from 'react';

type Options = {
  initialSelectIndex?: number;
};

const useTabState = ({ initialSelectIndex = 0 }: Options) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectIndex);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return [selectedIndex, handleSelect] as const;
};

export default useTabState;
export type { Options as UseTabStateOptions };
