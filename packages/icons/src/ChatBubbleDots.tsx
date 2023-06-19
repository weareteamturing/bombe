import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChatBubbleDots = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.98 12.747a1.536 1.536 0 0 1-1.456-2.136 1.539 1.539 0 1 1 1.456 2.136Zm-4.914 0a1.539 1.539 0 1 1-.078-3.076 1.539 1.539 0 0 1 .078 3.076Zm-4.915 0a1.537 1.537 0 1 1-.078-3.073 1.537 1.537 0 0 1 .078 3.073ZM12 1.5c-5.833 0-10.579 4.314-10.579 9.617 0 2.27.96 5.359 3.634 7.353l-.315 3.294a.672.672 0 0 0 .989.656l3.431-1.846c.427.044 1.681.16 2.84.16 5.833 0 10.579-4.314 10.579-9.617C22.579 5.814 17.833 1.5 12 1.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChatBubbleDots;
