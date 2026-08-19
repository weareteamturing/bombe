import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWebcam = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={10} r={8} />
    <circle cx={12} cy={10} r={3} />
    <path d="M7 22h10M12 22v-4" />
  </svg>
);
export default SvgWebcam;
