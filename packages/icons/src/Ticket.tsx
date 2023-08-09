import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.5 4.5a1 1 0 0 0-1 1V10a2 2 0 1 1 0 4v4.5a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1V14a2 2 0 1 1 0-4V5.5a1 1 0 0 0-1-1h-19Zm6.607 9.852a.35.35 0 0 0 .344.315h5.098a.35.35 0 0 0 .344-.315l.438-3.88c.039-.348-.382-.54-.605-.275l-1.297 1.54-.96-2.097a.513.513 0 0 0-.939 0l-.959 2.098-1.297-1.54c-.223-.265-.644-.074-.605.274l.438 3.88Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTicket;
