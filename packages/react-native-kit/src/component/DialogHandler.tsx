import {
  useDialogHandler,
  type UseDialogWithParamsHandler,
  useDialogWithParamsHandler,
} from '@teamturing/react-native-kit';
import type React from 'react';

export const DialogHandler = ({
  children,
}: {
  children: (params: ReturnType<typeof useDialogHandler>) => React.ReactElement;
}) => {
  const { dialogRef, open, close } = useDialogHandler();

  return children({ dialogRef, open, close });
};

export const DialogWithParamsHandler = <Params,>({
  children,
}: {
  children: (params: UseDialogWithParamsHandler<Params>) => React.ReactElement;
}) => {
  const { dialogRef, open, close } = useDialogWithParamsHandler<Params>();

  return children({ dialogRef, open, close });
};