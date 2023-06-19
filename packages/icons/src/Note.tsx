import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.34 3.447a2 2 0 0 0-1.45-.6h-1.68v-1a.998.998 0 0 0-.3-.73 1 1 0 0 0-1.45 0 .999.999 0 0 0-.3.73v1H7.79v-1a1 1 0 0 0-.3-.73 1 1 0 0 0-1.46 0 1 1 0 0 0-.3.73v1H4.06A2 2 0 0 0 2 4.897v15.83a2 2 0 0 0 2.06 2.06h15.83a1.999 1.999 0 0 0 2-2.06V4.897a2 2 0 0 0-.55-1.45ZM6.85 6.987h5.71a1 1 0 1 1 0 2H6.85a1 1 0 0 1 0-2Zm10.34 5.85H6.85a1 1 0 1 1 0-2h10.34a1 1 0 0 1 0 2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNote;
