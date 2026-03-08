import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M2.22 6.704C1.198 3.91 3.91 1.198 6.704 2.22l13.001 4.757c3.006 1.1 3.077 5.324.11 6.524l-4.135 1.671a.92.92 0 0 0-.508.508l-1.671 4.135c-1.2 2.967-5.425 2.895-6.524-.11l-4.757-13ZM5.82 4.639a.92.92 0 0 0-1.18 1.18l4.757 13c.289.792 1.4.81 1.716.03l1.672-4.134a3.496 3.496 0 0 1 1.93-1.931l4.135-1.672c.78-.315.762-1.427-.029-1.716L5.819 4.639Z"
    />
  </svg>
);
export default SvgCursor;
