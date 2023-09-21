import Text from '../../../core/Text';
import { TextView } from '../../types';

type Props = { view: TextView };

const TextView = ({ view: { text, textProps } }: Props) => <Text {...textProps}>{text}</Text>;

export default TextView;
