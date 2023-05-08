import * as React from 'react';
import { SVGProps } from 'react';
const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.157 18.26a2 2 0 0 0 2.829 0l6.533-6.533a2 2 0 0 0 0-2.829l-6.44-6.44a2 2 0 0 0-2.828 0L5.717 8.993a2 2 0 0 0 0 2.828l6.44 6.44ZM2.041 16.797a1.872 1.872 0 0 1 .083-1.06l1.382-3.605 8.362 8.362-3.606 1.382a1.872 1.872 0 0 1-1.994-.424l-3.72-3.72a1.872 1.872 0 0 1-.507-.935Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEraser;
