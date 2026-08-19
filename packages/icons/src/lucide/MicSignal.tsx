import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMicSignal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 17v4M18 11a6 6 0 0 0-3-5.197M2 11a10 10 0 0 1 5-8.662M22 11a10 10 0 0 0-5-8.662M6 11a6 6 0 0 1 3-5.197M9 21h6" />
    <rect width={4} height={8} x={10} y={9} rx={2} />
  </svg>
);
export default SvgMicSignal;
