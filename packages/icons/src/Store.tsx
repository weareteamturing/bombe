import * as React from 'react';
import { SVGProps } from 'react';
const SvgStore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      d="M21 2.5H3a1 1 0 0 0-1 1v1.667h20V3.5a1 1 0 0 0-1-1M3.176 19.188a2.4 2.4 0 0 0 2.399 2.4H10v-3.754a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3.753h4.425a2.4 2.4 0 0 0 2.399-2.4V11H3.176v8.188ZM2 8.5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.833H2V8.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStore;
