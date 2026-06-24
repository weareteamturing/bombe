import { AriaAttributes, HTMLAttributes, PropsWithChildren } from 'react';

import Grid, { GridUnitProps } from '../Grid';

type Props = {
  /**
   * 셀을 열 헤더(`columnheader`)로 표시합니다. 기본값(`false`)은 데이터 셀(`cell`)입니다.
   */
  columnHeader?: boolean;
} & Pick<GridUnitProps, 'size' | 'sx'> &
  Pick<HTMLAttributes<HTMLDivElement>, 'id' | 'role' | 'tabIndex'> &
  AriaAttributes;

const DatagridCell = ({ children, columnHeader = false, role, ...props }: PropsWithChildren<Props>) => (
  <BaseDatagridCell role={role ?? (columnHeader ? 'columnheader' : 'cell')} {...props}>
    {children}
  </BaseDatagridCell>
);

const BaseDatagridCell = Grid.Unit;

export default DatagridCell;
export type { Props as DatagridCellProps };
