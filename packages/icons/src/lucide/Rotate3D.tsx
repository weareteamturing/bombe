import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRotate3D = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m15.194 13.707 3.814 1.86-1.86 3.814M16.472 7.528A5 10 0 1 0 13 21.798" />
    <path d="M21.798 11A10 5 0 1 0 19 15.57" />
  </svg>
);
export default SvgRotate3D;
