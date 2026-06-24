import {
  AriaAttributes,
  Children,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  isValidElement,
} from 'react';

import Grid, { GridProps } from '../Grid';
import Space, { SpaceProps } from '../Space';

import { DatagridCellProps } from './DatagridCell';

type Props = {
  /**
   * 행을 열 제목 행으로 표시합니다. `true`이면 하위 `Datagrid.Cell`들이 열 헤더(`columnheader`)로 처리됩니다.
   */
  columnHeader?: boolean;
} & Pick<GridProps, 'gapX' | 'alignItems' | 'justifyContent'> &
  Pick<
    SpaceProps,
    | 'p'
    | 'px'
    | 'py'
    | 'pt'
    | 'pr'
    | 'pb'
    | 'pl'
    | 'padding'
    | 'paddingX'
    | 'paddingY'
    | 'paddingTop'
    | 'paddingRight'
    | 'paddingBottom'
    | 'paddingLeft'
    | 'sx'
  > &
  Pick<HTMLAttributes<HTMLDivElement>, 'id' | 'role' | 'tabIndex'> &
  AriaAttributes;

const DatagridRow = ({
  gapX = 2,
  alignItems,
  justifyContent,
  columnHeader = false,
  role,
  children,
  ...props
}: PropsWithChildren<Props>) => (
  // 외부 wrapper가 `rowgroup`의 직접 자식이 되도록 여기에 role="row"를 부여하고,
  // 셀을 직접 감싸는 내부 Grid는 presentation 처리하여 row가 cell을 직접 소유하도록 한다.
  <DatagridRowWrapper role={role ?? 'row'} {...props}>
    <BaseDatagridRow
      role={'presentation'}
      wrap={false}
      gapX={gapX}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {columnHeader
        ? Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child as ReactElement<DatagridCellProps>, {
                  columnHeader: (child.props as DatagridCellProps).columnHeader ?? true,
                })
              : child,
          )
        : children}
    </BaseDatagridRow>
  </DatagridRowWrapper>
);

const BaseDatagridRow = Grid;
const DatagridRowWrapper = Space;

export default DatagridRow;
export type { Props as DatagridRowProps };
