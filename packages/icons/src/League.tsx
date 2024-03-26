import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLeague = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.064 1C3.924 1 3 1.924 3 3.064v14.858c0 .811.476 1.548 1.216 1.881l6.684 3.014a2.064 2.064 0 0 0 1.654.018l7.187-3.046a2.064 2.064 0 0 0 1.259-1.9V3.064C21 1.924 20.076 1 18.936 1H5.064Zm2.61 13.331c.03.27.251.473.514.473h7.623a.524.524 0 0 0 .514-.473l.654-5.82c.059-.522-.571-.808-.904-.411l-1.94 2.31-1.433-3.146a.766.766 0 0 0-1.405 0L9.864 10.41 7.924 8.1c-.333-.397-.963-.11-.904.411l.654 5.82Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLeague;
