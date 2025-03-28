import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { sx, SxProp } from '../../utils/styled-system';

type Props = {} & HTMLAttributes<HTMLDivElement> & SxProp;

const UnstyledDrawerFooter = styled.div<Props>`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;

  ${sx}
`;

export default UnstyledDrawerFooter;
export type { Props as UnstyledDrawerFooterProps };
