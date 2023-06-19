import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M23 10.5v-6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6.25v1.75a3 3 0 0 0 3 3h4.13l.51 3.88a1 1 0 0 0 1 .87h5a1.002 1.002 0 0 0 1-1.13l-1.13-8.37H22a1 1 0 0 0 1-1ZM11.25 14a.76.76 0 0 1-.75-.75V11.5h4.26l.33 2.5h-3.84Z"
    />
  </svg>
);
export default SvgGun;
