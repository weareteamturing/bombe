import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChatBubbleCorrect = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#chat_bubble_correct_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.57c-5.8 0-10.5 4.25-10.5 9.5a9 9 0 0 0 2.88 6.52l-.87 4.24a.54.54 0 0 0 0 .28.57.57 0 0 0 .16.22.55.55 0 0 0 .25.1.5.5 0 0 0 .27 0l4.73-2.24c.996.279 2.026.42 3.06.42 5.8 0 10.5-4.26 10.5-9.5S17.8 1.57 12 1.57Zm0 14.93a5.5 5.5 0 1 1 5.5-5.5 5.51 5.51 0 0 1-5.5 5.5Zm3.5-5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="chat_bubble_correct_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChatBubbleCorrect;
