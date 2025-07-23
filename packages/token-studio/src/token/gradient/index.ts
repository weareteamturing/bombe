import { colorStopList as fColorStopList, direction as fDirection } from '../../foundation/gradient';

const generateGradientTokenValue = (direction: keyof typeof fDirection, colorStopList: keyof typeof fColorStopList) =>
  `${fDirection[direction]}, ${fColorStopList[colorStopList]}`;

const textGradient = {
  'text/accent': generateGradientTokenValue('directionToRightBottom', 'colorStopListVioletPink'),
  'text/accent/pinkblue': generateGradientTokenValue('directionToRightBottom', 'colorStopListPinkVioletBlue'),
} as const;

const bgGradient = {
  'bg/accent/violet': generateGradientTokenValue('directionToRightBottom', 'colorStopListVioletPink'),
  'bg/accent/neutral': generateGradientTokenValue('directionToRightBottom', 'colorStopListBlackGray'),
} as const;

const iconGradient = {
  'icon/accent/pinkblue': generateGradientTokenValue('directionToRightBottom', 'colorStopListPinkVioletBlue'),
};

const borderGradient = {
  'border/accent/violet': generateGradientTokenValue('directionToRightBottom', 'colorStopListVioletPink'),
} as const;

const overlayGradient = {
  'overlay/subtlest/toright': generateGradientTokenValue('directionToRight', 'colorStopListWhite'),
  'overlay/subtlest/toleft': generateGradientTokenValue('directionToLeft', 'colorStopListWhite'),
  'overlay/subtlest/totop': generateGradientTokenValue('directionToTop', 'colorStopListWhite'),
  'overlay/subtlest/tobottom': generateGradientTokenValue('directionToBottom', 'colorStopListWhite'),

  'overlay/floating/toright': generateGradientTokenValue('directionToRight', 'colorStopListWhite'),
  'overlay/floating/toleft': generateGradientTokenValue('directionToLeft', 'colorStopListWhite'),
  'overlay/floating/totop': generateGradientTokenValue('directionToTop', 'colorStopListWhite'),
  'overlay/floating/tobottom': generateGradientTokenValue('directionToBottom', 'colorStopListWhite'),

  'overlay/bold/toright': generateGradientTokenValue('directionToRight', 'colorStopListBlack'),
  'overlay/bold/toleft': generateGradientTokenValue('directionToLeft', 'colorStopListBlack'),
  'overlay/bold/totop': generateGradientTokenValue('directionToTop', 'colorStopListBlack'),
  'overlay/bold/tobottom': generateGradientTokenValue('directionToBottom', 'colorStopListBlack'),
} as const;

const gradient = {
  ...textGradient,
  ...iconGradient,
  ...bgGradient,
  ...borderGradient,
  ...overlayGradient,
} as const;

type TextGradientKey = keyof typeof textGradient;
type IconGradientKey = keyof typeof iconGradient;
type BgGradientKey = keyof typeof bgGradient;
type BorderGradientKey = keyof typeof borderGradient;
type OverlayGradientKey = keyof typeof overlayGradient;
type GradientKey = keyof typeof gradient;

export default gradient;
export { textGradient, iconGradient, bgGradient, borderGradient, overlayGradient };
export type { TextGradientKey, IconGradientKey, BgGradientKey, BorderGradientKey, OverlayGradientKey, GradientKey };
