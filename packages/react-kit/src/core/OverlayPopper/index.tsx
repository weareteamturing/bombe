import { useFloating, autoUpdate, offset, flip, shift, Placement, UseFloatingReturn } from '@floating-ui/react-dom';
import { space } from '@teamturing/token-studio';
import { isFunction } from '@teamturing/utils';
import { Children, ForwardedRef, HTMLAttributes, ReactElement, ReactNode, RefObject, cloneElement } from 'react';

import useFocusTrap, { FocusTrapHookSettings } from '../../hook/useFocusTrap';
import useFocusZone, { FocusZoneHookSettings } from '../../hook/useFocusZone';
import useToggleHandler from '../../hook/useToggleHandler';
import { OverlayProps } from '../Overlay';

type Props = {
  children:
    | ReactNode
    | ((
        popperProps: HTMLAttributes<HTMLElement>,
        { isOpen, openOverlay }: { isOpen: boolean; openOverlay: () => void },
      ) => ReactNode);
  renderOverlay: (
    overlayProps: OverlayProps & { ref?: ForwardedRef<HTMLDivElement> },
    { isOpen, closeOverlay }: { isOpen: boolean; closeOverlay: () => void },
    { elements }: { elements: UseFloatingReturn['elements'] },
  ) => ReactNode;
  placement?: Placement;
  focusZoneSettings?: Partial<FocusZoneHookSettings>;
  focusTrapSettings?: Partial<FocusTrapHookSettings>;
};

const OverlayPopper = ({
  children: propChildren,
  renderOverlay,
  placement = 'bottom-start',
  focusZoneSettings,
  focusTrapSettings,
}: Props) => {
  const { refs, elements, floatingStyles, isPositioned } = useFloating({
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(space[1]), flip(), shift()],
    strategy: 'fixed',
  });

  const {
    state: isOpen,
    toggle: toggleOverlay,
    on: openOverlay,
    off: closeOverlay,
  } = useToggleHandler({ initialState: false });

  const handleDismiss = () => {
    closeOverlay();
  };

  const defaultPopperProps: HTMLAttributes<HTMLElement> = {
    onClick: toggleOverlay,
    tabIndex: 0,
    ...{ ref: refs.setReference },
  };

  const children = isFunction(propChildren)
    ? propChildren({ ...defaultPopperProps }, { isOpen, openOverlay })
    : Children.map(propChildren, (child) =>
        cloneElement(child as ReactElement<HTMLAttributes<HTMLElement>>, {
          ...defaultPopperProps,
        }),
      );

  useFocusZone({
    containerRef: refs.floating,
    disabled: !isOpen || !isPositioned,
    ...focusZoneSettings,
  });
  useFocusTrap({ containerRef: refs.floating, disabled: !isOpen || !isPositioned, ...focusTrapSettings });

  return (
    <>
      {children}
      {renderOverlay(
        {
          ref: refs.setFloating,
          isOpen,
          dismissFocusRef: refs.reference as RefObject<HTMLElement>,
          ignoreOutsideClickRefs: [refs.reference as RefObject<HTMLElement>],
          style: { ...floatingStyles },
          onDismiss: handleDismiss,
        },
        { isOpen, closeOverlay },
        { elements },
      )}
    </>
  );
};

export default OverlayPopper;
export type { Props as OverlayPopperProps };
