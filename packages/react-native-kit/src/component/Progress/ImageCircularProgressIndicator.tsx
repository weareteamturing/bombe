import { is } from '../../util';
import { type ImgSource, Img } from '../Img/Img';

import { type CircularProgressIndicatorProps, CircularProgressIndicator } from './CircularProgressIndicator';

type Props = {
  imageSize: number;
  imageSrc: ImgSource;
  childSize?: number;
} & Omit<CircularProgressIndicatorProps, 'childComponent' | 'childSize'>;

const ImageCircularProgressIndicator = ({ imageSize, imageSrc, childSize, ...rest }: Props) => {
  return (
    <CircularProgressIndicator
      childSize={is.number(childSize) ? childSize : imageSize}
      childComponent={Img.render(imageSrc, { width: imageSize, height: imageSize })}
      {...rest}
    />
  );
};

export { ImageCircularProgressIndicator };
export type { Props as ImageProgressCircleProps };
