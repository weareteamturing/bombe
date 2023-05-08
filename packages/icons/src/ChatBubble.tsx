import * as React from 'react';
import { SVGProps } from 'react';
const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1.565c-5.799 0-10.5 4.253-10.5 9.5 0 2.527 1.098 4.817 2.876 6.52l-.868 4.249a.5.5 0 0 0 .703.552l4.731-2.233a11.53 11.53 0 0 0 3.058.412c5.799 0 10.5-4.253 10.5-9.5s-4.701-9.5-10.5-9.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatBubble;
