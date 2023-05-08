import * as React from 'react';
import { SVGProps } from 'react';
const SvgLogoColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#835EEB"
      fillRule="evenodd"
      d="M3.618 4.018A.486.486 0 0 0 3 4.486v13.358c0 .26.173.49.423.562l7.348 2.087a.483.483 0 0 0 .618-.465V6.66a.582.582 0 0 0-.423-.56L3.618 4.018ZM13.027 6.1a.581.581 0 0 0-.416.558v7.317a.485.485 0 0 0 .618.467l7.346-2.08a.581.581 0 0 0 .425-.558V4.487a.485.485 0 0 0-.627-.466l-7.346 2.078Z"
      clipRule="evenodd"
    />
    <path
      fill="#CDBEF7"
      fillRule="evenodd"
      d="M13.222 20.496 20.57 18.4a.59.59 0 0 0 .431-.566v-3.787a.491.491 0 0 0-.193-.39.483.483 0 0 0-.425-.081l-7.355 2.098a.586.586 0 0 0-.416.564v3.796a.49.49 0 0 0 .194.381c.119.09.273.12.417.081Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLogoColor;
