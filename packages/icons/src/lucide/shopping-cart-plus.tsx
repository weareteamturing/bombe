import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingCartPlus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 5h6M19 2v6M2.05 2.05l1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18M4.564 5H12" />
    <path d="M6.25 14h12.712a2 2 0 0 0 1.991-1.57l.172-1.041" />
    <circle cx={18} cy={20} r={2} />
    <circle cx={8} cy={20} r={2} />
  </svg>
);
export default SvgShoppingCartPlus;
