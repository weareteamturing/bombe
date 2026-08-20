import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowElbow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M14.293 4.293a1 1 0 0 1 1.414 0l4 4a1.006 1.006 0 0 1 .25.414l.015.062c.017.074.028.151.028.231 0 .083-.012.163-.031.24l-.013.051a.998.998 0 0 1-.125.263l-.01.016a1 1 0 0 1-.114.137l-4 4a1 1 0 1 1-1.414-1.414L16.586 10H13.5a1 1 0 0 0-1 1v6a3 3 0 0 1-3 3H5a1 1 0 0 1 0-2h4.5a1 1 0 0 0 1-1v-6a3 3 0 0 1 3-3h3.086l-2.293-2.293a1 1 0 0 1 0-1.414Z"
    />
  </svg>
);
export default SvgArrowElbow;
