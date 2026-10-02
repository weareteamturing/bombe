import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHourglassCog = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m14.305 19.53.923-.382M15.228 16.852l-.923-.383M16.852 15.228l-.383-.923M16.852 20.772l-.383.924M17 2v4.172a2 2 0 0 1-.586 1.414l-8.828 8.828A2 2 0 0 0 7 17.828V22M19.148 15.228l.383-.923M19.53 21.696l-.382-.924M20.772 16.852l.924-.383M20.772 19.148l.924.383M5 22h6.159M5 2h14" />
    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414l5.188 5.188" />
    <circle cx={18} cy={18} r={3} />
  </svg>
);
export default SvgHourglassCog;
