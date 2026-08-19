import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 6v6l1.5.8" />
    <path d="M12.338 21.994a10 10 0 1 1 9.587-8.767M14 18h8" />
    <path d="m18 22-4-4 4-4" />
  </svg>
);
export default SvgClockArrowLeft;
