import * as React from 'react';
import { SVGProps } from 'react';
const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.611 9.389a7.389 7.389 0 1 1 14.778 0v5.485A3.37 3.37 0 0 1 21.5 18a.842.842 0 0 1-.842.842h-5.492a3.167 3.167 0 0 1-6.334 0h-5.49A.842.842 0 0 1 2.5 18a3.37 3.37 0 0 1 2.111-3.126V9.39Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlarm;
