import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheckInCircleLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m17.2 10.2-5.6 5.6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-3.4-3.4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.7 2.7 4.9-4.9c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9Zm0-2C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z"
    />
  </svg>
);
export default SvgCheckInCircleLine;
