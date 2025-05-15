import css, { SystemStyleObject } from '@styled-system/css';
import * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, system, Theme, ThemeValue } from 'styled-system';

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

type LineClampProps<ThemeType extends Theme = RequiredTheme> = {
  lineClamp?: ResponsiveValue<CSS.Property.LineClamp, ThemeType> | undefined;
};
const lineClamp = system({ lineClamp: { property: 'WebkitLineClamp', scale: 'WebkitLineClamp' } });

type GapProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'space', ThemeType>> = {
  gap?: ResponsiveValue<TVal, ThemeType> | undefined;
};
const gap = system({ gap: { property: 'gap', scale: 'space' } });

type ColumnGapProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'space', ThemeType>> = {
  columnGap?: ResponsiveValue<TVal, ThemeType> | undefined;
};
const columnGap = system({ columnGap: { property: 'columnGap', scale: 'space' } });

type RowGapProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'space', ThemeType>> = {
  rowGap?: ResponsiveValue<TVal, ThemeType> | undefined;
};
const rowGap = system({ rowGap: { property: 'rowGap', scale: 'space' } });

export { sx, textDecoration, whiteSpace, wordBreak, lineClamp, gap, columnGap, rowGap };
export type {
  BetterSystemStyleObject,
  AsProp,
  TextDecorationProps,
  WhiteSpaceProps,
  WordBreakProps,
  LineClampProps,
  GapProps,
  ColumnGapProps,
  RowGapProps,
};
