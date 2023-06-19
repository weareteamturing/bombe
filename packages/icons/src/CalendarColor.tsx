import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <rect width={20} height={19} x={2} y={3} fill="#E5E7EB" rx={2} />
    <path fill="#B3CDFF" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3H2V5Z" />
    <rect width={2} height={5} x={6} y={1} fill="#575C64" rx={1} />
    <rect width={2} height={5} x={16} y={1} fill="#575C64" rx={1} />
  </svg>
);
export default SvgCalendarColor;
