import * as React from 'react';
import type { SVGProps } from 'react';
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 10 10 1 1 0 1 0-2 0 8 8 0 1 1-8.002-8 8.75 8.75 0 0 1 6.034 2.447l.553.553H16a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v2.585l-.553-.552-.012-.012A10.75 10.75 0 0 0 12.004 2H12Z"
    />
    <path
      fill="currentColor"
      d="M13.89 15.078c-1.413 0-2.273-1.055-2.273-2.906 0-1.852.86-2.906 2.274-2.906 1.414 0 2.273 1.062 2.273 2.906 0 1.86-.86 2.906-2.273 2.906Zm0-.969c.657 0 1.079-.632 1.07-1.937 0-1.29-.413-1.945-1.07-1.945-.656 0-1.07.656-1.07 1.945-.008 1.305.414 1.937 1.07 1.937ZM10.383 9.344V15h-1.18v-4.54h-.031l-1.297.813v-1.039l1.398-.89h1.11Z"
    />
  </svg>
);
export default SvgForward;
