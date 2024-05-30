import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.5 2h15a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM7 6a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm0 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNote;
