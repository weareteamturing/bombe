import styled from 'styled-components';
import { variant } from 'styled-system';

import { BetterSystemStyleObject } from '../../utils/styled-system';
import Text from '../Text';
import type { TextProps } from '../Text';

type Props = { variant?: 'violet' | 'pinkBlue' } & TextProps;

const GradientText = styled(Text)<Props>(
  ({ theme }) =>
    variant<BetterSystemStyleObject>({
      prop: 'variant',
      variants: {
        violet: { background: `linear-gradient(${theme.gradients['text/accent']})` },
        pinkBlue: { background: `linear-gradient(${theme.gradients['text/accent/pinkblue']})` },
      },
    }),
  {
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
);

GradientText.defaultProps = {
  variant: 'violet',
};

export default GradientText;
export type { Props as GradientTextProps };
