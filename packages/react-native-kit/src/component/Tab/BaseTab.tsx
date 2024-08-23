import React from 'react';
import { View, Pressable } from 'react-native';

import { Txt } from '@teamturing/react-native-kit';

type Props = {
  tabs: string[];
  selectedIndex: number;
  onSelected?: (index: number) => void;
  onReselected?: (index: number) => void;

  renderContainer?: (children: React.ReactElement) => React.ReactElement;
  renderTab?: (arg: { text: string; isSelected: boolean; index: number }) => React.ReactElement;
  testID?: string;

  stretchItemWidth?: boolean;
};
export type BaseTabPropsWithoutRenderProps = Omit<
  Props,
  'renderContainer' | 'renderSelectedTab' | 'renderUnselectedTab' | 'stretchItemWidth'
>;
const BaseTab = ({
  selectedIndex,
  tabs,
  onSelected,
  onReselected,
  renderContainer = (children) => <View style={{ flexDirection: 'row' }}>{children}</View>,
  renderTab = ({ text, isSelected }) => (isSelected ? Txt.M.Medium.render(text) : Txt.M.Gray500.render(text)),
  testID = 'BaseTab',
  stretchItemWidth = true,
}: Props) => {
  const tabElements = (
    <>
      {tabs.map((tab, i) => (
        <Pressable
          testID={`${testID}/${tab}`}
          onPress={() => {
            if (i !== selectedIndex) {
              onSelected?.(i);
            } else {
              onReselected?.(i);
            }
          }}
          key={i}
          style={[
            stretchItemWidth ? { flex: 1 } : {},
            { alignItems: 'center', justifyContent: 'center', height: 'auto' },
          ]}
        >
          {renderTab({ text: tab, isSelected: i === selectedIndex, index: i })}
        </Pressable>
      ))}
    </>
  );

  return renderContainer(tabElements);
};

export { BaseTab };
