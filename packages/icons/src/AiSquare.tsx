import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAiSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20.642 4.143a.785.785 0 0 0-.785-.786H4.143a.785.785 0 0 0-.786.786v15.714c0 .434.352.785.786.785h15.714a.785.785 0 0 0 .785-.785V4.143ZM23 19.857A3.143 3.143 0 0 1 19.857 23H4.143A3.143 3.143 0 0 1 1 19.857V4.143A3.143 3.143 0 0 1 4.143 1h15.714A3.143 3.143 0 0 1 23 4.143v15.714Z"
    />
    <path
      fill="currentColor"
      d="M16.947 6.9C17.53 6.9 18 7.371 18 7.953v8.058a1.053 1.053 0 0 1-2.106 0V7.953c0-.582.472-1.053 1.053-1.053ZM7.515 16.328a1.067 1.067 0 1 1-2.024-.68l2.6-7.5A1.857 1.857 0 0 1 9.846 6.9h.064c.792 0 1.497.502 1.755 1.251l2.592 7.505a1.062 1.062 0 1 1-2.013.676l-.526-1.612H8.039l-.524 1.608Zm1.058-3.25h2.611l-1.27-3.89h-.07l-1.271 3.89Z"
    />
  </svg>
);
export default SvgAiSquare;
