import React, { useRef, useImperativeHandle, useMemo } from 'react';
import { ScrollView, TouchableHighlight } from 'react-native';

import { spacing, palette } from '../../theme';
import { is } from '../../util';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { ItemList, useDynamicLayout, RowCenter } from '../Layout';
import { Txt, FontWeight } from '../Txt';

import type { DialogRef } from './base';
import { type BottomSheetDialogProps, BottomSheetDialog } from './base/BottomSheetDialog';

type Option<T> = Readonly<{ id: T; value: string; description?: string; disabled?: boolean; chevron?: boolean }>;

export type ItemSelectBottomSheetDialogProps<T> = {
  title?: string;
  options: readonly (Option<T> | null | undefined)[];
  selectedOptionId?: T;
  onSelectedOptionChanged?: (params: { index: number; id: T }) => void;
  disabledSelect?: boolean;
  testID?: string;
} & Omit<BottomSheetDialogProps, 'children' | 'excludeSafeAreaBottomPadding' | 'style'>;
const _ItemSelectBottomSheetDialog = <T,>(
  {
    onSelectedOptionChanged,
    options,
    selectedOptionId,
    title,
    disabledSelect,
    testID = 'ItemSelectBottomSheetDialog',
    ...props
  }: ItemSelectBottomSheetDialogProps<T>,
  ref: React.Ref<DialogRef>,
) => {
  const { screenHeight, sfBottom, sidePadding } = useDynamicLayout();
  const dialog = useRef<DialogRef>(null);

  const open = () => dialog.current?.open();
  const close = () => dialog.current?.close();

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [],
  );

  const validOptions: Option<T>[] = useMemo(() => options.filter((o) => !!o) as Option<T>[], [options]);

  return (
    <BottomSheetDialog ref={dialog} pt={8} excludeSafeAreaBottomPadding {...props}>
      <Box px={'sidePadding'}>{title ? Txt.L.Bold.render(title, { style: { marginVertical: spacing[4] } }) : null}</Box>
      <ScrollView
        testID={testID}
        style={{ maxHeight: screenHeight * 0.6, minHeight: Math.min(options.length * 45, screenHeight * 0.6) }}
        contentContainerStyle={{ paddingBottom: 20 + sfBottom }}
      >
        <ItemList
          items={validOptions}
          renderItem={({ id, value, description, chevron }) => {
            const selected = selectedOptionId === id;
            const showDescription = is.notEmptyString(description);
            return (
              <RowCenter gapX={3}>
                {Txt.M.Medium.Color(selected || disabledSelect ? palette.gray900 : palette.gray400).render(value, {
                  style: showDescription
                    ? {
                        width: 40,
                      }
                    : { flex: 1 },
                })}
                {showDescription
                  ? Txt.M.Color(selected || disabledSelect ? palette.gray900 : palette.gray400).render(description, {
                      weight: selected ? FontWeight.Medium : FontWeight.Regular,
                      style: { flex: 1 },
                    })
                  : null}
                {selected && <Icon name={'check'} size={24} fill={palette.violet500} />}
                {chevron && <Icon name={'chevron_right'} size={20} fill={palette.gray400} />}
              </RowCenter>
            );
          }}
          renderItemWrapper={(children, { id, disabled }, index) => (
            <TouchableHighlight
              testID={`${testID}/item/${id}`}
              underlayColor={palette.gray100}
              disabled={disabledSelect || disabled}
              key={id + ''}
              onPress={() => {
                onSelectedOptionChanged?.({ index, id });
                close();
              }}
              style={{ paddingVertical: spacing[4], paddingHorizontal: sidePadding }}
            >
              {children}
            </TouchableHighlight>
          )}
        />
      </ScrollView>
    </BottomSheetDialog>
  );
};

export const ItemSelectBottomSheetDialog = React.forwardRef(_ItemSelectBottomSheetDialog) as <T>(
  props: ItemSelectBottomSheetDialogProps<T> & { ref?: React.ForwardedRef<DialogRef> },
) => ReturnType<typeof _ItemSelectBottomSheetDialog>;
