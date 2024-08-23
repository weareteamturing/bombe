import type { ReadMoreTextProps } from './ReadMoreText';
import { Txt } from './Txt';

const ReadMoreText = ({ TxtComponent = Txt.M, text }: ReadMoreTextProps) => {
  return TxtComponent.render(text);
};

export { ReadMoreText };
