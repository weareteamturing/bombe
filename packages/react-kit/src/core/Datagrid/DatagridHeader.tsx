import { forcePixelValue } from '@teamturing/utils';
import { AriaAttributes, ElementType, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { isValidElementType } from 'react-is';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';
import View from '../View';

type Props = {
  leadingVisual?: ElementType | ReactNode;
  trailingAction?: ReactElement<HTMLAttributes<HTMLElement>>;
} & SxProp &
  Pick<HTMLAttributes<HTMLDivElement>, 'id'> &
  AriaAttributes;

const DatagridHeader = ({ leadingVisual: LeadingVisual, trailingAction, ...props }: Props) => (
  <DataGridHeaderWrapper {...props}>
    {/* leadingVisual은 문자열이면 제목 텍스트로 렌더되어 표의 접근 가능한 이름으로 사용되므로 숨기지 않는다. */}
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

  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  ${sx}
`;

export default DatagridHeader;
export type { Props as DatagridHeaderProps };
