import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWifiLock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 8.82a15 15 0 0 1 20 0M20 16v-2a2 2 0 0 0-4 0v2M5 12.859a10 10 0 0 1 8.436-2.756M8.5 16.429a5 5 0 0 1 1.794-1.13" />
    <rect width={8} height={5} x={14} y={16} rx={1} />
  </svg>
);
export default SvgWifiLock;
