import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserLock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M19 16v-2a2 2 0 0 0-4 0v2M9.5 15H7a4 4 0 0 0-4 4v2" />
    <circle cx={10} cy={7} r={4} />
    <rect width={8} height={5} x={13} y={16} rx={0.899} />
  </svg>
);
export default SvgUserLock;
