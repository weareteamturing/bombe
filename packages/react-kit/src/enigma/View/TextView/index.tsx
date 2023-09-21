import Text from '../../../core/Text';
import { TextView as TextViewType } from '../../types';

type Props = { view: TextViewType };

const TextView = ({ view: { text, textProps } }: Props) => <Text {...textProps}>{text}</Text>;

export default TextView;
