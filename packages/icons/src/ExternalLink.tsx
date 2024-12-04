import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.953 4.326c-.899 0-1.627.728-1.627 1.627v12.094c0 .899.728 1.627 1.627 1.627h12.094c.899 0 1.627-.728 1.627-1.627V12A1.163 1.163 0 1 1 22 12v6.047A3.953 3.953 0 0 1 18.047 22H5.953A3.953 3.953 0 0 1 2 18.047V5.953A3.953 3.953 0 0 1 5.953 2H12a1.163 1.163 0 1 1 0 2.326H5.953Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.308 10.682a1.06 1.06 0 0 0 1.5 0l5.668-5.668a1.06 1.06 0 0 0-1.5-1.5l-5.668 5.668a1.06 1.06 0 0 0 0 1.5Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.24 3.163c0-.642.52-1.163 1.163-1.163h4.419c.642 0 1.162.52 1.162 1.163V7.58a1.163 1.163 0 0 1-2.325 0V4.326h-3.256c-.642 0-1.163-.521-1.163-1.163Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExternalLink;
