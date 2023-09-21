"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineHeight = exports.fontWeight = exports.fontSize = void 0;
const fontSize_1 = __importDefault(require("./fontSize"));
exports.fontSize = fontSize_1.default;
const fontWeight_1 = __importDefault(require("./fontWeight"));
exports.fontWeight = fontWeight_1.default;
const lineHeight_1 = __importDefault(require("./lineHeight"));
exports.lineHeight = lineHeight_1.default;
const typography = Object.assign(Object.assign(Object.assign({}, fontSize_1.default), fontWeight_1.default), lineHeight_1.default);
exports.default = typography;
