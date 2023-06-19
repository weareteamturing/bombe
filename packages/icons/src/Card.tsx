import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.5 7.5h3v-3h-3v3Zm7.5-6H6a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-17a2 2 0 0 0-2-2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCard;
