import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPaperCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 32 32" {...props}>
    <rect width={21.942} height={26.929} x={3.228} y={2.193} fill="#D1D5DB" rx={1.175} />
    <circle cx={23.603} cy={24.163} r={6.792} fill="#E5E7EB" />
    <g clipPath="url(#paper_check_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m27.003 22.998-3.646 3.646a.656.656 0 0 1-.924 0l-2.23-2.23a.655.655 0 0 1 0-.924.653.653 0 0 1 .923 0l1.769 1.77 3.185-3.186a.653.653 0 0 1 .923.924Zm-3.4-6.018a7.184 7.184 0 1 0 0 14.367 7.184 7.184 0 0 0 0-14.367Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="paper_check_svg__a">
        <path fill="#fff" d="M15.766 16.327H31.44V32H15.766z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaperCheck;
