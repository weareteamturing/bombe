import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCreditCardPlus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M22 11.354V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8.536M22 10H2M6 14h2M16 17h6M19 14v6" />
  </svg>
);
export default SvgCreditCardPlus;
