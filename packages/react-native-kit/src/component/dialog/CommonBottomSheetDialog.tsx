import { useBackHandler } from '@react-native-community/hooks';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';

import is from '../../util/is';
import { type BaseBtnProps } from '../Btn/BaseBtn';

import { useDialogContext } from './DialogProvider';
import { type DialogRef, BottomSheetDialog } from './base';

import {
  type ImgSource,
  type IconName,
  type IconProps,
  Box,
  Img,
  Icon,
  Txt,
  Btn,
  runAfterFlushMacroQueue,
} from '@teamturing/react-native-kit';

type Button = {
  title?: string;
  onPress?: (close: () => void) => void;
  loading?: boolean;
  dontClose?: boolean;
  testID?: string;
};

export type CommonBottomSheetDialogOpenParams = {
  dismissDisable?: boolean;

  onDismiss?: () => void;
  openId?: string;

  // UI
  image?: ImgSource;
  icon?: IconName;
  iconFill?: IconProps['fill'];
  imageSize?: number;

  title?: string;
  body?: string;

  buttons?: (Button | null | undefined)[];
};

export type CommonBottomSheetDialogProps = {
  onOpened?: () => void;
  onClosed?: () => void;
};

export type CommonBottomSheetDialogRef = {
  open: (params: CommonBottomSheetDialogOpenParams) => void;
  close: (openId?: string) => void;
};

export const COMMON_BOTTOM_SHEET_DIALOG_ANIMATION_DURATION = 300;

const CommonBottomSheetDialog = forwardRef<CommonBottomSheetDialogRef, CommonBottomSheetDialogProps>((props, ref) => {
  const dialog = useRef<DialogRef>(null);

  const isOpen = useRef(false);
  const clearStateHandler = useRef<any>(-1);

  const [image, setImage] = useState<ImgSource>();
  const [imageSize, setImageSize] = useState(160);
  const [icon, setIconName] = useState<IconName>();
  const [iconFill, setIconFill] = useState<IconProps['fill']>();
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();
  const [buttons, setButtons] = useState<Button[]>([]);
  const [dismissDisable, setDismissDisable] = useState(false);
  const [onDismiss, setOnDismiss] = useState<() => void>();
  const [openId, setOpenId] = useState('');

  const setUIStates = useCallback((params?: CommonBottomSheetDialogOpenParams) => {
    setImage(params?.image || undefined);
    setImageSize(params?.imageSize || 160);
    setIconName(params?.icon);
    setIconFill(params?.iconFill);
    setTitle(params?.title || undefined);
    setBody(params?.body || undefined);
    setDismissDisable(params?.dismissDisable || false);
    setOnDismiss(is.function(params?.onDismiss) ? () => params?.onDismiss : undefined);
    setOpenId(params?.openId || '');

    const buttons = params?.buttons || [];
    setButtons(buttons.filter((b) => is.plainObject(b)) as Button[]);
  }, []);

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
    (params: CommonBottomSheetDialogOpenParams) => {
      isOpen.current = true;
      clearTimeout(clearStateHandler.current);

      setUIStates(params);
      dialog.current?.open();
    },
    [setUIStates],
  );

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
      <Box>
        {image ? (
          Img.Sx({ alignSelf: 'center', mb: 4 }).render(image, {
            width: imageSize,
            height: imageSize,
          })
        ) : icon ? (
          <Icon name={icon} fill={iconFill} size={imageSize} mb={4} alignSelf={'center'} />
        ) : null}
        {title
          ? Txt.H3.Bold.Center.Sx({ mb: body ? 2 : 0 }).render(title, {
              testID: 'commonBottomSheetDialog/title',
            })
          : null}
        {body
          ? Txt.M.Medium.Gray500.Center.render(body, {
              testID: 'commonBottomSheetDialog/body',
            })
          : null}
      </Box>
    );
  };

  const renderButtons = () => {
    if (buttons.length === 0) {
      return undefined;
    }

    const [button1, button2]: (Button | undefined)[] = buttons;

    const renderButton = (button?: Button, props?: BaseBtnProps) =>
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
          testID={`commonBottomSheetDialog/button/${button.testID ?? button.title}`}
          fullWidth={true}
          size={'l'}
          {...props}
        />
      );

    return (
      <Box mt={5}>
        {renderButton(button1, { size: 'l', variant: 'primary' })}
        {renderButton(button2, { size: 'l', variant: 'text-gray700', mt: 3 })}
      </Box>
    );
  };

  return (
    <BottomSheetDialog
      testID={'CommonBottomSheetDialog'}
      ref={dialog}
      pt={8}
      px={'sidePadding'}
      pb={5}
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
          }, COMMON_BOTTOM_SHEET_DIALOG_ANIMATION_DURATION);
        },
      }}
      animationDuration={COMMON_BOTTOM_SHEET_DIALOG_ANIMATION_DURATION}
      backdropPressToClose={!dismissDisable}
      backButtonClose={false}
    >
      {renderBaseElement()}
      {renderButtons()}
    </BottomSheetDialog>
  );
});

export const CommonBottomSheetDialogComposer = () => {
  const { commonBottomSheetDialog } = useDialogContext();
  return <CommonBottomSheetDialog ref={commonBottomSheetDialog} />;
};

export { CommonBottomSheetDialog };
