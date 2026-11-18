import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCinema = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14 22a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2M15.03 8.44a.65.65 0 0 1 0 1.12l-4.06 2.35a.64.64 0 0 1-.97-.56v-4.7a.647.647 0 0 1 .96-.56zM2 22a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
    <rect width={20} height={14} x={2} y={2} rx={2} />
  </svg>
);
export default SvgCinema;
