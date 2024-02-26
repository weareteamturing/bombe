import { useState } from 'react';

type Options = {
  initialSelectIndex?: number;
};

const useTabHandler = ({ initialSelectIndex = 0 }: Options) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectIndex);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return {
    selectedIndex,
    handleSelect,
  };
};

export default useTabHandler;
export type { Options as UseTabHandlerOptions };
