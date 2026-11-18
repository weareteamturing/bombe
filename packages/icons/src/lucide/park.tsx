import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPark = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 18h10M13.248 9.998A4.5 4.5 0 0 0 11.75 8.6V8a1 1 0 0 0-7.5 0 4.9 4.9 0 0 0 2.25 9H8M15 14l-2 6M19 14l2 6M21 14h-8" />
    <path d="M8 20v-5.922a2 2 0 0 0-.586-1.414L6.5 11.75M9.205 12.795 8 14" />
    <circle cx={19} cy={6} r={2} />
  </svg>
);
export default SvgPark;
