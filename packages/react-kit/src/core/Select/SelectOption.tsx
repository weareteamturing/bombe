import { isNullable } from '@teamturing/utils';
import { OptionHTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = {} & OptionHTMLAttributes<HTMLOptionElement>;

const SelectOption = ({ children: propChildren, ...props }: Props) => {
  const children = isNullable(propChildren) ? props.label : propChildren;
  return <BaseSelectOption {...props}>{children}</BaseSelectOption>;
};

const BaseSelectOption = styled.option``;

export default SelectOption;
export type { Props as SelectOptionProps };
