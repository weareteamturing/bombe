import {
  PropsWithChildren,
  createContext,
  MouseEvent as ReactMouseEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import styled from 'styled-components';
import { ResponsiveValue } from 'styled-system';

import { SxProp, sx } from '../../utils/styled-system';

import ActionListItem, { ActionListItemProps } from './ActionListItem';
import ActionListSectionDivider, { ActionListSectionDividerProps } from './ActionListSectionDivider';
import ActionListSectionHeader, { ActionListSectionHeaderProps } from './ActionListSectionHeader';

type Props = {
  /**
   * ActionList 아이템들의 사이즈를 지정합니다.
   * `m` (기본값): 표준 사이즈
   * `s`: 작은 사이즈
   */
  size?: ResponsiveValue<'m' | 's'>;
  /**
   * ActionList의 아이템에 선택이 되어있다는 것을 표시할 때 사용하는 속성입니다.
   * `undefined`: 선택에 대한 표시를 하지 않습니다.
   * `single`: 하나의 선택된 아이템에 대해, CheckIcon을 보여줍니다.
   * `multiple`: 모든 아이템에 Checkbox를 표시합니다.
   */
  selectionVariant?: 'single' | 'multiple';
  /**
   * 선택 표시(CheckIcon, Checkbox)의 위치를 결정합니다.
   * `leading`: LeadingVisual 앞에 표시합니다. (기본값)
   * `trailing`: TrailingVisual 뒤에 표시합니다.
   */
  selectionPosition?: 'leading' | 'trailing';
  onSelect?: (event: ReactMouseEvent<HTMLLIElement> | ReactKeyboardEvent<HTMLLIElement>) => void;
} & SxProp;

type ActionListContextValue = {} & Pick<Props, 'size' | 'selectionVariant' | 'selectionPosition' | 'onSelect'>;
const ActionListContext = createContext<ActionListContextValue>({});

const ActionList = ({
  size = 'm',
  selectionVariant,
  selectionPosition,
  onSelect,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <ActionListContext.Provider value={{ size, selectionVariant, selectionPosition, onSelect }}>
      <BaseActionList className={'action_list'} role={'menu'} {...props} />
    </ActionListContext.Provider>
  );
};

const BaseActionList = styled.ul<SxProp>`
  list-style: none;
  padding: 0;
  margin: 0;

  ${sx}
`;

export default Object.assign(ActionList, {
  Item: ActionListItem,
  SectionDivider: ActionListSectionDivider,
  SectionHeader: ActionListSectionHeader,
});
export { ActionListContext };
export type {
  Props as ActionListProps,
  ActionListContextValue,
  ActionListItemProps,
  ActionListSectionDividerProps,
  ActionListSectionHeaderProps,
};
