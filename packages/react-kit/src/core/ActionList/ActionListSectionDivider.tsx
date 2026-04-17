import { ColorKey } from '@teamturing/token-studio';
import { HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { BorderColorProps, BorderProps, ResponsiveValue, Theme, border, variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';

import { ActionListContext } from '.';

type Props = {
  width?: BorderProps['borderBottomWidth'];
  color?: BorderColorProps<Theme, ColorKey>['borderBottomColor'];
  variant?: BorderProps['borderBottomStyle'];
  size?: ResponsiveValue<'m' | 's'>;
} & SxProp &
  Pick<HTMLAttributes<HTMLHRElement>, 'className'>;

const ActionListSectionDivider = ({
  color = 'border/neutral',
  variant = 'solid',
  width = 1,
  size: propsSize,
  ...props
}: Props) => {
  const { size: contextSize } = useContext(ActionListContext);
  const size = propsSize ?? contextSize ?? 'm';
  return (
    <BaseActionListSectionDivider
      className={'action_list_section_divider'}
      size={size}
      borderBottomWidth={width}
      borderBottomStyle={variant}
      borderBottomColor={color}
      {...props}
    />
  );
};

const BaseActionListSectionDivider = styled.hr<BorderProps & BorderColorProps & SxProp & Pick<Props, 'size'>>`
  display: block;
  margin: 0;
  padding: 0;
  border: none;

  width: 100%;

  ${() =>
    variant<BetterSystemStyleObject>({
      prop: 'size',
      variants: {
        m: { my: 3 },
        s: { my: 2 },
      },
    })}

  ${border}
  ${sx}
`;

export default ActionListSectionDivider;
export type { Props as ActionListSectionDividerProps };
