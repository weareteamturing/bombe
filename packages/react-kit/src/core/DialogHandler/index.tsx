import { isFunction } from '@teamturing/utils';
import {
  Children,
  cloneElement,
  MouseEvent as ReactMouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';

import useDialogHandler from '../../hook/useDialogHandler';

type Props<Element extends HTMLElement> = {
  renderDialog: ({ isOpen, closeDialog }: { isOpen: boolean; closeDialog: () => void }) => React.ReactNode;
  onClick?: (e: ReactMouseEvent<Element, MouseEvent>) => void;
  children: ReactNode | (({ openDialog }: { openDialog: () => void }) => ReactNode);
};

const DialogHandler = <Element extends HTMLElement>({
  renderDialog,
  onClick,
  children: propChildren,
}: Props<Element>) => {
  const { isOpen, openDialog, closeDialog } = useDialogHandler();

  const handleClick: MouseEventHandler<Element> = (e) => {
    onClick?.(e);
    openDialog();
  };

  const children = isFunction(propChildren)
    ? (propChildren({ openDialog }) as JSX.Element)
    : Children.map(propChildren, (child) =>
        cloneElement(child as ReactElement<{ onClick: MouseEventHandler<Element> }>, {
          onClick: handleClick,
        }),
      );

  return (
    <>
      {children}
      {renderDialog({ isOpen, closeDialog })}
    </>
  );
};

export default DialogHandler;
