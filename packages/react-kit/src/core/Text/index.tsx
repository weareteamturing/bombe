import { ColorKey, FontSizeKey, FontWeightKey, LineHeightKey, TypographyKey } from '@teamturing/token-studio';
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
  BetterSystemStyleObject,
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

const Text = styled.span.attrs<Props>((props) => ({ color: props.color ?? 'text/neutral' }))(
  { 'display': 'block', 'whiteSpace': 'pre-wrap', '& > span': { display: 'inline' } },
  ({ theme }) =>
    variant<BetterSystemStyleObject, TypographyKey, 'typography'>({
      prop: 'typography',
      variants: {
        'display1': {
          fontSize: theme.fontSizes.display1,
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights[1],
        },
        'display2': {
          fontSize: theme.fontSizes.display2,
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights[1],
        },
        'display3': {
          fontSize: theme.fontSizes.display3,
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights[1],
        },
        'display4': {
          fontSize: theme.fontSizes.display4,
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights[2],
        },
        'xxl/regular': {
          fontSize: theme.fontSizes.xxl,
          fontWeight: theme.fontWeights.regular,
          lineHeight: theme.lineHeights[2],
        },
        'xxl': {
          fontSize: theme.fontSizes.xxl,
          fontWeight: theme.fontWeights.medium,
          lineHeight: theme.lineHeights[2],
        },
        'xxl/bold': {
          fontSize: theme.fontSizes.xxl,
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights[2],
        },
        'xl/regular': {
          fontSize: theme.fontSizes.xl,
          fontWeight: theme.fontWeights.regular,
          lineHeight: theme.lineHeights[2],
        },
        'xl': { fontSize: theme.fontSizes.xl, fontWeight: theme.fontWeights.medium, lineHeight: theme.lineHeights[2] },
        'xl/bold': {
          fontSize: theme.fontSizes.xl,
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights[2],
        },
        'l/regular': {
          fontSize: theme.fontSizes.l,
          fontWeight: theme.fontWeights.regular,
          lineHeight: theme.lineHeights[2],
        },
        'l': { fontSize: theme.fontSizes.l, fontWeight: theme.fontWeights.medium, lineHeight: theme.lineHeights[2] },
        'l/bold': { fontSize: theme.fontSizes.l, fontWeight: theme.fontWeights.bold, lineHeight: theme.lineHeights[2] },
        'm/regular': {
          fontSize: theme.fontSizes.m,
          fontWeight: theme.fontWeights.regular,
          lineHeight: theme.lineHeights[2],
        },
        'm': { fontSize: theme.fontSizes.m, fontWeight: theme.fontWeights.medium, lineHeight: theme.lineHeights[2] },
        'm/bold': { fontSize: theme.fontSizes.m, fontWeight: theme.fontWeights.bold, lineHeight: theme.lineHeights[2] },
        's/regular': {
          fontSize: theme.fontSizes.s,
          fontWeight: theme.fontWeights.regular,
          lineHeight: theme.lineHeights[2],
        },
        's': { fontSize: theme.fontSizes.s, fontWeight: theme.fontWeights.medium, lineHeight: theme.lineHeights[2] },
        's/bold': { fontSize: theme.fontSizes.s, fontWeight: theme.fontWeights.bold, lineHeight: theme.lineHeights[2] },
        'xs/regular': {
          fontSize: theme.fontSizes.xs,
          fontWeight: theme.fontWeights.regular,
          lineHeight: theme.lineHeights[2],
        },
        'xs': { fontSize: theme.fontSizes.xs, fontWeight: theme.fontWeights.medium, lineHeight: theme.lineHeights[2] },
        'xs/bold': {
          fontSize: theme.fontSizes.xs,
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights[2],
        },
        'xxs/regular': {
          fontSize: theme.fontSizes.xxs,
          fontWeight: theme.fontWeights.regular,
          lineHeight: theme.lineHeights[2],
        },
        'xxs': {
          fontSize: theme.fontSizes.xxs,
          fontWeight: theme.fontWeights.medium,
          lineHeight: theme.lineHeights[2],
        },
        'xxs/bold': {
          fontSize: theme.fontSizes.xxs,
          fontWeight: theme.fontWeights.bold,
          lineHeight: theme.lineHeights[2],
        },
      },
    }),
  compose(wordBreak, whiteSpace, textDecoration, fontSize, fontWeight, lineHeight, color, textAlign),
  sx,
);

export default Text;
export type { Props as TextProps };
