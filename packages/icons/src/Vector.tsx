import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVector = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#vector_svg__a)">
      <path
        fill="currentColor"
        d="M4.987 2.25h14.027a2.5 2.5 0 1 1 2.736 2.737v14.025a2.53 2.53 0 0 0-.249-.012l.255.013a2.5 2.5 0 1 1-2.742 2.742v-.005H4.987v.005a2.5 2.5 0 1 1-2.737-2.743V4.987A2.5 2.5 0 1 1 4.987 2.25ZM2.5 20.8a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm19.001 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4ZM11.268 9.72a1.182 1.182 0 0 0-.995.544l-3.014 4.695a1.183 1.183 0 0 0 .996 1.821h6.024a1.184 1.184 0 0 0 1.182-1.224 1.182 1.182 0 0 0-.187-.597l-3.011-4.695a1.182 1.182 0 0 0-.995-.544Zm4.736-2.627a1.79 1.79 0 0 0-.698 3.45 1.79 1.79 0 0 0 1.935-2.911 1.79 1.79 0 0 0-1.237-.54ZM2.5 1.8a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm19.001 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Z"
      />
    </g>
    <defs>
      <clipPath id="vector_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVector;
