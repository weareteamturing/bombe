"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shade = exports.blue = exports.red = exports.yellow = exports.green = exports.violet = exports.gray = void 0;
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
};
exports.gray = gray;
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
};
exports.violet = violet;
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
};
exports.green = green;
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
};
exports.yellow = yellow;
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
};
exports.red = red;
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
};
exports.blue = blue;
const shade = {
    transparent: '#FFFFFF00',
    white: '#FFFFFF',
    white10A: '#FFFFFF1A',
    black: '#000000',
    black60A: '#00000099',
};
exports.shade = shade;
const palette = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, gray), violet), green), yellow), red), blue), shade);
exports.default = palette;
