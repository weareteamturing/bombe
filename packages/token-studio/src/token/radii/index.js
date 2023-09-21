"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rounding_1 = __importDefault(require("../../foundation/rounding"));
const radii = {
    none: rounding_1.default.rounding0,
    xxs: rounding_1.default.rounding4,
    xs: rounding_1.default.rounding8,
    s: rounding_1.default.rounding12,
    m: rounding_1.default.rounding16,
    l: rounding_1.default.rounding20,
    xl: rounding_1.default.rounding24,
    xxl: rounding_1.default.rounding32,
    full: rounding_1.default.rounding9999,
};
exports.default = radii;
