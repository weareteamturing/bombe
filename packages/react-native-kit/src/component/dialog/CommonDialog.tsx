import { useBackHandler } from '@react-native-community/hooks';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { View } from 'react-native';

import { palette, spacing } from '../../theme';
import { is, runAfterFlushMacroQueue, useAppEventListener, AppEvent } from '../../util';
import { type BtnProps, Btn } from '../Btn';
import { type ChipProps, Chip } from '../Chip';
import { type IconName, type IconProps, Icon } from '../Icon';
import { type ImgSource, Img } from '../Img';
import { Txt } from '../Txt';

import { useDialogContext } from './DialogProvider';
import { type DialogRef, Dialog } from './base';

type ButtonType =
  | 'single-primary'
  | 'horizontal-variant-primary'
  | 'vertical-primary-text'
  | 'horizontal-outlined-danger';
const defaultButtonType: ButtonType = 'single-primary';
function resolveButtonType(buttonsLength: number, type?: ButtonType): ButtonType {
  if (buttonsLength <= 1) {
    return defaultButtonType;
  }
  return type || 'horizontal-variant-primary';
}

type Button = {
  title?: string;
  onPress?: (close: () => void) => void;
  loading?: boolean;
  dontClose?: boolean;
  testID?: string;
};

type ImageSizeVariant = '120' | '64';
const defaultImageSize: ImageSizeVariant = '120';

export type CommonDialogOpenParams = {
  dismissDisable?: boolean;

  onDismiss?: () => void;
  openId?: string;

  // UI
  iconName?: IconName;
  iconFill?: IconProps['fill'];
  image?: ImgSource;
  imageSize?: ImageSizeVariant;

  chip?: ChipProps;

  title?: string;
  body?: string;
  bodyAlign?: 'center' | 'left';

  buttonType?: ButtonType;
  buttons?: (Button | null | undefined)[];
};

export type CommonDialogProps = {
  onOpened?: () => void;
  onClosed?: () => void;
};

export type CommonDialogRef = {
  open: (params: CommonDialogOpenParams) => void;
  close: (openId?: string) => void;
};

export const COMMON_DIALOG_ANIMATION_DURATION = 300;

const CommonDialog = forwardRef<CommonDialogRef, CommonDialogProps>((props, ref) => {
  const dialog = useRef<DialogRef>(null);

  const isOpen = useRef(false);
  const clearStateHandler = useRef<any>(-1);

  const [iconName, setIconName] = useState<IconName>();
  const [iconFill, setIconFill] = useState<IconProps['fill']>();
  const [image, setImage] = useState<ImgSource>();
  const [imageSize, setImageSize] = useState<ImageSizeVariant>(defaultImageSize);
  const [chip, setChip] = useState<ChipProps>();
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();
  const [bodyAlign, setBodyAlign] = useState<'center' | 'left'>('center');
  const [buttonType, setButtonType] = useState<ButtonType>(defaultButtonType);
  const [buttons, setButtons] = useState<Button[]>([]);
  const [dismissDisable, setDismissDisable] = useState(false);
  const [onDismiss, setOnDismiss] = useState<() => void>();
  const [openId, setOpenId] = useState('');

  const setUIStates = useCallback((params?: CommonDialogOpenParams) => {
    setIconName(params?.iconName || undefined);
    setIconFill(params?.iconFill || undefined);
    setImage(params?.image || undefined);
    setImageSize(params?.imageSize || defaultImageSize);
    setChip(params?.chip);
    setTitle(params?.title || undefined);
    setBody(params?.body || undefined);
    setBodyAlign(params?.bodyAlign || 'center');
    setDismissDisable(params?.dismissDisable || false);
    setOnDismiss(is.function(params?.onDismiss) ? () => params?.onDismiss : undefined);
    setOpenId(params?.openId || '');

    const buttons = params?.buttons || [];
    setButtons(buttons.filter((b) => is.plainObject(b)) as Button[]);
    setButtonType(resolveButtonType(buttons.length, params?.buttonType));
  }, []);

  const imageSizeByVariant: Record<ImageSizeVariant, number> = {
    '120': 120,
    '64': 64,
  };

  const close = useCallback(
    (id?: string) => {
      if (idMatchNeeded()) {
        closeModalById();
      } else {
        close();
      }

      function idMatchNeeded() {
        return is.notEmptyString(id);
      }

      function closeModalById() {
        if (openId === id) {
          close();
        }
      }

      function close() {
        dialog.current?.close();
      }
    },
    [openId],
  );

  const open = useCallback(
    (params: CommonDialogOpenParams) => {
      isOpen.current = true;
      if (clearStateHandler.current !== -1) clearTimeout(clearStateHandler.current);

      setUIStates(params);
      dialog.current?.open();
    },
    [setUIStates],
  );

  useAppEventListener<CommonDialogOpenParams>('open_common_dialog', open);
  useAppEventListener('close_common_dialog', close);

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [open, close],
  );

  useBackHandler(() => {
    if (isOpen.current) {
      if (!dismissDisable) {
        close();
      }
      return true;
    }
    return false;
  });

  const renderBaseElement = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        {!image && iconName ? (
          <Icon name={iconName} size={imageSizeByVariant[imageSize]} fill={iconFill || palette.gray300} mb={4} />
        ) : null}
        {!iconName && image
          ? Img.render(image, {
              width: imageSizeByVariant[imageSize],
              height: imageSizeByVariant[imageSize],
              style: { marginBottom: spacing[4] },
            })
          : null}
        {chip?.text ? <Chip size={'m'} variant={'gray'} mb={3} {...chip} /> : null}
        {title
          ? Txt.L.Bold.render(title, {
              align: 'center',
              numberOfLines: 4,
              testID: 'commonDialog/title',
              style: [{ width: '100%', marginBottom: spacing[body ? 3 : 0] }],
            })
          : null}
        {body
          ? Txt.S.Medium.Gray500.render(body, {
              align: bodyAlign,
              numberOfLines: 16,
              testID: 'commonDialog/body',
              style: [{ width: '100%' }],
            })
          : null}
      </View>
    );
  };

  const renderButtons = () => {
    if (buttons.length === 0) {
      return undefined;
    }

    const [button1, button2]: (Button | undefined)[] = buttons;

    const renderButton = (button?: Button, props?: BtnProps) =>
      !button ? null : (
        <Btn
          text={button.title}
          onPress={() => {
            if (!button.dontClose) {
              close();
            }
            runAfterFlushMacroQueue(() => button.onPress?.(close));
          }}
          loading={button.loading}
          testID={`commonDialog/button/${button.testID ?? button.title}`}
          fullWidth={true}
          size={'l'}
          {...props}
        />
      );

    if (!button2 || buttonType === 'single-primary') {
      return renderButton(button1);
    } else if (buttonType === 'horizontal-variant-primary') {
      return (
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>{renderButton(button1, { variant: 'secondary' })}</View>
          <View style={{ flex: 1, marginLeft: spacing[2] }}>{renderButton(button2, { variant: 'primary' })}</View>
        </View>
      );
    } else if (buttonType === 'vertical-primary-text') {
      return (
        <View style={{ width: '100%' }}>
          {renderButton(button1)}
          {renderButton(button2, { size: 'm', variant: 'text-gray700', layout: { marginTop: spacing[1] } })}
        </View>
      );
    } else if (buttonType === 'horizontal-outlined-danger') {
      return (
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>{renderButton(button1, { variant: 'outlined' })}</View>
          <View style={{ flex: 1, marginLeft: spacing[2] }}>{renderButton(button2, { variant: 'danger' })}</View>
        </View>
      );
    } else {
      return undefined;
    }
  };

  return (
    <Dialog
      testID={'CommonDialog'}
      ref={dialog}
      radius={20}
      pt={8}
      px={5}
      pb={6}
      onOpened={() => {
        isOpen.current = true;
        props.onOpened?.();
      }}
      {...{
        onClosedStarted: () => {
          props.onClosed?.();
          onDismiss?.();
          clearStateHandler.current = setTimeout(() => {
            isOpen.current = false;
            setUIStates();
          }, COMMON_DIALOG_ANIMATION_DURATION);
        },
      }}
      animationDuration={COMMON_DIALOG_ANIMATION_DURATION}
      backdropPressToClose={!dismissDisable}
      backButtonClose={false}
    >
      {renderBaseElement()}
      <View style={{ marginTop: spacing[8] }}>{renderButtons()}</View>
    </Dialog>
  );
});

export const CommonDialogComposer = () => {
  const { commonDialog } = useDialogContext();
  return <CommonDialog ref={commonDialog} />;
};

export function openCommonDialog(params: CommonDialogOpenParams) {
  AppEvent.emitEvent('open_common_dialog', params);
}

export function closeCommonDialog() {
  AppEvent.emitEvent('close_common_dialog');
}

type HandleErrorWithCommonDialogOption = {
  title: string;
  body: string;
  hideErrorReportButton: boolean;
  buttonText: string;
};
let defaultHandleErrorWithCommonDialogOption: HandleErrorWithCommonDialogOption = {
  title: '오류가 발생했습니다',
  body: '잠시 후에 다시 시도해주세요',
  hideErrorReportButton: false,
  buttonText: '확인',
};

export function setDefaultErrorWithCommonDialogOption(option: Partial<HandleErrorWithCommonDialogOption>) {
  defaultHandleErrorWithCommonDialogOption = { ...defaultHandleErrorWithCommonDialogOption, ...option };
}
export function handleErrorWithCommonDialogOptions(
  options: Partial<HandleErrorWithCommonDialogOption> = defaultHandleErrorWithCommonDialogOption,
) {
  const { title, body, hideErrorReportButton, buttonText } = {
    ...defaultHandleErrorWithCommonDialogOption,
    ...options,
  };
  openCommonDialog({
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
}
export function handleErrorWithCommonDialog() {
  handleErrorWithCommonDialogOptions();
}

export { CommonDialog };
