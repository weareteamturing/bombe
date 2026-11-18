import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChartRadar = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2v10M16 18l3.085-8.125L12 4.103 3.473 9.442l3.196 10.554z" />
    <path d="m2 9 10 3 6 9" />
    <path d="m6 21 6-9 10-3" />
  </svg>
);
export default SvgChartRadar;
