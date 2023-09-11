import { ReactNode, JSX } from 'react';

type Props<T> = {
  items: readonly T[];
  renderItem: (item: T, index: number) => ReactNode;
  renderItemWrapper?: (children: ReactNode, item: T, index: number) => ReactNode;
  emptyState?: ReactNode;
};

const ItemList = <T,>({
  items,
  renderItem,
  renderItemWrapper = (children) => children,
  emptyState = null,
}: Props<T>) => {
  if (items.length === 0) return emptyState as JSX.Element;
  return <>{items.map((item, i) => renderItemWrapper(renderItem(item, i), item, i))}</>;
};

export default ItemList;
export type { Props as ItemListProps };
