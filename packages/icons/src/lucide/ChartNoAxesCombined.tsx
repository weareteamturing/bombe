import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChartNoAxesCombined = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 16v5M16 14.639V21M20 10.656V21M22 3l-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15M4 18.463V21M8 14.656V21" />
  </svg>
);
export default SvgChartNoAxesCombined;
