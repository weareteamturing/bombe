import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCarBattery = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14 13h4M16 15v-4M18 5v2M6 13h4M6 5v2" />
    <rect width={20} height={12} x={2} y={7} rx={2} />
  </svg>
);
export default SvgCarBattery;
