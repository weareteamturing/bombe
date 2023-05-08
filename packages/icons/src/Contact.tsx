import * as React from 'react';
import { SVGProps } from 'react';
const SvgContact = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 2h13c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H4c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1Zm8 5c1.375 0 2.5 1.125 2.5 2.5S13.375 12 12 12a2.507 2.507 0 0 1-2.5-2.5C9.5 8.125 10.625 7 12 7Zm4.75 9.375c-.5.25-1.625.625-4.75.625s-4.25-.375-4.75-.625C7.125 16.25 7 16.125 7 16c0-.375.125-.625.375-1 .375-.5 1-1 1.75-1.25 1.25-.5 2.625-.5 2.875-.5s1.625 0 2.875.5c.75.25 1.375.75 1.75 1.25.25.25.375.625.375 1 0 .125-.125.25-.25.375Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgContact;
