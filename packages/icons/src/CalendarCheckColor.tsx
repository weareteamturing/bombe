import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalendarCheckColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#E5E7EB"
      fillRule="evenodd"
      d="m17.207 10.415-5.584 5.584a1 1 0 0 1-1.414 0l-3.416-3.417a1 1 0 1 1 1.414-1.414l2.709 2.709 4.877-4.876a1 1 0 1 1 1.414 1.414ZM19.7 2.8h-1.63v-1a1 1 0 0 0-2 0v1H7.93v-1a1 1 0 0 0-2 0v1H4.3a2 2 0 0 0-2 2v15.4a2 2 0 0 0 2 2h15.4a2 2 0 0 0 2-2V4.8a2 2 0 0 0-2-2Z"
      clipRule="evenodd"
    />
    <path
      fill="#835EEB"
      d="m11.623 15.999 5.584-5.584a1 1 0 0 0-1.414-1.414l-4.877 4.876-2.709-2.709a1 1 0 0 0-1.414 1.414l3.416 3.417a1 1 0 0 0 1.414 0Z"
    />
  </svg>
);
export default SvgCalendarCheckColor;