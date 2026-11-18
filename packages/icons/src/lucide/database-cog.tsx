import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDatabaseCog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m14.305 19.53.923-.382M15.228 16.852l-.923-.383M16.852 15.228l-.383-.923M16.852 20.772l-.383.924M19.148 15.228l.383-.923M19.53 21.696l-.382-.924M20.772 16.852l.924-.383M20.772 19.148l.924.383M21 10.5V5M3 12a9 3 0 0 0 7.599 2.963" />
    <path d="M3 5v14a9 3 0 0 0 8.148 2.987" />
    <circle cx={18} cy={18} r={3} />
    <ellipse cx={12} cy={5} rx={9} ry={3} />
  </svg>
);
export default SvgDatabaseCog;
