import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWarehouseWaves = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 11V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8v3" />
    <path d="M6 11v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1M2 16q2.5 2 5 0t5 0 5 0 5 0M2 21q2.5 2 5 0t5 0 5 0 5 0" />
  </svg>
);
export default SvgWarehouseWaves;
