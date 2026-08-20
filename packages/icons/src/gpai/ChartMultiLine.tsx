import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChartMultiLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M2 19V3a1 1 0 0 1 2 0v16a1 1 0 0 0 1 1h16a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3Z" />
    <path
      fill="currentColor"
      d="M18.293 11.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0L10 14.414l-2.293 2.293a1 1 0 1 1-1.414-1.414l3-3 .076-.068a1 1 0 0 1 1.338.068L14 15.586l4.293-4.293Z"
    />
    <path
      fill="currentColor"
      d="M18.293 6.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0L10 9.414l-2.293 2.293a1 1 0 1 1-1.414-1.414l3-3 .076-.068a1 1 0 0 1 1.338.068L14 10.586l4.293-4.293Z"
    />
  </svg>
);
export default SvgChartMultiLine;
