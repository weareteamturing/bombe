import * as React from 'react';
import { SVGProps } from 'react';
const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.959 12.362a1.2 1.2 0 0 1 1.388.976 7.698 7.698 0 0 0 7.6 6.378c4.255 0 7.716-3.461 7.716-7.716 0-4.254-3.461-7.715-7.715-7.715a7.657 7.657 0 0 0-5.175 2.004l.992.992a.99.99 0 0 1-.55 1.68l-4.211.65a.99.99 0 0 1-1.13-1.131l.65-4.211a.99.99 0 0 1 1.68-.55l.872.873a10.044 10.044 0 0 1 6.872-2.707c5.577 0 10.115 4.538 10.115 10.115 0 5.578-4.538 10.115-10.115 10.115a10.093 10.093 0 0 1-9.965-8.365 1.2 1.2 0 0 1 .976-1.388Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUndo;
