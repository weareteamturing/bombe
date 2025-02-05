import { forcePixelValue } from '@teamturing/utils';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & SxProp;

const DatagridBody = ({ ...props }: PropsWithChildren<Props>) => <BaseDatagridBody {...props} />;

const BaseDatagridBody = styled.div<SxProp>`
  width: inherit;

  border-radius: inherit;

  & > *:not(:last-child) {
    border-bottom-width: ${forcePixelValue(1)};
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors['border/neutral']};
  }

  & > *:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  ${sx}
`;

export default DatagridBody;
export type { Props as DatagridBodyProps };
