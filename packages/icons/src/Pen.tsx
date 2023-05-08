import * as React from 'react';
import { SVGProps } from 'react';
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12.41 5.78-8.477 8.477-1.157 4.313-.76 2.84a.469.469 0 0 0 .573.574l2.84-.761 4.313-1.156h.001l8.477-8.478-5.809-5.81Zm9.316.982-4.487-4.488a.935.935 0 0 0-1.323 0L13.601 4.59l5.81 5.81 2.315-2.315a.934.934 0 0 0 0-1.323"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPen;
