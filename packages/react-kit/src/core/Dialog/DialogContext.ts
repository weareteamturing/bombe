import { createContext } from 'react';

type DialogContextValue = { titleId?: string };
const DialogContext = createContext<DialogContextValue>({});

export default DialogContext;
export type { DialogContextValue };
