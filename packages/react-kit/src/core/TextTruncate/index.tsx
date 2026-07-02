import styled from 'styled-components';
import { MaxWidthProps, maxWidth } from 'styled-system';

import { LineClampProps, SxProp, lineClamp, sx } from '../../utils/styled-system';

type Props = {} & MaxWidthProps & LineClampProps & SxProp;

const TextTruncate = styled.div<Props>`
  ${maxWidth}
  ${lineClamp}

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-box-orient: vertical;

  ${sx}
`;

export default TextTruncate;
export type { Props as TextTruncateProps };
