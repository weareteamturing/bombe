import { PropsWithChildren } from 'react';

import Grid, { GridUnitProps } from '../Grid';

type Props = {} & Pick<GridUnitProps, 'size' | 'sx'>;

const DatagridCell = ({ children, ...props }: PropsWithChildren<Props>) => (
  <BaseDatagridCell {...props}>{children}</BaseDatagridCell>
);

const BaseDatagridCell = Grid.Unit;

export default DatagridCell;
export type { Props as DatagridCellProps };
