import { useCallback, useRef } from 'react';

import { createCtx } from '../../util';
import { AppEvent } from '../../util/AppEvent';

import type { CommonBottomSheetDialogRef, CommonBottomSheetDialogOpenParams } from './CommonBottomSheetDialog';
import type { CommonDialogRef, CommonDialogOpenParams } from './CommonDialog';
import type { LottieDialogRef, LottieDialogShowParams } from './LottieDialog';
import type { ToastDialogRef } from './ToastDialog';

type HandleErrorWithCommonDialogOption = {
  title: string;
  body: string;
  hideErrorReportButton: boolean;
  buttonText: string;
};
const defaultHandleErrorWithCommonDialogOption: HandleErrorWithCommonDialogOption = {
  title: '오류가 발생했습니다',
  body: '잠시 후에 다시 시도해주세요',
  hideErrorReportButton: false,
  buttonText: '확인',
};

export const [useDialogContext, DialogProvider, DialogConsumer, useDialogContextSafely] = createCtx(() => {
  const commonDialog = useRef<CommonDialogRef>(null);
  const openCommon = useCallback((params: CommonDialogOpenParams) => commonDialog.current?.open(params), []);
  const closeCommon = useCallback((type?: string) => commonDialog.current?.close(type), []);

  const commonBottomSheetDialog = useRef<CommonBottomSheetDialogRef>(null);
  const openCommonBottomSheet = useCallback(
    (params: CommonBottomSheetDialogOpenParams) => commonBottomSheetDialog.current?.open(params),
    [],
  );
  const closeCommonBottomSheet = useCallback((type?: string) => commonBottomSheetDialog.current?.close(type), []);

  const toastDialog = useRef<ToastDialogRef>(null);
  const showSuccessToast = useCallback((text: string) => toastDialog.current?.show('success', text), []);
  const showWarningToast = useCallback((text: string) => toastDialog.current?.show('warning', text), []);

  const lottieDialog = useRef<LottieDialogRef>(null);
  const showLottie = useCallback((params: LottieDialogShowParams) => lottieDialog.current?.show(params), []);

  // const birthInputDialog = useRef<BirthInputDialogRef>(null);
  // const openBirthInput = useCallback((params: BirthInputDialogParams) => birthInputDialog.current?.open(params), []);

  const handleErrorWithCommonDialogOptions = useCallback(
    (options: Partial<HandleErrorWithCommonDialogOption> = defaultHandleErrorWithCommonDialogOption) => {
      const { title, body, hideErrorReportButton, buttonText } = {
        ...defaultHandleErrorWithCommonDialogOption,
        ...options,
      };
      openCommon({
        iconName: 'exclamation_point_in_circle',
        imageSize: '64',
        title: title,
        body: body,
        buttons: [
          {
            title: buttonText,
          },
          hideErrorReportButton
            ? null
            : {
                title: '오류 제보하기',
                onPress: () => AppEvent.emitEvent('NAVIGATE_BUG_REPORT'),
              },
        ],
        buttonType: 'vertical-primary-text',
      });
    },
    [openCommon],
  );
  const handleErrorWithCommonDialog = useCallback(
    () => handleErrorWithCommonDialogOptions(),
    [handleErrorWithCommonDialogOptions],
  );

  return {
    commonDialog,
    toastDialog,
    lottieDialog,
    closeCommon,
    handleErrorWithCommonDialog,
    handleErrorWithCommonDialogOptions,
    openCommon,
    showLottie,
    showSuccessToast,
    showWarningToast,
    commonBottomSheetDialog,
    openCommonBottomSheet,
    closeCommonBottomSheet,
  };
}, 'Dialog');
