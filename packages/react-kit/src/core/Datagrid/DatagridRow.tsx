import { PropsWithChildren } from 'react';

import Grid, { GridProps } from '../Grid';
import Space, { SpaceProps } from '../Space';

type Props = {} & Pick<GridProps, 'gapX' | 'alignItems' | 'justifyContent'> &
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
  >;

const DatagridRow = ({ gapX = 2, alignItems, justifyContent, children, ...props }: PropsWithChildren<Props>) => (
  <DatagridRowWrapper {...props}>
    <BaseDatagridRow wrap={false} gapX={gapX} alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </BaseDatagridRow>
  </DatagridRowWrapper>
);

const BaseDatagridRow = Grid;
const DatagridRowWrapper = Space;

export default DatagridRow;
export type { Props as DatagridRowProps };
