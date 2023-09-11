import {
  ColorKey,
  FontSizeKey,
  FontWeightKey,
  LineHeightKey,
  TypographyKey,
  typography,
} from '@teamturing/token-studio';
import styled from 'styled-components';
import {
  compose,
  fontSize,
  fontWeight,
  color,
  textAlign,
  FontSizeProps,
  FontWeightProps,
  ColorProps,
  TextAlignProps,
  Theme,
  LineHeightProps,
  lineHeight,
  variant,
  ResponsiveValue,
} from 'styled-system';

import {
  SxProp,
  TextDecorationProps,
  WhiteSpaceProps,
  WordBreakProps,
  sx,
  textDecoration,
  whiteSpace,
  wordBreak,
} from '../../utils/styled-system';

type Props = {
  typography?: ResponsiveValue<TypographyKey>;
} & SxProp &
  WordBreakProps &
  WhiteSpaceProps &
  TextDecorationProps &
  FontSizeProps<Theme, FontSizeKey> &
  FontWeightProps<Theme, FontWeightKey> &
  LineHeightProps<Theme, LineHeightKey> &
  TextAlignProps &
  ColorProps<Theme, ColorKey>;

const Text = styled.span<Props>(
  { 'display': 'block', 'whiteSpace': 'pre-wrap', '& > span': { display: 'inline' } },
  variant<(typeof typography)[TypographyKey], TypographyKey, 'typography'>({
    prop: 'typography',
    variants: {
      'display1': typography.display1,
      'display2': typography.display2,
      'display3': typography.display3,
      'display4': typography.display4,
      'xxl/regular': typography['xxl/regular'],
      'xxl': typography['xxl'],
      'xxl/bold': typography['xxl/bold'],
      'xl/regular': typography['xl/regular'],
      'xl': typography['xl'],
      'xl/bold': typography['xl/bold'],
      'l/regular': typography['l/regular'],
      'l': typography['l'],
      'l/bold': typography['l/bold'],
      'm/regular': typography['m/regular'],
      'm': typography['m'],
      'm/bold': typography['m/bold'],
      's/regular': typography['s/regular'],
      's': typography['s'],
      's/bold': typography['s/bold'],
      'xs/regular': typography['xs/regular'],
      'xs': typography['xs'],
      'xs/bold': typography['xs/bold'],
      'xxs/regular': typography['xxs/regular'],
      'xxs': typography['xxs'],
      'xxs/bold': typography['xxs/bold'],
    },
  }),
  compose(wordBreak, whiteSpace, textDecoration, fontSize, fontWeight, lineHeight, color, textAlign),
  sx,
);

Text.defaultProps = {
  color: 'text/neutral',
};

export default Text;
export type { Props as TextProps };
