import styled from 'styled-components';

import Text from '../Text';
import type { TextProps } from '../Text';

type Props = {} & TextProps;

const GradientText = styled(Text)<Props>`
  background: ${({ theme }) => `linear-gradient(${theme.gradients['text/accent']})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default GradientText;
export type { Props as GradientTextProps };
