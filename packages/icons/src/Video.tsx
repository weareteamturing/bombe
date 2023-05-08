import * as React from 'react';
import { SVGProps } from 'react';
const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1C5.95 1 1 5.95 1 12s4.95 11 11 11 11-4.95 11-11S18.05 1 12 1Zm3.52 11.44-4.84 2.86c-.33.22-.88 0-.88-.44V9.14c0-.44.44-.66.88-.44l4.95 2.86c.33.22.33.66-.11.88Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVideo;
