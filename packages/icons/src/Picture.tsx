import * as React from 'react';
import { SVGProps } from 'react';
const SvgPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.003 10.668a1.789 1.789 0 1 1-.083-3.576 1.789 1.789 0 0 1 .083 3.576Zm-1.724 6.112H8.255a1.183 1.183 0 0 1-.996-1.821l3.013-4.695a1.182 1.182 0 0 1 1.991 0l3.011 4.695a1.182 1.182 0 0 1-.995 1.821Zm5.008-14.53H4.713A2.463 2.463 0 0 0 2.25 4.713v14.574a2.463 2.463 0 0 0 2.463 2.463h14.574a2.463 2.463 0 0 0 2.463-2.463V4.713a2.463 2.463 0 0 0-2.463-2.463Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPicture;
