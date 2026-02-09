import { forwardRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { BetterSystemStyleObject } from '../../utils/styled-system';
import Text from '../Text';
import type { TextProps } from '../Text';

type GradientTextProps = { variant?: 'violet' | 'pinkBlue' } & TextProps;

const BaseGradientText = styled(Text)<GradientTextProps>(
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

const GradientText = forwardRef<HTMLElement, GradientTextProps>(({ variant = 'violet', ...props }, ref) => (
  <BaseGradientText ref={ref} variant={variant} {...props} />
));

GradientText.displayName = 'GradientText';

export default GradientText;
export type { GradientTextProps };
