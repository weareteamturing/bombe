import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArea = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20.642 4.143a.785.785 0 0 0-.785-.786H4.143a.785.785 0 0 0-.786.786v15.714c0 .434.352.785.786.785h15.714a.785.785 0 0 0 .785-.785V4.143ZM23 19.857A3.143 3.143 0 0 1 19.857 23H4.143A3.143 3.143 0 0 1 1 19.857V4.143A3.143 3.143 0 0 1 4.143 1h15.714A3.143 3.143 0 0 1 23 4.143v15.714Z"
    />
    <path
      fill="currentColor"
      d="M5 10.2V6.7A1.7 1.7 0 0 1 6.7 5h3.5a1.2 1.2 0 0 1 0 2.4H7.4v2.8a1.2 1.2 0 0 1-2.4 0ZM19.4 14.2v3.5a1.7 1.7 0 0 1-1.7 1.7h-3.5a1.2 1.2 0 0 1 0-2.4H17v-2.8a1.2 1.2 0 0 1 2.4 0Z"
    />
  </svg>
);
export default SvgArea;
