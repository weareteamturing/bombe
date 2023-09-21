import Image from '../../../core/Image';
import { ImageView } from '../../types';

type Props = { view: ImageView };

const ImageView = ({ view: { ...props } }: Props) => <Image loading={'lazy'} {...props} />;

export default ImageView;
