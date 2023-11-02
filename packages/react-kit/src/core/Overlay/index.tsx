import { iterateFocusableElements } from '@primer/behaviors/utils';
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
import { ResponsiveValue, variant } from 'styled-system';

import { forcePixelValue } from '../../utils';
import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';

type OverlaySizeType = 's' | 'm' | 'l';
type Props = {
  isOpen?: boolean;
  onDismiss?: () => void;
  size?: ResponsiveValue<OverlaySizeType>;
  ignoreOutsideClickRefs?: RefObject<HTMLElement>[];
  dismissFocusRef?: RefObject<HTMLElement>;
} & HTMLAttributes<HTMLElement>;

const Overlay = (
  {
    children,
    isOpen,
    onDismiss,
    size = 'm',
    ignoreOutsideClickRefs = [],
    dismissFocusRef,
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
    (e: MouseEvent) => {
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
      switch (event.key) {
        case 'Escape':
          handleDismiss?.();
          event.stopPropagation();
          break;
      }
    },
    [handleDismiss],
  );

  useEffect(() => {
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
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isOpen, handleOutsideClick]);

  return isOpen ? (
    <BaseOverlay ref={overlayRef} size={size} {...props} role={'dialog'}>
      {children}
    </BaseOverlay>
  ) : null;
};

const BaseOverlay = styled.div<SxProp & Props>`
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
        width: forcePixelValue(256),
      },
      m: {
        width: forcePixelValue(320),
      },
      l: {
        width: forcePixelValue(480),
      },
    },
  })}
  ${sx}
`;

export default forwardRef(Overlay);
export type { Props as OverlayProps };
