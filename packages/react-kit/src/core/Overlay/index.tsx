import { iterateFocusableElements } from '@primer/behaviors/utils';
import { forcePixelValue } from '@teamturing/utils';
import {
  HTMLAttributes,
  PropsWithChildren,
  Ref,
  RefObject,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import styled from 'styled-components';
import { MaxHeightProps, ResponsiveValue, maxHeight, variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';

type OverlaySizeType = 's' | 'm' | 'l' | 'auto';
type Props = {
  isOpen?: boolean;
  onDismiss?: () => void;
  size?: ResponsiveValue<OverlaySizeType>;
  ignoreOutsideClickRefs?: RefObject<HTMLElement>[];
  dismissFocusRef?: RefObject<HTMLElement>;
  initialFocusRef?: RefObject<HTMLElement>;
} & MaxHeightProps &
  SxProp &
  HTMLAttributes<HTMLElement>;

const Overlay = (
  {
    children,
    isOpen,
    onDismiss,
    size = 'm',
    ignoreOutsideClickRefs = [],
    dismissFocusRef,
    initialFocusRef,
    maxHeight = forcePixelValue(600),
    ...props
  }: PropsWithChildren<Props>,
  ref: Ref<HTMLDivElement>,
) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => overlayRef.current);

  const handleDismiss = useCallback(() => {
    if (dismissFocusRef && dismissFocusRef.current) {
      setTimeout(() => {
        dismissFocusRef.current?.focus();
      }, 0);
    }

    onDismiss?.();
  }, [onDismiss]);

  const handleOutsideClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (
        overlayRef.current &&
        e.target instanceof Node &&
        !overlayRef.current.contains(e.target) &&
        ignoreOutsideClickRefs &&
        !ignoreOutsideClickRefs.some(({ current }) => current?.contains(e.target as Node))
      ) {
        handleDismiss?.();
      }
    },
    [handleDismiss, overlayRef],
  );
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleDismiss?.();
        event.stopPropagation();
      }
    },
    [handleDismiss],
  );

  useEffect(() => {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
      return;
    }

    if (overlayRef.current) {
      const firstItem = iterateFocusableElements(overlayRef.current).next().value;
      firstItem?.focus();
    }
  }, [isOpen]);
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('touchend', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
        document.removeEventListener('touchend', handleOutsideClick);
      };
    }
  }, [isOpen, handleOutsideClick]);

  return isOpen ? (
    <BaseOverlay ref={overlayRef} size={size} maxHeight={maxHeight} {...props} role={'dialog'}>
      {children}
    </BaseOverlay>
  ) : null;
};

const BaseOverlay = styled.div<Props>`
  position: absolute;
  box-shadow: ${({ theme }) => theme.shadows['shadow/overlay']};
  background-color: ${({ theme }) => theme.colors['surface/overlay']};
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.s)};
  overflow: hidden;
  margin: auto;
  z-index: 99999;

  ${variant<BetterSystemStyleObject, OverlaySizeType, 'size'>({
    prop: 'size',
    variants: {
      s: {
        width: forcePixelValue(180),
      },
      m: {
        width: forcePixelValue(256),
      },
      l: {
        width: forcePixelValue(320),
      },
      auto: {
        width: 'auto',
      },
    },
  })}

  ${maxHeight}
  ${sx}
`;

export default forwardRef(Overlay);
export type { Props as OverlayProps };
