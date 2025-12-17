import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlphabetText = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M21 7.725h-2.25V5.25h-5.625v13.5h2.925V21h-8.1v-2.25h2.925V5.25H5.25v2.475H3V3h18v4.725Z"
    />
  </svg>
);
export default SvgAlphabetText;
