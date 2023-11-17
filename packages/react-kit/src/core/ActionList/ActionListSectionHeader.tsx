import { forcePixelValue } from '@teamturing/utils';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

type Props = {} & SxProp;

const ActionListSectionHeader = ({ ...props }: PropsWithChildren<Props>) => {
  return <BaseActionListSectionHeader role={'presentation'} {...props} />;
};

const BaseActionListSectionHeader = styled.div<Props>`
  color: ${({ theme }) => theme.colors['text/neutral/subtlest']};
  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xxs)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights[2]};

  white-space: pre-wrap;

  padding: ${({ theme }) => `${forcePixelValue(theme.space[1])} ${forcePixelValue(theme.space[3])}}`};

  ${sx};
`;

export default ActionListSectionHeader;
export type { Props as ActionListSectionHeaderProps };
