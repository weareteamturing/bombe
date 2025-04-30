import { TableHTMLAttributes } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

import UnstyledTableBody, { UnstyledTableBodyProps } from './UnstyledTableBody';
import UnstyledTableCell, { UnstyledTableCellProps } from './UnstyledTableCell';
import UnstyledTableHead, { UnstyledTableHeadProps } from './UnstyledTableHead';
import UnstyledTableRow, { UnstyledTableRowProps } from './UnstyledTableRow';

type Props = {} & TableHTMLAttributes<HTMLTableElement> & SxProp;

const UnstyledTable = styled.table<Props>`
  border-collapse: collapse;

  ${sx}
`;

export default Object.assign(UnstyledTable, {
  Head: UnstyledTableHead,
  Body: UnstyledTableBody,
  Row: UnstyledTableRow,
  Cell: UnstyledTableCell,
});
export type {
  Props as UnstyledTableProps,
  UnstyledTableHeadProps,
  UnstyledTableBodyProps,
  UnstyledTableRowProps,
  UnstyledTableCellProps,
};
