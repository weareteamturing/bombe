"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.device = void 0;
const device_1 = __importDefault(require("./device"));
exports.device = device_1.default;
const breakpoint = Object.assign({}, device_1.default);
exports.default = breakpoint;
