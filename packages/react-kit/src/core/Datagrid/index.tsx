import { forcePixelValue } from '@teamturing/utils';
import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

import useRelocation from '../../hook/useRelocation';
import { SxProp, sx } from '../../utils/styled-system';

import DatagridBody, { DatagridBodyProps } from './DatagridBody';
import DatagridCell, { DatagridCellProps } from './DatagridCell';
import DatagridHeader, { DatagridHeaderProps } from './DatagridHeader';
import DatagridRow, { DatagridRowProps } from './DatagridRow';
import DatagridSubheader from './DatagridSubheader';

type Props = {} & HTMLAttributes<HTMLDivElement> & SxProp;

const Datagrid = ({ children, sx, ...props }: PropsWithChildren<Props>) => {
  const [relocatableComponentsObject, restConmponents] = useRelocation({
    children,
    config: {
      header: DatagridHeader,
      subHeader: DatagridSubheader,
    },
  });

  return (
    <DatagridWrapper sx={sx}>
      {relocatableComponentsObject.header}
      {relocatableComponentsObject.subHeader}
      <BaseDatagrid {...props}>{restConmponents}</BaseDatagrid>
    </DatagridWrapper>
  );
};

const DatagridWrapper = styled.div<SxProp>`
  width: 100%;

  border-width: ${forcePixelValue(1)};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors['border/neutral']};
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.s)};
  isolation: isolate;

  ${sx}
`;

const BaseDatagrid = styled.div`
  width: inherit;
`;

export default Object.assign(Datagrid, {
  Header: DatagridHeader,
  Subheader: DatagridSubheader,
  Body: DatagridBody,
  Row: DatagridRow,
  Cell: DatagridCell,
});
export type { Props as DatagridProps, DatagridBodyProps, DatagridCellProps, DatagridHeaderProps, DatagridRowProps };
