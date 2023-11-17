import { forcePixelValue } from '@teamturing/utils';
import { ElementType, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { isValidElementType } from 'react-is';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';
import View from '../View';

type Props = {
  leadingVisual?: ElementType | ReactNode;
  trailingAction?: ReactElement<HTMLAttributes<HTMLElement>>;
} & SxProp;

const DatagridHeader = ({ leadingVisual: LeadingVisual, trailingAction, ...props }: Props) => (
  <DataGridHeaderWrapper {...props}>
    <View sx={{ fontSize: 'xs', fontWeight: 'medium', lineHeight: 2, color: 'text/neutral/subtle' }}>
      {typeof LeadingVisual !== 'string' && isValidElementType(LeadingVisual) ? (
        <LeadingVisual />
      ) : (
        (LeadingVisual as ReactNode)
      )}
    </View>
    <View>{trailingAction}</View>
  </DataGridHeaderWrapper>
);

const DataGridHeaderWrapper = styled.div<SxProp>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: ${({ theme }) => `${forcePixelValue(theme.space[1])} ${forcePixelValue(theme.space[4])}`};
  background-color: ${({ theme }) => theme.colors['bg/neutral']};

  ${sx}
`;

export default DatagridHeader;
export type { Props as DatagridHeaderProps };
