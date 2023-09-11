import { SpaceKey } from '@teamturing/token-studio';
import styled from 'styled-components';
import { space, SpaceProps, Theme } from 'styled-system';

import { sx, SxProp } from '../../utils/styled-system';

type Props = {} & SpaceProps<Theme, SpaceKey> & SxProp;

const Space = styled.div<Props>`
  width: inherit;
  ${space};
  ${sx}
`;

export default Space;
export type { Props as SpaceProps };
