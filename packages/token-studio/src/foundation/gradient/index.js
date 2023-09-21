"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.direction = exports.colorStopList = void 0;
const colorStopList_1 = __importDefault(require("./colorStopList"));
exports.colorStopList = colorStopList_1.default;
const direction_1 = __importDefault(require("./direction"));
exports.direction = direction_1.default;
const gradient = Object.assign(Object.assign({}, colorStopList_1.default), direction_1.default);
exports.default = gradient;
