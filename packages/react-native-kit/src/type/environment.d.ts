declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.json' {
  const content;
  export default content;
}

declare module '*.png' {
  import { ImageRequireSource } from 'react-native';
  const content: ImageRequireSource;
  export default content;
}

declare module '*.jpg' {
  import { ImageRequireSource } from 'react-native';
  const content: ImageRequireSource;
  export default content;
}

declare module '*.html' {
  const content: string;
  export default content;
}
