import palette from '../../foundation/palette';

const textColor = {
  'text/primary': palette.violet500,
  'text/accent/blue': palette.blue500,
  'text/accent/green': palette.green500,
  'text/accent/yellow': palette.yellow500,
  'text/accent/red': palette.red500,
  'text/neutral/subtlest': palette.gray400,
  'text/neutral/subtler': palette.gray500,
  'text/neutral/subtle': palette.gray700,
  'text/neutral': palette.gray900,
  'text/inverse': palette.white,
  'text/inverse/subtle': palette.gray200,
  'text/inverse/subtler': palette.gray300,
  'text/disabled': palette.gray400,
  'text/success': palette.green500,
  'text/warning': palette.yellow500,
  'text/danger': palette.red500,
  'text/selected/neutral': palette.gray900,
} as const;

const bgColor = {
  'bg/secondary': palette.violet50,
  'bg/secondary/hovered': palette.violet200,
  'bg/secondary/pressed': palette.violet200,
  'bg/primary': palette.violet500,
  'bg/primary/hovered': palette.violet700,
  'bg/primary/pressed': palette.violet700,

  'bg/neutral/subtler': palette.transparent,
  'bg/neutral/subtler/hovered': palette.gray100,
  'bg/neutral/subtler/pressed': palette.gray100,
  'bg/neutral/subtle': palette.gray50,
  'bg/neutral/subtle/hovered': palette.gray200,
  'bg/neutral/subtle/pressed': palette.gray200,
  'bg/neutral': palette.gray100,
  'bg/neutral/hovered': palette.gray300,
  'bg/neutral/pressed': palette.gray300,
  'bg/neutral/bold': palette.gray700,
  'bg/neutral/bold/hovered': palette.gray900,
  'bg/neutral/bold/pressed': palette.gray900,
  'bg/neutral/bolder': palette.gray900,
  'bg/neutral/bolder/hovered': palette.black,
  'bg/neutral/bolder/pressed': palette.black,

  'bg/disabled': palette.gray100,
  'bg/disabled/subtlest': palette.transparent,

  'bg/input': palette.white,

  'bg/accent/green/subtlest': palette.green50,
  'bg/accent/yellow/subtlest': palette.yellow50,
  'bg/accent/red/subtlest': palette.red50,
  'bg/accent/red/subtle': palette.red400,
  'bg/accent/red': palette.red500,
  'bg/accent/gray/subtlest': palette.gray200,
  'bg/accent/blue/subtlest': palette.blue50,

  'bg/selected/violet': palette.violet500,
  'bg/selected/neutral': palette.gray900,
  'bg/selected/neutral/subtle': palette.gray100,

  'bg/inverse': palette.black,
  'bg/inverse/subtlest': palette.white10A,

  'bg/success': palette.green50,
  'bg/success/bold': palette.green500,

  'bg/warning': palette.yellow50,
  'bg/warning/bold': palette.yellow500,

  'bg/danger': palette.red50,
  'bg/danger/bold': palette.red400,
  'bg/danger/bold/hovered': palette.red600,
  'bg/danger/bold/pressed': palette.red600,
} as const;

const borderColor = {
  'border/neutral/subtle': palette.gray100,
  'border/neutral': palette.gray200,
  'border/neutral/bolder': palette.gray300,
  'border/input': palette.gray200,
  'border/inverse': palette.white10A,
  'border/disabled': palette.gray100,
  'border/primary': palette.violet500,
  'border/hovered': palette.blue300,
  'border/focused': palette.blue500,
  'border/danger': palette.red500,
  'border/success': palette.green500,
} as const;

const iconColor = {
  'icon/neutral': palette.gray300,
  'icon/neutral/bold': palette.gray400,
  'icon/neutral/bolder': palette.gray700,
  'icon/accent/gray': palette.gray900,
  'icon/accent/blue': palette.blue500,
  'icon/accent/blue/bold': palette.blue700,
  'icon/accent/green': palette.green500,
  'icon/accent/yellow': palette.yellow500,
  'icon/accent/red': palette.red500,
  'icon/inverse': palette.white,
  'icon/disabled': palette.gray300,
  'icon/disabled/subtler': palette.gray200,
  'icon/selected/primary': palette.violet500,
  'icon/selected/neutral': palette.gray900,
  'icon/primary': palette.violet500,
  'icon/primary/subtle': palette.violet300,
  'icon/primary/bold': palette.violet700,
  'icon/success': palette.green500,
  'icon/warning': palette.yellow500,
  'icon/danger': palette.red500,
} as const;

const linkColor = {
  'link': palette.blue500,
  'link/hovered': palette.blue700,
  'link/pressed': palette.blue700,
  'link/neutral': palette.gray500,
  'link/neutral/hovered': palette.gray700,
  'link/neutral/pressed': palette.gray700,
  'link/neutral/bold': palette.gray700,
  'link/neutral/bold/hovered': palette.gray900,
  'link/neutral/bold/pressed': palette.gray900,
  'link/disabled': palette.gray700,
} as const;

const dimColor = {
  dim: palette.black60A,
} as const;

const scaleColor = {
  'scale/violet/0': palette.violet50,
  'scale/violet/1': palette.violet100,
  'scale/violet/2': palette.violet200,
  'scale/violet/3': palette.violet300,
  'scale/violet/4': palette.violet400,
  'scale/violet/5': palette.violet500,
  'scale/violet/6': palette.violet600,
  'scale/violet/7': palette.violet700,
  'scale/violet/8': palette.violet800,
  'scale/violet/9': palette.violet900,
};

const color = {
  ...textColor,
  ...bgColor,
  ...borderColor,
  ...iconColor,
  ...linkColor,
  ...dimColor,
  ...scaleColor,
} as const;

type TextColorKey = keyof typeof textColor;
type BgColorKey = keyof typeof bgColor;
type BorderColorKey = keyof typeof borderColor;
type IconColorKey = keyof typeof iconColor;
type LinkColorKey = keyof typeof linkColor;
type DimColorKey = keyof typeof dimColor;
type ScaleColorKey = keyof typeof scaleColor;
type ColorKey = keyof typeof color;

export default color;
export { textColor, bgColor, borderColor, iconColor, linkColor, dimColor, scaleColor };
export type {
  ColorKey,
  TextColorKey,
  BgColorKey,
  BorderColorKey,
  IconColorKey,
  LinkColorKey,
  DimColorKey,
  ScaleColorKey,
};
