import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCreditCardReader = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 16v1M16.963 7.734A1 1 0 0 0 15.999 7H8.003a1 1 0 0 0-.964.734L4.073 18.467A2 2 0 0 0 6 21h12a2 2 0 0 0 1.927-2.532z" />
    <path d="M2.678 8.5A2 2 0 0 1 2 7V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-.676 1.499M9 21l2-14" />
  </svg>
);
export default SvgCreditCardReader;
