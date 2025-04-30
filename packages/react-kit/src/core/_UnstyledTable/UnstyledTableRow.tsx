import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & HTMLAttributes<HTMLTableRowElement> & SxProp;

const UnstyledTableRow = styled.tr<Props>`
  ${sx}
`;

export default UnstyledTableRow;
export type { Props as UnstyledTableRowProps };
