import { useCallback, useRef } from 'react';

import { createCtx } from '../../util';

import type { CommonBottomSheetDialogRef, CommonBottomSheetDialogOpenParams } from './CommonBottomSheetDialog';
import { type CommonDialogRef } from './CommonDialog';
import type { LottieDialogRef, LottieDialogShowParams } from './LottieDialog';
import type { ToastDialogRef } from './ToastDialog';

export const [useDialogContext, DialogProvider, DialogConsumer, useDialogContextSafely] = createCtx(() => {
  const commonDialog = useRef<CommonDialogRef>(null);

  const commonBottomSheetDialog = useRef<CommonBottomSheetDialogRef>(null);
  const openCommonBottomSheet = useCallback(
    (params: CommonBottomSheetDialogOpenParams) => commonBottomSheetDialog.current?.open(params),
    [],
  );
  const closeCommonBottomSheet = useCallback((type?: string) => commonBottomSheetDialog.current?.close(type), []);

  const toastDialog = useRef<ToastDialogRef>(null);

  const lottieDialog = useRef<LottieDialogRef>(null);
  const showLottie = useCallback((params: LottieDialogShowParams) => lottieDialog.current?.show(params), []);

  // const birthInputDialog = useRef<BirthInputDialogRef>(null);
  // const openBirthInput = useCallback((params: BirthInputDialogParams) => birthInputDialog.current?.open(params), []);

  return {
    commonDialog,
    toastDialog,
    lottieDialog,
    showLottie,
    commonBottomSheetDialog,
    openCommonBottomSheet,
    closeCommonBottomSheet,
  };
}, 'Dialog');
