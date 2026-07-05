import { useFloating, autoUpdate, offset, shift, Placement, UseFloatingReturn, flip } from '@floating-ui/react';
import { isFunction } from '@teamturing/utils';
import { Children, ForwardedRef, HTMLAttributes, ReactElement, ReactNode, RefObject, cloneElement } from 'react';
import { useTheme } from 'styled-components';

import useDelayedFunction from '../../hook/useDelayedFunction';
import useFocusTrap, { FocusTrapHookSettings } from '../../hook/useFocusTrap';
import useFocusZone, { FocusZoneHookSettings } from '../../hook/useFocusZone';
import useToggleState from '../../hook/useToggleState';
import { OverlayProps } from '../Overlay';

type Props = {
  children:
    | ReactNode
    | ((
        popperProps: HTMLAttributes<HTMLElement>,
        { isOpen, openOverlay, closeOverlay }: { isOpen: boolean; openOverlay: () => void; closeOverlay: () => void },
      ) => ReactNode);
  renderOverlay: (
    overlayProps: OverlayProps & { ref?: ForwardedRef<HTMLDivElement> },
    { isOpen, closeOverlay }: { isOpen: boolean; closeOverlay: () => void },
    { elements }: { elements: UseFloatingReturn['elements'] },
  ) => ReactNode;
  triggeredBy?: 'click' | 'hover';
  placement?: Placement;
  focusZoneSettings?: Partial<FocusZoneHookSettings>;
  focusTrapSettings?: Partial<FocusTrapHookSettings>;
  onOpen?: () => void;
  onClose?: () => void;
  tabIndex?: number;
};

const OverlayPopper = ({
  children: propChildren,
  renderOverlay,
  triggeredBy = 'click',
  placement = 'bottom-start',
  focusZoneSettings,
  focusTrapSettings,
  onOpen,
  onClose,
  tabIndex,
}: Props) => {
  const theme = useTheme();
  const { refs, elements, floatingStyles, isPositioned } = useFloating({
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(theme.space[1]), flip(), shift({ crossAxis: true })],
    strategy: 'fixed',
  });
  const [isOpen, toggleOverlay, openOverlay, closeOverlay] = useToggleState({ initialState: false });

  const handleOverlayToggle = () => {
    if (!isOpen) onOpen?.();
    else onClose?.();

    toggleOverlay();
  };
  const handleOverlayOpen = () => {
    onOpen?.();

    openOverlay();
  };
  const handleOverlayClose = () => {
    onClose?.();

    closeOverlay();

    const reference = refs.reference as RefObject<HTMLElement>;
    if (reference.current) {
      setTimeout(() => {
        reference.current?.focus();
      }, 0);
    }
  };

  const delayedHandleOverlayClose = useDelayedFunction({ func: handleOverlayClose, delay: 150 });

  // overlay <-> trigger 를 오갈 때 예약된 close 를 취소해 hover 유지를 지원한다.
  const handleOverlayEnter = () => {
    delayedHandleOverlayClose.cancel();
    handleOverlayOpen();
  };

  const handleDismiss = () => {
    handleOverlayClose();
  };

  // hover 모드에서 overlay 위에 hover 를 유지할 수 있도록 overlay 에 주입하는 핸들러.
  const overlayHoverProps: Pick<HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'> = triggeredBy === 'hover'
    ? { onMouseEnter: () => delayedHandleOverlayClose.cancel(), onMouseLeave: () => delayedHandleOverlayClose() }
    : {};

  const defaultPopperProps: HTMLAttributes<HTMLElement> = {
    tabIndex: tabIndex ?? 0,
    ...(triggeredBy === 'click'
      ? {
          onClick: handleOverlayToggle,
          onKeyDown: (e) => {
            if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
              e.preventDefault();
              handleOverlayOpen();
            }

            e.stopPropagation();
          },
        }
      : triggeredBy === 'hover'
      ? {
          onMouseEnter: handleOverlayEnter,
          onMouseLeave: delayedHandleOverlayClose,
        }
      : {}),
    ...{ ref: refs.setReference },
  };

  const children = isFunction(propChildren)
    ? propChildren(defaultPopperProps, { isOpen, openOverlay: handleOverlayOpen, closeOverlay: handleOverlayClose })
    : Children.map(propChildren, (child) =>
        cloneElement(child as ReactElement<HTMLAttributes<HTMLElement>>, {
          ...(defaultPopperProps as HTMLAttributes<HTMLElement>),
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
          ...overlayHoverProps,
        },
        { isOpen, closeOverlay: handleOverlayClose },
        { elements },
      )}
    </>
  );
};

export default OverlayPopper;
export type { Props as OverlayPopperProps };
