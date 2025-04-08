import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 3H8v2a1 1 0 0 1-2 0V3H4a2 2 0 0 0-2 2v3h20V5a2 2 0 0 0-2-2h-2v2a1 1 0 1 1-2 0V3Z"
      clipRule="evenodd"
    />
    <g fill="currentColor" opacity={0.4}>
      <path d="M2 8h20v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8ZM6 2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0V2ZM16 2a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0V2Z" />
    </g>
  </svg>
);
export default SvgCalendar;
