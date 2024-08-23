import { type Spacing, is, spacing } from '@teamturing/react-native-kit';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

type Props<T> = {
  items: T[];
  renderItem: (item: T, i: number) => React.ReactNode;
  renderItemWrapper?: (children: React.ReactNode, item: T, i: number) => React.ReactNode;
  emptyState?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  gap?: Spacing;
};

const ItemList = <T,>({
  items,
  renderItem,
  renderItemWrapper = (children) => children,
  emptyState = null,
  gap = 0,
  style,
}: Props<T>) => {
  if (is.emptyArray(items)) {
    return emptyState as JSX.Element;
  }
  return (
    <View style={[{ gap: spacing[gap] }, style]}>
      {items.map((item, i) => renderItemWrapper(renderItem(item, i), item, i))}
    </View>
  );
};

export { ItemList };
export type { Props as ItemListProps };
