import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSlide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.808 2.5a3.167 3.167 0 0 1 3.166 3.167v8.282a3.167 3.167 0 0 1-3.166 3.166h-2.17l1.31 2.623a1.218 1.218 0 0 1-2.179 1.088l-1.855-3.71H10.06l-1.855 3.71a1.218 1.218 0 0 1-2.18-1.088l1.312-2.623h-2.17A3.167 3.167 0 0 1 2 13.95V5.667A3.167 3.167 0 0 1 5.167 2.5h13.64ZM5.167 4.936a.73.73 0 0 0-.731.73v8.283c0 .403.327.73.73.73h13.642a.73.73 0 0 0 .73-.73V5.667a.73.73 0 0 0-.73-.731H5.167Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6.141 7.323c0-.377.305-.682.682-.682h1.072c.377 0 .682.305.682.682v1.072a.682.682 0 0 1-.682.682H6.823a.682.682 0 0 1-.682-.682V7.323ZM6.141 11.22c0-.376.305-.682.682-.682h1.072c.377 0 .682.306.682.682v1.072a.682.682 0 0 1-.682.682H6.823a.682.682 0 0 1-.682-.682V11.22Z"
    />
  </svg>
);
export default SvgSlide;
