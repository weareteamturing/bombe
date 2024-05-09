import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPaperPenColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
    <g clipPath="url(#paper_pen_color_svg__a)">
      <rect width={13.714} height={16.831} x={2.917} y={1.371} fill="#C6D8FA" rx={1.175} />
      <path
        fill="#6D99F1"
        fillRule="evenodd"
        d="m16.005 9.908-3.533 3.533-.481 1.796-.317 1.184a.195.195 0 0 0 .239.24l1.182-.318 1.798-.482 3.532-3.532-2.42-2.42Zm3.881.41-1.87-1.87a.39.39 0 0 0-.55 0l-.965.964 2.42 2.421.965-.965a.388.388 0 0 0 0-.55Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="paper_pen_color_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaperPenColor;
