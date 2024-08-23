import type { Ref } from 'react';
import { useRef } from 'react';

import type { DialogRef, DialogWithParamRef } from '../component/dialog/base/Dialog';

import { useStableCallback } from './useStableCallback';

export const useDialogHandler = () => {
  const dialogRef = useRef<DialogRef>(null);
  const open = useStableCallback(() => dialogRef.current?.open());
  const close = useStableCallback(() => dialogRef.current?.close());
  return {
    dialogRef,
    open,
    close,
  };
};

export type UseDialogWithParamsHandler<Params> = {
  dialogRef: Ref<DialogWithParamRef<Params>>;
  open: (params: Params) => void;
  close: () => void;
};
export const useDialogWithParamsHandler = <Params,>(): UseDialogWithParamsHandler<Params> => {
  const dialogRef = useRef<DialogWithParamRef<Params>>(null);
  const open = useStableCallback((params: Params) => dialogRef.current?.open(params));
  const close = useStableCallback(() => dialogRef.current?.close());
  return {
    dialogRef,
    open,
    close,
  };
};
