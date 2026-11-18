import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAsterism = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2v8M14.5 15l7 4M14.5 19l7-4M18 13v8M2.5 15l7 4M2.5 19l7-4M6 13v8M8.5 4l7 4M8.5 8l7-4" />
  </svg>
);
export default SvgAsterism;
