import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLetter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 5a1 1 0 0 0-1 1v2a1 1 0 0 1 .287.042L12 10.956l9.713-2.914A1 1 0 0 1 22 8V6a1 1 0 0 0-1-1H3Zm19 5.044-9.713 2.914a1 1 0 0 1-.574 0L2 10.044V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8.956Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLetter;
