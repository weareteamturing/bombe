import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCurved = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M14.293 4.293a1 1 0 0 1 1.414 0l4 4a1.005 1.005 0 0 1 .25.414c.012.042.02.084.027.127.01.054.016.11.016.166 0 .083-.012.163-.031.24l-.013.051a.998.998 0 0 1-.165.318 1.009 1.009 0 0 1-.084.098l-4 4a1 1 0 1 1-1.414-1.414L16.586 10h-.38a3.706 3.706 0 0 0-3.706 3.706A6.294 6.294 0 0 1 6.206 20H5a1 1 0 0 1 0-2h1.206a4.294 4.294 0 0 0 4.294-4.294A5.706 5.706 0 0 1 16.206 8h.38l-2.293-2.293a1 1 0 0 1 0-1.414Z"
    />
  </svg>
);
export default SvgArrowCurved;
