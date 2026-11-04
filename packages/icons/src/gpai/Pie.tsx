import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPie = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M13.958 2.103c.365-.02.726.063 1.048.235 2.163 1.08 3.89 2.7 5.079 4.314C21.245 8.226 22 9.944 22 11.258v8.654a2.001 2.001 0 0 1-2 2H4a2 2 0 0 1-2-2v-6h16a1 1 0 0 0 0-2H2a3.002 3.002 0 0 1 1.218-2.405l3.388-2.5.01-.007 3.198-2.299 3.079-2.222a2.002 2.002 0 0 1 1.065-.376Z"
    />
  </svg>
);
export default SvgPie;
