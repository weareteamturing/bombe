import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChartNoAxesColumn = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5 21v-6M12 21V3M19 21V9" />
  </svg>
);
export default SvgChartNoAxesColumn;
