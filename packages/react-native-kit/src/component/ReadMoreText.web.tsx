import { Txt } from '@teamturing/react-native-kit';

import type { ReadMoreTextProps } from './ReadMoreText';

const ReadMoreText = ({ TxtComponent = Txt.M, text }: ReadMoreTextProps) => {
  return TxtComponent.render(text);
};

export { ReadMoreText };
