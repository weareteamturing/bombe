import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v1.052a9.45 9.45 0 0 1 4.692 1.842l.695-.696a1 1 0 0 1 1.674-.966l.707.707a1 1 0 0 1-.966 1.674l-.643.642A9.464 9.464 0 0 1 21.5 13.5a9.5 9.5 0 0 1-19 0c0-4.909 3.723-8.948 8.5-9.448V3h-1a1 1 0 0 1-1-1Zm3 5a.9.9 0 0 0-.9.9v5.2a.9.9 0 1 0 1.8 0V7.9A.9.9 0 0 0 12 7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTimer;
