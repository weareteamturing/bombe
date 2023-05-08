import * as React from 'react';
import { SVGProps } from 'react';
const SvgGraph = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.924 1 12c0 6.075 4.925 11 11 11s11-4.925 11-11c0-6.076-4.925-11-11-11Zm5.622 7.217a1 1 0 0 1 .16 1.405L14.1 14.258a1 1 0 0 1-1.53.044l-2.282-2.563-2.446 3.802a1 1 0 1 1-1.682-1.082l3.158-4.91a1 1 0 0 1 1.588-.123l2.367 2.658 2.945-3.706a1 1 0 0 1 1.405-.16Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGraph;
