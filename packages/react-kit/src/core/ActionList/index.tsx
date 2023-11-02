import { PropsWithChildren, createContext } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';

import ActionListItem from './ActionListItem';
import ActionListSectionDivider from './ActionListSectionDivider';
import ActionListSectionHeader from './ActionListSectionHeader';

type Props = {
  /**
   * ActionList의 아이템에 선택이 되어있다는 것을 표시할 때 사용하는 속성입니다.
   * `undefine`: 선택에 대한 표시를 하지 않습니다.
   * `single`: 하나의 선택된 아이템에 대해, CheckIcon을 보여줍니다.
   * `multiple`: 모든 아이템에 Checkbox를 표시합니다.
   */
  selectionVariant?: 'single' | 'multiple';
} & SxProp;

type ActionListContextValue = {} & Pick<Props, 'selectionVariant'>;
const ActionListContext = createContext<ActionListContextValue>({});

const ActionList = ({ ...props }: PropsWithChildren<Props>) => {
  return (
    <ActionListContext.Provider value={{ selectionVariant: props.selectionVariant }}>
      <BaseActionList role={'menu'} {...props} />
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
export type { Props as ActionListProps, ActionListContextValue };
