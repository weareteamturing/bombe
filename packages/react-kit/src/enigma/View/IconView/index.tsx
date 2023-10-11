import * as icons from '@teamturing/icons';

import StyledIcon from '../../../core/StyledIcon';
import { IconView as IconViewType } from '../../types';

type Props = {
  view: IconViewType;
};

const IconView = ({ view: { icon, iconProps = { color: 'icon/neutral', size: 24 } } }: Props) => (
  <StyledIcon icon={icons[icon]} {...iconProps} />
);

export default IconView;
