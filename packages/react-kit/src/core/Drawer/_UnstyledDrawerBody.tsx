import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { sx, SxProp } from '../../utils/styled-system';

type Props = {} & HTMLAttributes<HTMLDivElement> & SxProp;

const UnstyledDrawerBody = styled.div<Props>`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  overflow-y: auto;

  ${sx}
`;

export default UnstyledDrawerBody;
export type { Props as UnstyledDrawerBodyProps };
