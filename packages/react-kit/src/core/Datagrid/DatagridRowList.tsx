import { isNullable } from '@teamturing/utils';
import { ReactNode } from 'react';

import ItemList, { ItemListProps } from '../ItemList';

import DatagridCell, { DatagridCellProps } from './DatagridCell';
import DatagridRow, { DatagridRowProps } from './DatagridRow';

type Props<T extends { id: string }> = {
  rows: readonly T[];
  columns: readonly {
    field: string;
    size: DatagridCellProps['size'];
    renderValue: (row: T, index: number) => ReactNode;
  }[];
  rowProps?: DatagridRowProps;
  columnsTransformer?: (columns: Props<T>['columns']) => typeof columns;
} & Pick<ItemListProps<T>, 'renderItemWrapper' | 'emptyState'>;

const DatagridRowList = <T extends { id: string }>({
  rows,
  columns,
  rowProps = { alignItems: 'center' },
  renderItemWrapper,
  emptyState,
  columnsTransformer = (columns) => columns,
}: Props<T>) => (
  <ItemList
    items={rows}
    renderItem={(row, i) => (
      <DatagridRow key={row.id} {...rowProps}>
        {columnsTransformer(columns)
          .filter((column) => !isNullable(column))
          .map(({ field, renderValue, size }) => (
            <DatagridCell key={field} size={size}>
              {renderValue(row, i)}
            </DatagridCell>
          ))}
      </DatagridRow>
    )}
    renderItemWrapper={renderItemWrapper}
    emptyState={emptyState}
  />
);

export default DatagridRowList;
export type { Props as DatagridRowListProps };
