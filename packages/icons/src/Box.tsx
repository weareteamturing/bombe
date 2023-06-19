import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#box_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.601.344a1.25 1.25 0 0 0-.943-.003L1.637 4.394a1.25 1.25 0 0 0-.782 1.159v12.82c0 .507.306.964.774 1.156l10.021 4.127c.307.126.652.125.958-.003l9.874-4.126a1.25 1.25 0 0 0 .768-1.153V5.553a1.25 1.25 0 0 0-.776-1.157L12.601.344Zm3.905 4.306 2.175.892-6.558 2.643-2.071-.822 6.454-2.713ZM7.997 9.237l2.88 1.143v10.254l-7.522-3.097V7.394l2.142.85v3.572a1.25 1.25 0 0 0 2.5 0V9.237ZM5.466 5.542l1.268.504 6.508-2.736-1.12-.46-6.656 2.692Zm7.91 15.08V10.377l7.374-2.972v10.137l-7.374 3.082Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="box_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBox;
