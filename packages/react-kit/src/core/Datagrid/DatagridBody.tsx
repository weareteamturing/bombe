import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { forcePixelValue } from '../../utils';
import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & SxProp;

const DatagridBody = ({ ...props }: PropsWithChildren<Props>) => <BaseDatagridBody {...props} />;

const BaseDatagridBody = styled.div<SxProp>`
  width: inherit;

  & > div:not(:last-child) {
    border-bottom-width: ${forcePixelValue(1)};
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors['border/neutral']};
  }

  ${sx}
`;

export default DatagridBody;
export type { Props as DatagridBodyProps };
