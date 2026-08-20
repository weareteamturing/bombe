import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsbCPort = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 12h12" />
    <rect width={20} height={8} x={2} y={8} rx={4} />
  </svg>
);
export default SvgUsbCPort;
