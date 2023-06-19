import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircles = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.7 7.3C15.7 4.2 12.9 2 9.5 2 5.4 2 2 5.4 2 9.5c0 3.4 2.2 6.2 5.3 7.2.9 3.1 3.8 5.3 7.2 5.3 4.1 0 7.5-3.4 7.5-7.5 0-3.4-2.2-6.2-5.3-7.2ZM15 9.5c0 3-2.5 5.5-5.5 5.5H9v-.5c0-3 2.5-5.5 5.5-5.5h.5v.5Zm-11 0C4 6.5 6.5 4 9.5 4c2.1 0 4 1.2 4.9 3-4.1.1-7.3 3.3-7.4 7.4-1.8-.9-3-2.8-3-4.9ZM14.5 20c-2.1 0-4-1.2-4.9-3 4.1-.1 7.3-3.3 7.4-7.4 1.8.9 3 2.8 3 4.9 0 3-2.5 5.5-5.5 5.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCircles;
