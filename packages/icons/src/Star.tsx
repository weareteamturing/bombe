import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="m13.154 2.217 2.327 4.715c.187.379.549.642.968.703l5.203.756c1.054.153 1.476 1.45.712 2.193l-3.765 3.67a1.288 1.288 0 0 0-.37 1.138l.889 5.182c.18 1.051-.922 1.851-1.865 1.356l-4.654-2.447a1.285 1.285 0 0 0-1.196 0L6.749 21.93c-.944.495-2.046-.305-1.866-1.356l.889-5.182a1.288 1.288 0 0 0-.37-1.138l-3.765-3.67c-.763-.743-.342-2.04.713-2.193l5.202-.756c.419-.061.782-.324.969-.703l2.326-4.715c.472-.956 1.835-.956 2.307 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStar;
