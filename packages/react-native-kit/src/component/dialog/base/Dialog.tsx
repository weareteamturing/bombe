import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import { useDynamicLayout, px, is, Portal, runAfterFlushMacroQueue } from '@teamturing/react-native-kit';
import React, { useCallback, useImperativeHandle, useRef, forwardRef } from 'react';
import { Easing } from 'react-native';

import type { ModalBoxProps } from './ModalBox';
import { ModalBox } from './ModalBox';

export type DialogRef = {
  open: () => void;
  close: () => void;
};
export type DialogWithParamRef<Params> = {
  open: (params: Params) => void;
  close: () => void;
};

type Props = {
  children?: React.ReactNode | ((params: { close: () => void }) => React.ReactNode);
  enablePortal?: boolean;
  testID?: string;
} & Omit<ModalBoxProps, 'children'> &
  SxProps;

export const Dialog = forwardRef((props: Props, ref: React.Ref<DialogRef>) => {
  const { dialogWidth } = useDynamicLayout();
  const { getStyle, filteredProps } = useSx(props, { fallback: { w: px(dialogWidth), h: 'auto', bg: 'white' } });
  const { children, enablePortal = false, ...rest } = filteredProps;
  const baseModal = useRef<ModalBox>(null);

  const open = useCallback(() => runAfterFlushMacroQueue(() => baseModal.current?.open()), []);
  const close = useCallback(() => baseModal.current?.close(), []);

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [close, open],
  );

  const baseModalElement = (
    <ModalBox
      ref={baseModal}
      modalPosition={'center'}
      style={getStyle()}
      backdropPressToClose={true}
      backButtonClose={true}
      animationDuration={400}
      easing={Easing.out(Easing.cubic)}
      {...rest}
    >
      {is.function(children) ? children({ close }) : children}
    </ModalBox>
  );

  return enablePortal ? <Portal>{baseModalElement}</Portal> : baseModalElement;
});

export type { Props as DialogProps };
