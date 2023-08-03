import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 33 32" {...props}>
    <path
      fill="#D1D5DB"
      d="M14.772 23.728c0-.368.298-.666.667-.666h1.926c.368 0 .666.298.666.666V30a.667.667 0 0 1-.666.667h-1.926a.667.667 0 0 1-.667-.667v-6.272ZM9.34 2.963a1.63 1.63 0 1 1 3.26 0v9.778a1.63 1.63 0 1 1-3.26 0V2.963ZM20.204 2.963a1.63 1.63 0 1 1 3.26 0v9.778a1.63 1.63 0 1 1-3.26 0V2.963Z"
    />
    <path
      fill="currentColor"
      d="M7.167 10.704c0-.676.547-1.223 1.222-1.223h16.025c.675 0 1.222.547 1.222 1.223v4.753a9.235 9.235 0 1 1-18.47 0v-4.754Z"
    />
    <path
      fill="currentColor"
      d="M12.599 23.198c0-.675.547-1.222 1.222-1.222h5.16c.676 0 1.223.547 1.223 1.222V25.1c0 .675-.547 1.222-1.222 1.222h-5.16a1.222 1.222 0 0 1-1.223-1.222v-1.902Z"
    />
    <g clipPath="url(#plug_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m19.903 16.061-2.327-.739.703-3.156c.113-.509-.578-.833-.969-.456l-4.636 4.477a.504.504 0 0 0-.135.221.47.47 0 0 0-.003.254c.023.084.068.16.131.225a.574.574 0 0 0 .233.14l2.326.738-.702 3.157c-.114.508.577.833.968.456L20.13 16.9c.281-.271.161-.716-.226-.839"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="plug_svg__a">
        <path fill="#fff" d="M10.426 11.111h11.951v10.864H10.426z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlug;
