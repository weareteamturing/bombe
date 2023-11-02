import { useFloating, autoUpdate, offset, flip, shift, Placement } from '@floating-ui/react-dom';
import { space } from '@teamturing/token-studio';
import { Children, HTMLAttributes, PropsWithChildren, ReactElement, ReactNode, RefObject, cloneElement } from 'react';

import useFocusTrap, { FocusTrapHookSettings } from '../../hook/useFocusTrap';
import useFocusZone, { FocusZoneHookSettings } from '../../hook/useFocusZone';
import useToggleHandler from '../../hook/useToggleHandler';
import Overlay from '../Overlay';

type Props = {
  renderOverlay: ({ isOpen, closeOverlay }: { isOpen: boolean; closeOverlay: () => void }) => ReactNode;
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
}: PropsWithChildren<Props>) => {
  const { refs, floatingStyles, isPositioned } = useFloating({
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(space[1]), flip(), shift()],
    strategy: 'fixed',
  });

  const { state: isOpen, toggle: toggleOverlay, off: closeOverlay } = useToggleHandler({ initialState: false });

  const children = Children.map(propChildren, (child) =>
    cloneElement(child as ReactElement<HTMLAttributes<HTMLElement>>, {
      onClick: toggleOverlay,
      tabIndex: 0,
      ...{ ref: refs.setReference },
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
      <Overlay
        ref={refs.setFloating}
        isOpen={isOpen}
        onDismiss={closeOverlay}
        dismissFocusRef={refs.reference as RefObject<HTMLElement>}
        ignoreOutsideClickRefs={[refs.reference as RefObject<HTMLElement>]}
        style={floatingStyles}
      >
        {renderOverlay({ isOpen, closeOverlay })}
      </Overlay>
    </>
  );
};

export default OverlayPopper;
export type { Props as OverlayPopperProps };
