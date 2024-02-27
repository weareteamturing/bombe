import { CloseIcon } from '@teamturing/icons';
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

import IconButton from '../../core/IconButton';
import View from '../../core/View';
import useFocusTrap from '../../hook/useFocusTrap';
import { SxProp, sx } from '../../utils/styled-system';

import DialogBody, { DialogBodyProps } from './DialogBody';
import DialogFooter, { DialogFooterProps } from './DialogFooter';
import DialogHeader, { DialogHeaderProps } from './DialogHeader';
import DialogHeaderSubtitle, { DialogHeaderSubtitleProps } from './DialogHeaderSubtitle';
import DialogHeaderTitle, { DialogHeaderTitleProps } from './DialogHeaderTitle';
import UnstyledDialogBody, { UnstyledDialogBodyProps } from './_UnstyledDialogBody';
import UnstyledDialogFooter, { UnstyledDialogFooterProps } from './_UnstyledDialogFooter';
import UnstyledDialogHeader, { UnstyledDialogHeaderProps } from './_UnstyledDialogHeader';

type DialogSizeType = 'full' | 'l' | 'm' | 's';
type Props = {
  isOpen?: boolean;
  onDismiss?: () => void;
  isOutsideClickDismissable?: boolean;
  size?: DialogSizeType;
  initialFocusRef?: RefObject<HTMLElement>;
} & SxProp;

const Dialog = (
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

  useFocusTrap({ containerRef: dialogRef, initialFocusRef: initialFocusRef || closeButtonRef, disabled: !isOpen });

  useEffect(() => {
    if (isOpen && isOutsideClickDismissable) {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isOpen, isOutsideClickDismissable, handleOutsideClick]);

  return isOpen ? (
    <View
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
      <Blanket ref={overlayRef} />
      <BaseDialog
        ref={dialogRef}
        aria-modal={'true'}
        role={'dialog'}
        tabIndex={-1}
        sx={{
          ...(size === 's'
            ? {
                maxHeight: 'calc(100vh - 64px)',

                width: ['calc(100% - 64px)', 400, 400],
                marginX: 'auto',
                marginY: 'auto',

                borderRadius: 'l',
              }
            : size === 'm'
            ? {
                maxHeight: ['100%', '100%', 'calc(100vh - 64px)'],
                height: ['100%', '100%', 'auto'],
                minHeight: ['-webkit-fill-available', '-webkit-fill-available', 'auto'],

                width: ['100%', '100%', 640],
                marginX: [0, 0, 'auto'],
                marginY: 'auto',

                borderRadius: ['none', 'none', 'l'],
              }
            : size === 'l'
            ? {
                maxHeight: ['100%', '100%', 'calc(100vh - 64px)'],
                height: ['100%', '100%', 'auto'],
                minHeight: ['-webkit-fill-available', '-webkit-fill-available', 'auto'],

                width: ['100%', '100%', 860],
                marginX: [0, 0, 'auto'],
                marginY: 'auto',

                borderRadius: ['none', 'none', 'l'],
              }
            : size === 'full'
            ? {
                height: ['100%', '100%', 'calc(100vh - 40px)'],

                width: ['100%', '100%', 'calc(100vw - 40px)'],
                marginX: [0, 0, 'auto'],
                marginY: 'auto',

                borderRadius: ['none', 'none', 'l'],
              }
            : {}),

          ...sx,
        }}
        onKeyDown={handleKeyDown}
      >
        <View sx={{ position: 'absolute', top: 3, right: 3 }}>
          <IconButton ref={closeButtonRef} icon={CloseIcon} variant={'plain'} size={'m'} onClick={handleDismiss} />
        </View>
        {children}
      </BaseDialog>
    </View>
  ) : null;
};

const Blanket = styled.span`
  &:before {
    position: fixed;
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

const BaseDialog = styled.div<SxProp>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: theme.shadows['shadow/overlay'],
    backgroundColor: theme.colors['surface/overlay'],
    outline: 'none',
    overflow: 'hidden',
    margin: 'auto',
  }),
  sx,
);

export default Object.assign(forwardRef(Dialog), {
  UnstyledHeader: UnstyledDialogHeader,
  UnstyledBody: UnstyledDialogBody,
  UnstyledFooter: UnstyledDialogFooter,
  Header: DialogHeader,
  HeaderTitle: DialogHeaderTitle,
  HeaderSubtitle: DialogHeaderSubtitle,
  Body: DialogBody,
  Footer: DialogFooter,
});
export type {
  Props as DialogProps,
  UnstyledDialogHeaderProps,
  UnstyledDialogBodyProps,
  UnstyledDialogFooterProps,
  DialogHeaderProps,
  DialogHeaderTitleProps,
  DialogHeaderSubtitleProps,
  DialogBodyProps,
  DialogFooterProps,
};
