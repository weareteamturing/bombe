import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.049 2A2.449 2.449 0 0 0 3.6 4.449v15.102a2.449 2.449 0 0 0 2.62 2.443c.045.004.09.006.135.006h13.163c.451 0 .817-.366.817-.816v-.409a.816.816 0 0 0-.817-.816H6.865a.816.816 0 0 1 0-1.633H19.518c.451 0 .817-.365.817-.816V2.816A.816.816 0 0 0 19.518 2H6.048Zm2.857 2.857a.816.816 0 0 0-.816.816v1.633c0 .451.365.816.816.816h7.347c.45 0 .816-.365.816-.816V5.673a.816.816 0 0 0-.816-.816H8.906Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBook;
