import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheckInCircleColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#D9CDF9"
      fillRule="evenodd"
      d="m17.207 10.215-5.583 5.584a1.004 1.004 0 0 1-1.415 0l-3.416-3.416a1 1 0 1 1 1.414-1.414l2.709 2.709 4.877-4.877a1 1 0 1 1 1.414 1.414ZM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Z"
      clipRule="evenodd"
    />
    <path
      fill="#9C7EEF"
      d="m11.623 15.79 5.584-5.583a.999.999 0 1 0-1.414-1.414l-4.877 4.876-2.709-2.71a1.001 1.001 0 0 0-1.707.708 1 1 0 0 0 .293.707l3.416 3.417a1 1 0 0 0 1.414 0Z"
    />
  </svg>
);
export default SvgCheckInCircleColor;
