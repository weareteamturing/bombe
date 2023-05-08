import * as React from 'react';
import { SVGProps } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.066 16.736a.9.9 0 1 1-1.8 0V11.73a.9.9 0 1 1 1.8 0v5.006Zm-4.133 0a.9.9 0 1 1-1.8 0V11.73a.9.9 0 0 1 1.8 0v5.006ZM9.029 3.859a1 1 0 0 1 1-1h4.144c.551 0 1 .448 1 1V4.8H9.029v-.941Zm11.27.941h-3.126v-.941c0-1.654-1.345-3-3-3h-4.144c-1.654 0-3 1.346-3 3V4.8H3.7A1.2 1.2 0 0 0 2.5 6v.6a1.2 1.2 0 0 0 1.2 1.2h.131l.472 12.036a2.4 2.4 0 0 0 2.399 2.305h10.796a2.398 2.398 0 0 0 2.397-2.305l.474-12.05A1.192 1.192 0 0 0 21.5 6.6V6c0-.662-.538-1.2-1.201-1.2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrash;
