import { is } from '@mj-studio/js-util';
import { useSx } from '@react-native-styled-system/core';
import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';

import type { DialogRef, DialogProps } from './Dialog';
import { Dialog } from './Dialog';

import { useDynamicLayout } from '@teamturing/react-native-kit';

type Props = {
  excludeSafeAreaBottomPadding?: boolean;
  topBorder?: number;
} & Omit<DialogProps, 'style'>;

export const BottomSheetDialog = forwardRef((props: Props, ref: React.Ref<DialogRef>) => {
  const { sfBottom: _sfBottom } = useDynamicLayout();
  const { filteredProps, getStyle } = useSx(props, { fallback: { w: '100%' } });

  const { children, excludeSafeAreaBottomPadding, topBorder = 40, ...rest } = filteredProps;

  const style = getStyle();
  const flattenStyle = StyleSheet.flatten(style);
  const parsedPaddingBottom = flattenStyle?.paddingBottom ?? flattenStyle?.paddingVertical ?? 0;
  const sfBottom = excludeSafeAreaBottomPadding ? 0 : _sfBottom;

  const propsPaddingBottom = is.number(parsedPaddingBottom) ? parsedPaddingBottom : 0;
  const paddingBottom = propsPaddingBottom + sfBottom;

  return (
    <Dialog
      ref={ref}
      modalPosition={'bottom'}
      topLeftRadius={topBorder}
      topRightRadius={topBorder}
      overflow={'hidden'}
      style={[style, { paddingBottom }]}
      {...rest}
    >
      {children}
    </Dialog>
  );
});

export type { Props as BottomSheetDialogProps };
