import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCurved = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16.153 2.765a1.09 1.09 0 0 1 1.543.119l2.92 3.425c.512.6.512 1.484 0 2.083l-2.92 3.425a1.09 1.09 0 0 1-1.543.12 1.104 1.104 0 0 1-.119-1.552l1.607-1.884c-2.666.09-4.8 2.248-4.8 4.898v1c0 3.922-3.225 7.101-7.204 7.101H4.116A1.108 1.108 0 0 1 3 20.4c0-.607.5-1.1 1.116-1.1h1.521c2.746 0 4.972-2.195 4.972-4.901v-1c0-3.893 3.178-7.053 7.116-7.1l-1.69-1.983a1.104 1.104 0 0 1 .118-1.551Z"
    />
  </svg>
);
export default SvgArrowCurved;
