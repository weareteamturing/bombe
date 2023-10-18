import Image from '../../../core/Image';
import { ImageViewType } from '../../types';

type Props = { view: ImageViewType };

const ImageView = ({ view: { spaceProps, ...props } }: Props) => (
  <Image loading={'lazy'} display={'block'} {...props} sx={{ ...spaceProps }} />
);

export default ImageView;
