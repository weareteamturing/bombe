import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.517 2.15 6.035 7.537H2.921c-.57 0-1.033.463-1.033 1.033v6.86c0 .57.463 1.033 1.033 1.033h3.114l10.482 5.387a1 1 0 0 0 1.457-.89V3.04a1 1 0 0 0-1.457-.89Zm4.719 7.017H19.28v5.666h1.955a1.31 1.31 0 0 0 1.31-1.311v-3.043a1.31 1.31 0 0 0-1.31-1.312"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSpeaker;
