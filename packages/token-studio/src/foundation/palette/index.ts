const gray = {
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#8D94A0',
  gray500: '#7A828D',
  gray600: '#6F7680',
  gray700: '#575C64',
  gray800: '#43484E',
  gray900: '#33373B',
} as const;

const violet = {
  violet50: '#F3EFFD',
  violet100: '#E8E1FB',
  violet200: '#D9CDF9',
  violet300: '#C6B5F6',
  violet400: '#9C7EEF',
  violet500: '#835EEB',
  violet600: '#7756D6',
  violet700: '#5D43A7',
  violet800: '#483481',
  violet900: '#372763',
} as const;

const green = {
  green50: '#E9FAF6',
  green100: '#BAEFE2',
  green200: '#98E8D4',
  green300: '#69DDC0',
  green400: '#4CD6B4',
  green500: '#1FCCA1',
  green600: '#1CBA93',
  green700: '#169172',
  green800: '#117059',
  green900: '#0D5644',
} as const;

const yellow = {
  yellow50: '#FFF9E6',
  yellow100: '#FFECB2',
  yellow200: '#FFE28D',
  yellow300: '#FFD559',
  yellow400: '#FFCD39',
  yellow500: '#FFC107',
  yellow600: '#E8B006',
  yellow700: '#B58905',
  yellow800: '#8C6A04',
  yellow900: '#6B5103',
} as const;

const red = {
  red50: '#FEE9EB',
  red100: '#FBBCC0',
  red200: '#F99CA2',
  red300: '#F66E78',
  red400: '#F5525D',
  red500: '#F22735',
  red600: '#DC2330',
  red700: '#AC1C26',
  red800: '#85151D',
  red900: '#661016',
} as const;

const blue = {
  blue50: '#edf2fd',
  blue100: '#c6d8fa',
  blue200: '#abc5f7',
  blue300: '#84aaf4',
  blue400: '#6d99f1',
  blue500: '#4880ee',
  blue600: '#4274d9',
  blue700: '#335ba9',
  blue800: '#284683',
  blue900: '#1e3664',
} as const;

const shade = {
  transparent: '#FFFFFF00',
  white: '#FFFFFF',
  white10A: '#FFFFFF1A',
  black: '#000000',
  black60A: '#00000099',
} as const;

const fuchsiaPink = {
  fuchsiaPink50: '#FCF2FD',
  fuchsiaPink100: '#F5D6F8',
  fuchsiaPink200: '#F0C2F4',
  fuchsiaPink300: '#E9A7EF',
  fuchsiaPink400: '#E595EC',
  fuchsiaPink500: '#DE7BE7',
  fuchsiaPink600: '#CA70D2',
  fuchsiaPink700: '#9E57A4',
  fuchsiaPink800: '#7A447F',
  fuchsiaPink900: '#5D3461',
} as const;

const skyBlue = {
  skyBlue50: '#EFF9FD',
  skyBlue100: '#CFEDF8',
  skyBlue200: '#B7E4F5',
  skyBlue300: '#96D8F1',
  skyBlue400: '#82D1EE',
  skyBlue500: '#63C5EA',
  skyBlue600: '#5AB3D5',
  skyBlue700: '#468CA6',
  skyBlue800: '#366C81',
  skyBlue900: '#2A5362',
} as const;

const indianRed = {
  indianRed50: '#FDF0F0',
  indianRed100: '#F9CFCF',
  indianRed200: '#F6B8B8',
  indianRed300: '#F29898',
  indianRed400: '#F08484',
  indianRed500: '#EC6565',
  indianRed600: '#D75C5C',
  indianRed700: '#A84848',
  indianRed800: '#823838',
  indianRed900: '#632A2A',
} as const;

const mustardYellow = {
  mustardYellow50: '#FEF9EE',
  mustardYellow100: '#FCEBCC',
  mustardYellow200: '#FAE2B3',
  mustardYellow300: '#F8D490',
  mustardYellow400: '#F7CC7A',
  mustardYellow500: '#F5BF59',
  mustardYellow600: '#DFAE51',
  mustardYellow700: '#AE883F',
  mustardYellow800: '#876931',
  mustardYellow900: '#675025',
} as const;

const palette = {
  ...gray,
  ...violet,
  ...green,
  ...yellow,
  ...red,
  ...blue,
  ...shade,
  ...fuchsiaPink,
  ...skyBlue,
  ...indianRed,
  ...mustardYellow,
};

export default palette;
export { gray, violet, green, yellow, red, blue, shade, fuchsiaPink, skyBlue, indianRed, mustardYellow };
