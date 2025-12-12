import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & HTMLAttributes<HTMLDivElement> & SxProp;

const UnstyledDialogHeader = styled.div.attrs<Props>({ className: 'trk-dialog_header' })`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;

  ${sx}
`;

export default UnstyledDialogHeader;
export type { Props as UnstyledDialogHeaderProps };
