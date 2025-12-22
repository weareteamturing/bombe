import * as React from 'react';
import type { SVGProps } from 'react';
const SvgProgressLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19.531 12.032a7.56 7.56 0 0 0-15.07-.876 1.25 1.25 0 0 1-2.484-.286c.577-5.009 4.83-8.897 9.993-8.897 5.556 0 10.06 4.503 10.061 10.06 0 5.142-3.858 9.381-8.838 9.985a1.25 1.25 0 0 1-.302-2.481 7.563 7.563 0 0 0 6.64-7.505Z"
    />
  </svg>
);
export default SvgProgressLine;
