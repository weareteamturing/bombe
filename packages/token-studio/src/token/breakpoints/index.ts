import { device } from '../../foundation/breakpoint';

const baseBreakpoints = [device.deviceMobile, device.deviceTablet, device.deviceDesktop];
const breakpoints = baseBreakpoints.map((value) => `${value + 1}px`);

export default breakpoints;
export { baseBreakpoints };
