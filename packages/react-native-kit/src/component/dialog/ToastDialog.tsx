import {
  type IconName,
  palette,
  type IconProps,
  useDynamicLayout,
  type ImperativeAnimationRef,
  useAppState,
  FadeInOut,
  SlideInOut,
  spacing,
  Icon,
  Txt,
  useDialogContext,
} from '@teamturing/react-native-kit';
import React, { useImperativeHandle, useRef, useState } from 'react';
import { View } from 'react-native';

import { useAppEventListener } from '../../util/AppEvent';

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

  useImperativeHandle(
    ref,
    () => ({
      show: (type: ToastType, text: string, duration) => {
        setParams({
          ...ToastParamsByType[type],
          text,
          duration,
        });
        fadeInOutAnimation.current?.start();
        slideInOutAnimation.current?.start();
      },
    }),
    [],
  );

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
