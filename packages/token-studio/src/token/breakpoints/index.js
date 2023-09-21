"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseBreakpoints = void 0;
const breakpoint_1 = require("../../foundation/breakpoint");
const baseBreakpoints = [breakpoint_1.device.deviceMobile, breakpoint_1.device.deviceTablet, breakpoint_1.device.deviceDesktop];
exports.baseBreakpoints = baseBreakpoints;
const breakpoints = baseBreakpoints.map((value) => `${value + 1}px`);
exports.default = breakpoints;
