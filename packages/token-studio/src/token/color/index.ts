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
  'text/selected': palette.gray900,
  'text/weak': palette.gray300,
} as const;

const bgColor = {
  'bg/secondary': palette.violet50,
  'bg/secondary/hovered': palette.violet200,
  'bg/secondary/pressed': palette.violet200,
  'bg/primary': palette.violet500,
  'bg/primary/hovered': palette.violet700,
  'bg/primary/pressed': palette.violet700,
  'bg/primary/disabled': palette.violet100,

  'bg/neutral/subtlest': palette.transparent,
  'bg/neutral/subtlest/hovered': palette.gray50,
  'bg/neutral/subtlest/pressed': palette.gray50,
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

  'bg/accent/blue/subtlest': palette.blue50,
  'bg/accent/green/subtlest': palette.green50,
  'bg/accent/yellow/subtlest': palette.yellow50,
  'bg/accent/red/subtlest': palette.red50,
  'bg/accent/red/subtle': palette.red400,
  'bg/accent/red': palette.red500,
  'bg/accent/gray/subtlest': palette.gray200,

  'bg/selected/violet': palette.violet500,
  'bg/selected': palette.gray900,
  'bg/selected/subtle': palette.gray100,

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
  'border/selected': palette.gray900,
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
  'icon/accent/blue/subtle': palette.blue200,
  'icon/accent/blue': palette.blue500,
  'icon/accent/blue/bold': palette.blue700,
  'icon/accent/green': palette.green500,
  'icon/accent/yellow': palette.yellow500,
  'icon/accent/red': palette.red500,
  'icon/inverse': palette.white,
  'icon/disabled': palette.gray300,
  'icon/disabled/subtler': palette.gray200,
  'icon/selected/violet': palette.violet500,
  'icon/selected': palette.gray900,
  'icon/primary/subtle': palette.violet300,
  'icon/primary': palette.violet500,
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

  'scale/gray/0': palette.gray50,
  'scale/gray/1': palette.gray100,
  'scale/gray/2': palette.gray200,
  'scale/gray/3': palette.gray300,
  'scale/gray/4': palette.gray400,
  'scale/gray/5': palette.gray500,
  'scale/gray/6': palette.gray600,
  'scale/gray/7': palette.gray700,
  'scale/gray/8': palette.gray800,
  'scale/gray/9': palette.gray900,

  'scale/blue/0': palette.blue50,
  'scale/blue/1': palette.blue100,
  'scale/blue/2': palette.blue200,
  'scale/blue/3': palette.blue300,
  'scale/blue/4': palette.blue400,
  'scale/blue/5': palette.blue500,
  'scale/blue/6': palette.blue600,
  'scale/blue/7': palette.blue700,
  'scale/blue/8': palette.blue800,
  'scale/blue/9': palette.blue900,

  'scale/green/0': palette.green50,
  'scale/green/1': palette.green100,
  'scale/green/2': palette.green200,
  'scale/green/3': palette.green300,
  'scale/green/4': palette.green400,
  'scale/green/5': palette.green500,
  'scale/green/6': palette.green600,
  'scale/green/7': palette.green700,
  'scale/green/8': palette.green800,
  'scale/green/9': palette.green900,

  'scale/pink/0': palette.fuchsiaPink50,
  'scale/pink/1': palette.fuchsiaPink100,
  'scale/pink/2': palette.fuchsiaPink200,
  'scale/pink/3': palette.fuchsiaPink300,
  'scale/pink/4': palette.fuchsiaPink400,
  'scale/pink/5': palette.fuchsiaPink500,
  'scale/pink/6': palette.fuchsiaPink600,
  'scale/pink/7': palette.fuchsiaPink700,
  'scale/pink/8': palette.fuchsiaPink800,
  'scale/pink/9': palette.fuchsiaPink900,

  'scale/skyblue/0': palette.skyBlue50,
  'scale/skyblue/1': palette.skyBlue100,
  'scale/skyblue/2': palette.skyBlue200,
  'scale/skyblue/3': palette.skyBlue300,
  'scale/skyblue/4': palette.skyBlue400,
  'scale/skyblue/5': palette.skyBlue500,
  'scale/skyblue/6': palette.skyBlue600,
  'scale/skyblue/7': palette.skyBlue700,
  'scale/skyblue/8': palette.skyBlue800,
  'scale/skyblue/9': palette.skyBlue900,

  'scale/red/0': palette.indianRed50,
  'scale/red/1': palette.indianRed100,
  'scale/red/2': palette.indianRed200,
  'scale/red/3': palette.indianRed300,
  'scale/red/4': palette.indianRed400,
  'scale/red/5': palette.indianRed500,
  'scale/red/6': palette.indianRed600,
  'scale/red/7': palette.indianRed700,
  'scale/red/8': palette.indianRed800,
  'scale/red/9': palette.indianRed900,

  'scale/yellow/0': palette.mustardYellow50,
  'scale/yellow/1': palette.mustardYellow100,
  'scale/yellow/2': palette.mustardYellow200,
  'scale/yellow/3': palette.mustardYellow300,
  'scale/yellow/4': palette.mustardYellow400,
  'scale/yellow/5': palette.mustardYellow500,
  'scale/yellow/6': palette.mustardYellow600,
  'scale/yellow/7': palette.mustardYellow700,
  'scale/yellow/8': palette.mustardYellow800,
  'scale/yellow/9': palette.mustardYellow900,
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
