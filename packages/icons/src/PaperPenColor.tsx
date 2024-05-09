import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPaperPenColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#paper_pen_color_svg__a)">
      <rect width={16.457} height={20.197} x={3.5} y={1.645} fill="#C6D8FA" rx={1.175} />
      <path
        fill="#6D99F1"
        fillRule="evenodd"
        d="m19.205 11.89-4.239 4.239-.578 2.156-.38 1.42a.235.235 0 0 0 .287.287l1.42-.38 2.156-.579 4.24-4.238-2.906-2.905Zm4.658.491-2.244-2.244a.466.466 0 0 0-.66 0L19.8 11.294l2.906 2.906 1.157-1.158a.469.469 0 0 0 0-.661Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="paper_pen_color_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaperPenColor;
