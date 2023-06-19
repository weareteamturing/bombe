import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.9 14.755v2.199a.9.9 0 1 1-1.8 0v-2.199a1.793 1.793 0 0 1-.9-1.551 1.8 1.8 0 0 1 3.599 0c0 .665-.364 1.239-.899 1.551ZM8.82 7.179A3.183 3.183 0 0 1 12 4a3.182 3.182 0 0 1 3.179 3.179H8.82Zm9.779 0h-1.42A5.184 5.184 0 0 0 12 2a5.185 5.185 0 0 0-5.18 5.179H5.4a2.4 2.4 0 0 0-2.4 2.4v10.2a2.4 2.4 0 0 0 2.4 2.4h13.199a2.399 2.399 0 0 0 2.401-2.4v-10.2a2.4 2.4 0 0 0-2.401-2.4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLock;
