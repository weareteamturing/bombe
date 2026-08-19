import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPower = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2v10M18.4 6.6a9 9 0 1 1-12.77.04" />
  </svg>
);
export default SvgPower;
