import styled from 'styled-components';
import { LayoutProps, layout } from 'styled-system';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & SxProp & LayoutProps;

const Image = styled.img<Props>`
  ${layout}
  ${sx}
`;

export default Image;
export type { Props as ImageProps };
