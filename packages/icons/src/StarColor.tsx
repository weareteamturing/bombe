import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStarColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="#9C7EEF"
      fillRule="evenodd"
      d="m10.961 1.847 1.94 3.93c.155.316.457.535.806.585l4.336.63a1.071 1.071 0 0 1 .593 1.828L15.5 11.878a1.073 1.073 0 0 0-.309.949l.741 4.318a1.071 1.071 0 0 1-1.554 1.13l-3.878-2.04a1.07 1.07 0 0 0-.997 0l-3.878 2.04a1.072 1.072 0 0 1-1.555-1.13l.74-4.318a1.073 1.073 0 0 0-.308-.949L1.364 8.82c-.636-.62-.285-1.7.594-1.828l4.335-.63c.35-.05.652-.27.807-.585l1.939-3.93a1.072 1.072 0 0 1 1.922 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="m7.257 7.96-1.91.333a.3.3 0 0 0-.078.566l4.771 2.267a.3.3 0 0 0 .425-.319L9.59 5.323a.3.3 0 0 0-.567-.082L7.987 7.406a1 1 0 0 1-.73.554Z"
      opacity={0.35}
    />
  </svg>
);
export default SvgStarColor;
