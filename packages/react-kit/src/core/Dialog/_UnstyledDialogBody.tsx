import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & HTMLAttributes<HTMLDivElement> & SxProp;

const UnstyledDialogBody = styled.div<Props>`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  overflow-y: auto;

  ${sx}
`;

export default UnstyledDialogBody;
export type { Props as UnstyledDialogBodyProps };
