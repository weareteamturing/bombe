import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & HTMLAttributes<HTMLTableSectionElement> & SxProp;

const UnstyledTableHead = styled.thead<Props>`
  ${sx}
`;

export default UnstyledTableHead;
export type { Props as UnstyledTableHeadProps };
