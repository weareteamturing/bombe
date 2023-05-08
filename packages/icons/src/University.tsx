import * as React from 'react';
import { SVGProps } from 'react';
const SvgUniversity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M1.443 9.357C.85 9.17.853 8.33 1.448 8.15l10.231-3.11a.947.947 0 0 1 .548 0l10.324 3.11c.596.18.6 1.023.004 1.207l-10.32 3.195a.947.947 0 0 1-.563 0L1.443 9.356Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.643 12.219v4.18a2.63 2.63 0 0 0 2.63 2.63h7.419a2.63 2.63 0 0 0 2.63-2.63v-4.18l-6.088 1.884a.947.947 0 0 1-.562-.001l-6.03-1.883Z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M20.164 9.745h.736v5.051h-.736v-5.05Z" />
    <path fill="currentColor" d="M21.426 15.401a.92.92 0 1 1-1.841 0 .92.92 0 0 1 1.841 0Z" />
  </svg>
);
export default SvgUniversity;
