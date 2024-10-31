import { CloseIcon } from '@teamturing/icons';
import { AnimatePresence, easeInOut } from 'framer-motion';
import {
  forwardRef,
  PropsWithChildren,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import styled from 'styled-components';

import useFocusTrap from '../../hook/useFocusTrap';
import { sx, SxProp } from '../../utils/styled-system';
import IconButton from '../IconButton';
import MotionView from '../MotionView';
import View from '../View';

import DrawerBody, { DrawerBodyProps } from './DrawerBody';
import DrawerFooter, { DrawerFooterProps } from './DrawerFooter';
import DrawerHeader, { DrawerHeaderProps } from './DrawerHeader';
import DrawerHeaderIconButton, { DrawerHeaderIconButtonProps } from './DrawerHeaderIconButton';
import UnstyledDrawerBody, { UnstyledDrawerBodyProps } from './_UnstyledDrawerBody';
import UnstyledDrawerFooter, { UnstyledDrawerFooterProps } from './_UnstyledDrawerFooter';
import UnstyledDrawerHeader, { UnstyledDrawerHeaderProps } from './_UnstyledDrawerHeader';

type DrawerSizeType = 'full' | 'l' | 'm' | 's';
type Props = {
  isOpen?: boolean;
  onDismiss?: () => void;
  isOutsideClickDismissable?: boolean;
  size?: DrawerSizeType;
  initialFocusRef?: RefObject<HTMLElement>;
} & SxProp;

const Drawer = (
  {
    children,
    isOpen,
    onDismiss,
    isOutsideClickDismissable = true,
    size = 'm',
    initialFocusRef,
    sx,
  }: PropsWithChildren<Props>,
  ref: Ref<HTMLDivElement>,
) => {
  const handleDismiss = useCallback(() => onDismiss?.(), [onDismiss]);

  const blanketRef = useRef<HTMLSpanElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => drawerRef.current);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (
        drawerRef.current &&
        blanketRef.current &&
        e.target instanceof Node &&
        !drawerRef.current.contains(e.target) &&
        blanketRef.current.contains(e.target)
      ) {
        handleDismiss?.();
      }
    },
    [handleDismiss, drawerRef, blanketRef],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          handleDismiss?.();
          event.stopPropagation();
          break;
      }
    },
    [handleDismiss],
  );

  useFocusTrap({ containerRef: drawerRef, initialFocusRef: initialFocusRef || closeButtonRef, disabled: !isOpen });

  useEffect(() => {
    if (isOpen && isOutsideClickDismissable) {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isOpen, isOutsideClickDismissable, handleOutsideClick]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <MotionView
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: easeInOut,
            }}
            sx={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 9999,
            }}
          >
            <Blanket ref={blanketRef} />
          </MotionView>
          <MotionView
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              duration: 0.25,
              ease: easeInOut,
            }}
            sx={{
              position: 'fixed',
              display: 'flex',
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              width: ['100%', '100%', 'fit-content'],
            }}
          >
            <BaseDrawer
              ref={drawerRef}
              aria-modal={'true'}
              role={'dialog'}
              tabIndex={-1}
              sx={{
                ...(size === 's'
                  ? {
                      width: ['calc(100% - 32px)', 400, 400],
                    }
                  : size === 'm'
                  ? {
                      width: ['100%', '100%', 640],
                    }
                  : size === 'l'
                  ? {
                      width: ['100%', '100%', 860],
                    }
                  : size === 'full'
                  ? {
                      width: ['100%', '100%', 'calc(100vw - 80px)'],
                    }
                  : {}),

                ...sx,
              }}
              onKeyDown={handleKeyDown}
            >
              <View sx={{ position: 'absolute', top: 2, right: 5 }}>
                <IconButton
                  ref={closeButtonRef}
                  icon={CloseIcon}
                  variant={'plain-bold'}
                  size={'m'}
                  onClick={handleDismiss}
                />
              </View>
              {children}
            </BaseDrawer>
          </MotionView>
        </>
      ) : null}
    </AnimatePresence>
  );
};
const Blanket = styled.span`
  &:before {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    cursor: default;
    content: '';
    background: ${({ theme }) => theme.colors.dim};
  }
`;
const BaseDrawer = styled.div<SxProp>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: theme.shadows['shadow/overlay'],
    backgroundColor: theme.colors['surface/overlay'],
    outline: 'none',
    overflow: 'hidden',
    margin: 'auto',

    height: '100%',
    marginRight: 0,
  }),
  sx,
);

export default Object.assign(forwardRef(Drawer), {
  UnstyledHeader: UnstyledDrawerHeader,
  UnstyledBody: UnstyledDrawerBody,
  UnstyledFooter: UnstyledDrawerFooter,
  Header: DrawerHeader,
  HeaderIconButton: DrawerHeaderIconButton,
  Body: DrawerBody,
  Footer: DrawerFooter,
});
export type {
  Props as DrawerProps,
  UnstyledDrawerHeaderProps,
  UnstyledDrawerBodyProps,
  UnstyledDrawerFooterProps,
  DrawerHeaderProps,
  DrawerHeaderIconButtonProps,
  DrawerBodyProps,
  DrawerFooterProps,
};
