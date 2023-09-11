import css, { SystemStyleObject } from '@styled-system/css';
import * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, system, Theme } from 'styled-system';

// Support CSS custom properties in the `sx` prop
type CSSCustomProperties = {
  [key: `--${string}`]: string | number;
};

type CSSSelectorObject = {
  [cssSelector: string]: SystemStyleObject | CSSCustomProperties;
};

type BetterSystemStyleObject = SystemStyleObject | CSSCustomProperties | CSSSelectorObject;
type AsProp = { as?: any | undefined };

export interface SxProp {
  sx?: BetterSystemStyleObject;
}
const sx = (props: SxProp) => css(props.sx);

type TextDecorationProps<ThemeType extends Theme = RequiredTheme> = {
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration, ThemeType> | undefined;
};
const textDecoration = system({ textDecoration: { property: 'textDecoration', scale: 'textDecoration' } });

type WhiteSpaceProps<ThemeType extends Theme = RequiredTheme> = {
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace, ThemeType> | undefined;
};
const whiteSpace = system({ whiteSpace: { property: 'whiteSpace', scale: 'whiteSpace' } });

type WordBreakProps<ThemeType extends Theme = RequiredTheme> = {
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak, ThemeType> | undefined;
};
const wordBreak = system({ wordBreak: { property: 'wordBreak', scale: 'wordBreak' } });

export { sx, textDecoration, whiteSpace, wordBreak };
export type { BetterSystemStyleObject, AsProp, TextDecorationProps, WhiteSpaceProps, WordBreakProps };
