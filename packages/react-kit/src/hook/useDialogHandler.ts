import { useState } from 'react';

const useDialogHandler = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return { isOpen, openDialog, closeDialog };
};

export default useDialogHandler;
