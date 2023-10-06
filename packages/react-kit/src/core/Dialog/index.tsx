import { CloseIcon } from '@teamturing/icons';
import { color, elevation } from '@teamturing/token-studio';
import { AnimatePresence, cubicBezier } from 'framer-motion';
import { forwardRef, PropsWithChildren, Ref, useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';

import IconButton from '../../core/IconButton';
import View from '../../core/View';
import { SxProp, sx } from '../../utils/styled-system';
import MotionView from '../MotionView';

function visible(el: HTMLInputElement) {
  return !el.hidden && (!el.type || el.type !== 'hidden') && (el.offsetWidth > 0 || el.offsetHeight > 0);
}

function focusable(el: Element) {
  const inputEl = el as HTMLInputElement;
  return inputEl.tabIndex >= 0 && !inputEl.disabled && visible(inputEl);
}

type Props = {
  isOpen?: boolean;
  onDismiss?: () => void;
  size?: 'l' | 's';
} & SxProp;

const Dialog = ({ children, isOpen, onDismiss, size, sx }: PropsWithChildren<Props>, ref: Ref<HTMLDivElement>) => {
  const dialogRoot = typeof document !== 'undefined' ? document.getElementById('dialog_root') : null;
  if (dialogRoot === null) return null;

  const handleDismiss = useCallback(() => onDismiss?.(), [onDismiss]);

  const overlayRef = useRef<HTMLSpanElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => dialogRef.current);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (
        dialogRef.current &&
        overlayRef.current &&
        e.target instanceof Node &&
        !dialogRef.current.contains(e.target) &&
        overlayRef.current.contains(e.target)
      ) {
        handleDismiss?.();
      }
    },
    [handleDismiss, dialogRef, overlayRef],
  );
  const getFocusableItem = useCallback(
    (e: React.KeyboardEvent, movement: number) => {
      if (dialogRef.current) {
        const items = Array.from(dialogRef.current.querySelectorAll('*')).filter(focusable);

        if (items.length === 0) return;
        e.preventDefault();
        const focusedElement = document.activeElement;
        if (!focusedElement) {
          return;
        }

        const index = items.indexOf(focusedElement);
        const offsetIndex = index + movement;
        const fallbackIndex = movement === 1 ? 0 : items.length - 1;
        const focusableItem = items[offsetIndex] || items[fallbackIndex];
        return focusableItem as HTMLElement;
      }
    },
    [dialogRef],
  );
  const handleTab = useCallback(
    (e: React.KeyboardEvent) => {
      const movement = e.shiftKey ? -1 : 1;
      const focusableItem = getFocusableItem(e, movement);
      if (!focusableItem) {
        return;
      }

      focusableItem.focus();
    },
    [getFocusableItem],
  );
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'Tab':
          handleTab(event);
          break;
        case 'Escape':
          handleDismiss?.();
          event.stopPropagation();
          break;
      }
    },
    [handleDismiss],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isOpen, handleOutsideClick]);

  useEffect(() => {
    if (isOpen) {
      if (closeButtonRef && closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    }
  }, [isOpen, closeButtonRef]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <MotionView
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{
            duration: 0.25,
            /**
             * easeOutQuad by https://easings.net/ko#easeOutQuad
             */
            ease: cubicBezier(0.5, 1, 0.89, 1),
          }}
          sx={{
            position: 'fixed',
            display: 'flex',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
          }}
        >
          <Overlay ref={overlayRef} />
          <BaseDialog
            ref={dialogRef}
            aria-modal={'true'}
            role={'dialog'}
            tabIndex={-1}
            sx={{
              ...(size === 's'
                ? {
                    maxHeight: 'calc(100vh - 32px)',

                    width: ['100%', 400, 400],
                    marginX: [8, 'auto', 'auto'],
                    marginY: 'auto',

                    borderRadius: 'l',
                  }
                : size === 'l'
                ? {
                    maxHeight: '100vh',
                    height: ['100%', '100%', 'auto'],
                    minHeight: ['-webkit-fill-available', '-webkit-fill-available', 'auto'],

                    width: ['100%', '100%', 820],
                    marginX: [0, 0, 'auto'],
                    marginY: 'auto',

                    borderRadius: ['none', 'none', 'l'],
                  }
                : {}),

              ...sx,
            }}
            onKeyDown={handleKeyDown}
          >
            <View sx={{ position: 'absolute', top: 4, right: 4 }}>
              <IconButton ref={closeButtonRef} icon={CloseIcon} variant={'plain'} size={'m'} onClick={handleDismiss} />
            </View>
            {children}
          </BaseDialog>
        </MotionView>
      ) : null}
    </AnimatePresence>
  );
};

const Overlay = styled.span`
  &:before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    cursor: default;
    content: '';
    background: ${color.dim};
  }
`;

const BaseDialog = styled.div<SxProp>(
  () => ({
    position: 'relative',
    boxShadow: elevation['shadow/overlay'],
    backgroundColor: elevation['surface/overlay'],
    outline: 'none',
    overflow: 'hidden',
    margin: 'auto',
  }),
  sx,
);

export default forwardRef(Dialog);
export type { Props as DialogProps };
