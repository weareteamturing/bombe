import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & SxProp;

const DatagridBody = ({ ...props }: PropsWithChildren<Props>) => <BaseDatagridBody {...props} />;

const BaseDatagridBody = styled.div<SxProp>`
  width: inherit;

  ${sx}
`;

export default DatagridBody;
export type { Props as DatagridBodyProps };
