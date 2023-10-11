import Image from '../../../core/Image';
import { ImageView as ImageViewType } from '../../types';

type Props = { view: ImageViewType };

const ImageView = ({ view: { imageProps, ...props } }: Props) => (
  <Image loading={'lazy'} display={'block'} {...props} {...imageProps} />
);

export default ImageView;
