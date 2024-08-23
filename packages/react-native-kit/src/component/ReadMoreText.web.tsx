import type { ReadMoreTextProps } from './ReadMoreText';

import { Txt } from '@teamturing/react-native-kit';

const ReadMoreText = ({ TxtComponent = Txt.M, text }: ReadMoreTextProps) => {
  return TxtComponent.render(text);
};

export { ReadMoreText };
