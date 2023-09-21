"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accentOpacity = void 0;
const opacity_1 = __importDefault(require("../../foundation/opacity"));
const accentOpacity = {
    accent: opacity_1.default.opacity50,
};
exports.accentOpacity = accentOpacity;
const opacity = Object.assign({}, accentOpacity);
exports.default = opacity;
