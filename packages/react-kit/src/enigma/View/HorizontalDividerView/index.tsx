import HorizontalDivider from '../../../core/HorizontalDivider';
import { HorizontalDividerViewType } from '../../types';

type Props = {
  view: HorizontalDividerViewType;
};

const HorizontalDividerView = ({ view: { horizontalDividerProps, spaceProps } }: Props) => (
  <HorizontalDivider {...horizontalDividerProps} sx={{ ...spaceProps }} />
);

export default HorizontalDividerView;
