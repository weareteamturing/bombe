"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineHeights = exports.fontWeights = exports.fontSizes = void 0;
const fontSizes_1 = __importDefault(require("./fontSizes"));
exports.fontSizes = fontSizes_1.default;
const fontWeights_1 = __importDefault(require("./fontWeights"));
exports.fontWeights = fontWeights_1.default;
const lineHeights_1 = __importDefault(require("./lineHeights"));
exports.lineHeights = lineHeights_1.default;
const typography = {
    'display1': { fontSize: fontSizes_1.default.display1, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[1] },
    'display2': { fontSize: fontSizes_1.default.display2, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[1] },
    'display3': { fontSize: fontSizes_1.default.display3, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[1] },
    'display4': { fontSize: fontSizes_1.default.display4, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[2] },
    'xxl/regular': { fontSize: fontSizes_1.default.xxl, fontWeight: fontWeights_1.default.regular, lineHeight: lineHeights_1.default[2] },
    'xxl': { fontSize: fontSizes_1.default.xxl, fontWeight: fontWeights_1.default.medium, lineHeight: lineHeights_1.default[2] },
    'xxl/bold': { fontSize: fontSizes_1.default.xxl, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[2] },
    'xl/regular': { fontSize: fontSizes_1.default.xl, fontWeight: fontWeights_1.default.regular, lineHeight: lineHeights_1.default[2] },
    'xl': { fontSize: fontSizes_1.default.xl, fontWeight: fontWeights_1.default.medium, lineHeight: lineHeights_1.default[2] },
    'xl/bold': { fontSize: fontSizes_1.default.xl, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[2] },
    'l/regular': { fontSize: fontSizes_1.default.l, fontWeight: fontWeights_1.default.regular, lineHeight: lineHeights_1.default[2] },
    'l': { fontSize: fontSizes_1.default.l, fontWeight: fontWeights_1.default.medium, lineHeight: lineHeights_1.default[2] },
    'l/bold': { fontSize: fontSizes_1.default.l, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[2] },
    'm/regular': { fontSize: fontSizes_1.default.m, fontWeight: fontWeights_1.default.regular, lineHeight: lineHeights_1.default[2] },
    'm': { fontSize: fontSizes_1.default.m, fontWeight: fontWeights_1.default.medium, lineHeight: lineHeights_1.default[2] },
    'm/bold': { fontSize: fontSizes_1.default.m, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[2] },
    's/regular': { fontSize: fontSizes_1.default.s, fontWeight: fontWeights_1.default.regular, lineHeight: lineHeights_1.default[2] },
    's': { fontSize: fontSizes_1.default.s, fontWeight: fontWeights_1.default.medium, lineHeight: lineHeights_1.default[2] },
    's/bold': { fontSize: fontSizes_1.default.s, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[2] },
    'xs/regular': { fontSize: fontSizes_1.default.xs, fontWeight: fontWeights_1.default.regular, lineHeight: lineHeights_1.default[2] },
    'xs': { fontSize: fontSizes_1.default.xs, fontWeight: fontWeights_1.default.medium, lineHeight: lineHeights_1.default[2] },
    'xs/bold': { fontSize: fontSizes_1.default.xs, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[2] },
    'xxs/regular': { fontSize: fontSizes_1.default.xxs, fontWeight: fontWeights_1.default.regular, lineHeight: lineHeights_1.default[2] },
    'xxs': { fontSize: fontSizes_1.default.xxs, fontWeight: fontWeights_1.default.medium, lineHeight: lineHeights_1.default[2] },
    'xxs/bold': { fontSize: fontSizes_1.default.xxs, fontWeight: fontWeights_1.default.bold, lineHeight: lineHeights_1.default[2] },
};
exports.default = typography;
