import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M10.6 17.2c-.3 0-.6-.1-.8-.4l-4.6-4.6c-.5-.5-.5-1.2 0-1.7s1.2-.5 1.7 0l3.7 3.7 6.6-6.6c.5-.5 1.2-.5 1.7 0s.5 1.2 0 1.7l-7.4 7.4c-.3.4-.6.5-.9.5Z"
    />
  </svg>
);
export default SvgCheck;
