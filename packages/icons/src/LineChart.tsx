import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLineChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M18.544 5.982a1.282 1.282 0 0 1 2.024 1.574l-4.069 5.23a1.282 1.282 0 0 1-1.985.048l-2.413-2.814-3.119 4.459a1.283 1.283 0 0 1-2.101-1.47l4.069-5.812.092-.116a1.282 1.282 0 0 1 1.932.017l2.465 2.875 3.105-3.991Z"
    />
    <path
      fill="currentColor"
      d="M2 3.282a1.282 1.282 0 1 1 2.564 0v16.154h16.154a1.282 1.282 0 1 1 0 2.564H3.282A1.282 1.282 0 0 1 2 20.718V3.282Z"
    />
  </svg>
);
export default SvgLineChart;
