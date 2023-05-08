import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowLeftCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm4.5 12H9.9l2.3 2.3c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3l-4-4c-.4-.4-.4-1 0-1.4l4-4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L9.9 11h6.6c.6 0 1 .4 1 1s-.5 1-1 1Z"
    />
  </svg>
);
export default SvgArrowLeftCircle;
