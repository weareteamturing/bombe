import { forcePixelValue } from '@teamturing/utils';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & SxProp;

const DatagridSubheader = ({ ...props }: PropsWithChildren<Props>) => (
  <DataGridSubheaderWrapper {...props}></DataGridSubheaderWrapper>
);

const DataGridSubheaderWrapper = styled.div<SxProp>`
  padding: ${({ theme }) => `${forcePixelValue(theme.space[2])} ${forcePixelValue(theme.space[4])}`};
  background-color: ${({ theme }) => theme.colors.surface};

  border-bottom-width: ${forcePixelValue(1)};
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors['border/neutral']};

  ${sx};
`;

export default DatagridSubheader;
export type { Props as DatagridSubheaderProps };
