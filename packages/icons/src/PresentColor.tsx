import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPresentColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#FFDB70"
      d="M3 8a2 2 0 0 1 2-2h5.5v16H5a2 2 0 0 1-2-2V8ZM13.5 6H19a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5.5V6Z"
    />
    <path
      fill="#FF9C07"
      fillRule="evenodd"
      d="M10.5 6H6.354l-.347-2.908c-.087-.728.64-1.288 1.335-1.027L12 3.817l4.658-1.752c.694-.26 1.422.299 1.335 1.027L17.646 6H13.5v16h-3V6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPresentColor;
