"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overlayGradient = exports.borderGradient = exports.bgGradient = exports.textGradient = void 0;
const gradient_1 = require("../../foundation/gradient");
const generateGradientTokenValue = (direction, colorStopList) => `${gradient_1.direction[direction]}, ${gradient_1.colorStopList[colorStopList]}`;
const textGradient = {
    'text/accent': generateGradientTokenValue('directionToRightBottom', 'colorStopListVioletPink'),
};
exports.textGradient = textGradient;
const bgGradient = {
    'bg/accent/violet': generateGradientTokenValue('directionToRightBottom', 'colorStopListVioletPink'),
    'bg/accent/neutral': generateGradientTokenValue('directionToRightBottom', 'colorStopListBlackGray'),
};
exports.bgGradient = bgGradient;
const borderGradient = {
    'border/accent/violet': generateGradientTokenValue('directionToRightBottom', 'colorStopListVioletPink'),
};
exports.borderGradient = borderGradient;
const overlayGradient = {
    'overlay/subtlest/toright': generateGradientTokenValue('directionToRight', 'colorStopListWhite'),
    'overlay/subtlest/toleft': generateGradientTokenValue('directionToLeft', 'colorStopListWhite'),
    'overlay/subtlest/totop': generateGradientTokenValue('directionToTop', 'colorStopListWhite'),
    'overlay/floating/toright': generateGradientTokenValue('directionToRight', 'colorStopListWhite'),
    'overlay/floating/toleft': generateGradientTokenValue('directionToLeft', 'colorStopListWhite'),
    'overlay/floating/totop': generateGradientTokenValue('directionToTop', 'colorStopListWhite'),
    'overlay/bold/toright': generateGradientTokenValue('directionToRight', 'colorStopListBlack'),
    'overlay/bold/toleft': generateGradientTokenValue('directionToLeft', 'colorStopListBlack'),
    'overlay/bold/totop': generateGradientTokenValue('directionToTop', 'colorStopListBlack'),
};
exports.overlayGradient = overlayGradient;
const gradient = Object.assign(Object.assign(Object.assign(Object.assign({}, textGradient), bgGradient), borderGradient), overlayGradient);
exports.default = gradient;
