import * as React from 'react';
import { SVGProps } from 'react';
const SvgCurriculumColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 32 33" {...props}>
    <g clipPath="url(#curriculum_color_svg__a)">
      <path
        fill="#D9CDF9"
        fillRule="evenodd"
        d="M1.333 5.507a5.007 5.007 0 0 1 9.797-1.46h11.9a6.676 6.676 0 0 1 0 13.35H10.233a1.68 1.68 0 0 1-.27-.02l-1.399.021a3.338 3.338 0 1 0 0 6.676H19.59a5.007 5.007 0 1 1-.296 3.338H8.565a6.676 6.676 0 1 1 0-13.352H23.03a3.338 3.338 0 0 0 0-6.676H10.983a5.008 5.008 0 0 1-9.65-1.877Z"
        clipRule="evenodd"
      />
      <rect width={10.014} height={10.014} x={1.333} y={0.5} fill="#9C7EEF" rx={5.007} />
      <rect width={10.014} height={10.014} x={19.133} y={21.167} fill="#9C7EEF" rx={5.007} />
    </g>
    <defs>
      <clipPath id="curriculum_color_svg__a">
        <path fill="#fff" d="M0 .5h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurriculumColor;
