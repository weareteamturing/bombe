import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBrainOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 18v-6M12 5v1.344M17.707 6.293A3 3 0 1 0 12 5a3 3 0 0 0-4.124-2.781" />
    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77M19.644 19.644A4 4 0 0 1 12 18a4 4 0 1 1-7.967-.517M2 2l20 20" />
    <path d="M20 10.536a4 4 0 0 1 1.533 5.34M3.477 10.895a4 4 0 0 1 1.876-5.542" />
    <path d="M6 18a4 4 0 0 1-2-7.464M9 13a4.17 4.17 0 0 0 2.166-1.5 4 4 0 0 0 .138-.196" />
  </svg>
);
export default SvgBrainOff;
