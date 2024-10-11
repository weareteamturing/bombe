import React, { useImperativeHandle, useRef, useState } from 'react';
import { View } from 'react-native';

import { useAppState, useStableCallback } from '../../hook';
import { palette, spacing } from '../../theme';
import { useAppEventListener, AppEvent } from '../../util/AppEvent';
import { type ImperativeAnimationRef, FadeInOut, SlideInOut } from '../Animation';
import { type IconName, type IconProps, Icon } from '../Icon';
import { useDynamicLayout } from '../Layout';
import { Txt } from '../Txt';

import { useDialogContext } from './DialogProvider';

export type ToastType = 'success' | 'warning';
const ToastParamsByType: Record<ToastType, Pick<ToastDialogParams, 'iconName' | 'iconFill'>> = {
  success: {
    iconName: 'check_in_circle',
    iconFill: palette.green500,
  },
  warning: {
    iconName: 'exclamation_point_in_circle',
    iconFill: palette.yellow500,
  },
} as const;
export type ToastDialogParams = { text: string; iconName: IconName; iconFill: IconProps['fill']; duration?: number };
export type ToastDialogRef = {
  show: (type: ToastType, text: string, duration?: number) => void;
};
const _ToastDialog = (_, ref: React.Ref<ToastDialogRef>) => {
  const { screenWidth, sfTop } = useDynamicLayout();

  const [params, setParams] = useState<ToastDialogParams>({
    text: '',
    iconName: 'exclamation_point_in_circle',
    iconFill: palette.green500,
  });

  const fadeInOutAnimation = useRef<ImperativeAnimationRef>(null);
  const slideInOutAnimation = useRef<ImperativeAnimationRef>(null);

  const show = useStableCallback((type: ToastType, text: string, duration?: number) => {
    setParams({
      ...ToastParamsByType[type],
      text,
      duration,
    });
    fadeInOutAnimation.current?.start();
    slideInOutAnimation.current?.start();
  });

  useImperativeHandle(
    ref,
    () => ({
      show,
    }),
    [show],
  );

  useAppEventListener<string>('show_success_toast', (message) => show('success', message));
  useAppEventListener<string>('show_warning_toast', (message) => show('warning', message));

  const width = Math.min(351, screenWidth * 0.9);

  const appState = useAppState();
  return (
    <FadeInOut
      ref={fadeInOutAnimation}
      disableFirstAnimation
      pointerEvents={'none'}
      style={{
        width: '100%',
        top: sfTop + 24,
        position: 'absolute',
        zIndex: 5,
        alignItems: 'center',
      }}
      duration={params.duration ?? 2500}
      fadeInDuration={500}
      fadeOutDuration={300}
      enableResetAtRestart
    >
      <SlideInOut
        ref={slideInOutAnimation}
        duration={2500}
        startTranslationY={-24 - sfTop}
        endTranslationY={-24 - sfTop}
        slideInDuration={500}
        slideOutDuration={300}
        disableFirstAnimation
        enableResetAtRestart
      >
        {appState === 'active' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width,
              borderRadius: 16,
              justifyContent: 'center',
              backgroundColor: palette.gray700,
              minHeight: 56,
              padding: spacing[4],
              paddingLeft: spacing[5],
              opacity: 0.98,
            }}
          >
            <Icon size={24} name={params.iconName} fill={params.iconFill} />
            {Txt.M.Medium.White.render(params.text, {
              numberOfLines: 4,
              style: { flex: 1, marginLeft: spacing[3] },
              testID: 'toast/text',
            })}
          </View>
        ) : null}
      </SlideInOut>
    </FadeInOut>
  );
};
export const ToastDialog = React.forwardRef(_ToastDialog);

export const ToastDialogComposer = () => {
  const { toastDialog } = useDialogContext();

  useAppEventListener<string>('SHOW_WARNING_TOAST', (text) => toastDialog.current?.show('warning', text));
  useAppEventListener<string>('SHOW_SUCCESS_TOAST', (text) => toastDialog.current?.show('success', text));
  return <ToastDialog ref={toastDialog} />;
};

export function showSuccessToast(message: string) {
  AppEvent.emitEvent('show_success_toast', message);
}

export function showWarningToast(message: string) {
  AppEvent.emitEvent('show_warning_toast', message);
}
