import * as React from 'react';
import { SVGProps } from 'react';
const SvgNoteColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="#C6D8FA" d="M3.5 3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V3Z" />
    <path
      fill="#6D99F1"
      d="M6 7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM6 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
    />
  </svg>
);
export default SvgNoteColor;
