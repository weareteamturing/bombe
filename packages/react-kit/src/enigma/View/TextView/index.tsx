import Text from '../../../core/Text';
import { TextViewType } from '../../types';

type Props = { view: TextViewType };

const TextView = ({ view: { text, textProps, spaceProps } }: Props) => (
  <Text {...textProps} sx={{ ...spaceProps }}>
    {text}
  </Text>
);

export default TextView;
