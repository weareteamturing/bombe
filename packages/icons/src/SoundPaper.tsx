import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSoundPaper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.5 22a1.001 1.001 0 0 0 1-1V9.5h-5A2.503 2.503 0 0 1 13 7V2H4.5a1.001 1.001 0 0 0-1 1v18a1.001 1.001 0 0 0 1 1h15Zm-7.3-3.25a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1Zm-4-2a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 2 0v3.5c0 .552-.448 1-1 1Zm7.5 0a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2c0 .552-.448 1-1 1Z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M14.5 2v5a.999.999 0 0 0 1 1h5l-6-6Z" />
  </svg>
);
export default SvgSoundPaper;
