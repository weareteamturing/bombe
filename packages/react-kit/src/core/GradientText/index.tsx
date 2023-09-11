import styled from 'styled-components';

import Text from '../Text';

const GradientText = styled(Text)`
  background: ${({ theme }) => `linear-gradient(${theme.gradients['text/accent']})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default GradientText;
