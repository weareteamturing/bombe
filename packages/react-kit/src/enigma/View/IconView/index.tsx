import * as icons from '@teamturing/icons';

import StyledIcon from '../../../core/StyledIcon';
import { IconViewType } from '../../types';

type Props = {
  view: IconViewType;
};

const IconView = ({ view: { icon, iconProps = { color: 'icon/neutral', size: 24 }, spaceProps } }: Props) => (
  <StyledIcon icon={icons[icon]} {...iconProps} sx={{ ...spaceProps }} />
);

export default IconView;
