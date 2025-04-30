import { TdHTMLAttributes } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & TdHTMLAttributes<HTMLTableCellElement> & SxProp;

const UnstyledTableCell = styled.td<Props>`
  ${sx}
`;

export default UnstyledTableCell;
export type { Props as UnstyledTableCellProps };
