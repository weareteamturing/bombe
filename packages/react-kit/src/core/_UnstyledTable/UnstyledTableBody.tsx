import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { sx, SxProp } from '../../utils/styled-system';

type Props = {} & HTMLAttributes<HTMLTableSectionElement> & SxProp;

const UnstyledTableBody = styled.tbody<Props>`
  ${sx}
`;

export default UnstyledTableBody;
export type { Props as UnstyledTableBodyProps };
