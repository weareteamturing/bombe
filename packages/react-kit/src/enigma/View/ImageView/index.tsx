import Image from '../../../core/Image';
import { ImageView as ImageViewType } from '../../types';

type Props = { view: ImageViewType };

const ImageView = ({ view: { ...props } }: Props) => <Image loading={'lazy'} {...props} />;

export default ImageView;
