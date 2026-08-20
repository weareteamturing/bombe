import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBaseline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 2.5a1 1 0 0 1 .895.553l6 12a1 1 0 0 1-1.79.894L15.382 12.5H8.618l-1.723 3.447a1 1 0 0 1-1.79-.894l6-12 .034-.062A1 1 0 0 1 12 2.5Zm-2.382 8h4.764L12 5.736 9.618 10.5ZM21 20c0-.828-.448-1.5-1-1.5H4c-.552 0-1 .672-1 1.5s.448 1.5 1 1.5h16c.552 0 1-.672 1-1.5Z"
    />
  </svg>
);
export default SvgBaseline;
