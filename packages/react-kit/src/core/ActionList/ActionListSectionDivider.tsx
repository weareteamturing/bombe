import HorizontalDivider, { HorizontalDividerProps } from '../HorizontalDivider';

type Props = {} & HorizontalDividerProps;

const ActionListSectionDivider = ({ color = 'border/neutral', variant = 'solid', width = 1, sx }: Props) => (
  <BaseActionListSectionDivider
    className={'action_list_section_divider'}
    color={color}
    variant={variant}
    width={width}
    sx={{ ...sx, my: 3 }}
  />
);

const BaseActionListSectionDivider = HorizontalDivider;

export default ActionListSectionDivider;
export type { Props as ActionListSectionDividerProps };
