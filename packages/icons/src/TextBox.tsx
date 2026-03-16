import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTextBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor" clipPath="url(#text_box_svg__a)">
      <path d="M18.2 9.35h-1.9V7.7h-3.35v8.6h1.95v1.9H9.1v-1.9h1.95V7.7H7.7v1.65H5.8V5.8h12.4v3.55Z" />
      <path
        fillRule="evenodd"
        d="M19.028 21.862c.007.047.013.093.022.138H4.95A2.501 2.501 0 0 1 0 21.5c0-1.257.928-2.296 2.137-2.472-.046.007-.092.013-.137.022V4.95A2.5 2.5 0 1 1 4.95 2h14.1A2.5 2.5 0 1 1 22 4.95v14.1c-.045-.01-.091-.015-.138-.022a2.499 2.499 0 1 1-2.834 2.834ZM2.5 20.8a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm19 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm-16.513.956a2.495 2.495 0 0 1 0-.002v.002ZM4.497 4A2.508 2.508 0 0 1 4 4.496v15.007l-.017-.012c.195.144.367.316.513.509h15.008a2.51 2.51 0 0 1 .512-.509l-.016.012V4.496A2.51 2.51 0 0 1 19.504 4H4.496ZM2.5 1.8a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm19 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm-2.487 19.956v-.002c.003.036.01.072.015.108-.005-.035-.012-.07-.015-.106Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="text_box_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextBox;
