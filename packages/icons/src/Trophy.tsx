import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrophy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 3a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v1.246a4.46 4.46 0 0 0 4.641 4.456 6.007 6.007 0 0 0 4.36 3.215V19H7.5a1 1 0 1 0 0 2h9a1 1 0 0 0 0-2H13v-3.083a6.007 6.007 0 0 0 4.358-3.215A4.46 4.46 0 0 0 22 8.246V7a2 2 0 0 0-2-2h-2V4a1 1 0 0 0-1-1H7Zm10.963 7.67c.024-.22.037-.444.037-.67V7h2v1.246a2.46 2.46 0 0 1-2.037 2.423ZM6 7v3c0 .226.013.45.037.67A2.46 2.46 0 0 1 4 8.245V7h2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrophy;
