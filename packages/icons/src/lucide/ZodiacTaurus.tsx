import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZodiacTaurus = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={15} r={6} />
    <path d="M18 3A6 6 0 0 1 6 3" />
  </svg>
);
export default SvgZodiacTaurus;
