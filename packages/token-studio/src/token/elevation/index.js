"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowElevation = exports.surfaceElevation = void 0;
const palette_1 = __importDefault(require("../../foundation/palette"));
const shadow_1 = __importDefault(require("../../foundation/shadow"));
const surfaceElevation = {
    'surface': palette_1.default.white,
    'surface/overlay': palette_1.default.white,
};
exports.surfaceElevation = surfaceElevation;
const shadowElevation = {
    'shadow/overlay': shadow_1.default.shadowMedium,
};
exports.shadowElevation = shadowElevation;
const elevation = Object.assign(Object.assign({}, surfaceElevation), shadowElevation);
exports.default = elevation;
