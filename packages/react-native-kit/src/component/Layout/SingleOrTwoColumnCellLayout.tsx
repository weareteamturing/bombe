import React from 'react';
import { View } from 'react-native';

type Props = React.PropsWithChildren<{
  columnCount: 1 | 2;
  horizontalGap?: number;
  marginHorizontal?: number;
  itemIndex: number;
  isLastItem: boolean;
  addDummyViewIfLastProblemRightEmpty?: boolean;
}>;
const SingleOrTwoColumnCellLayout = ({
  columnCount,
  horizontalGap = 0,
  children,
  itemIndex,
  marginHorizontal = 0,
  isLastItem,
  addDummyViewIfLastProblemRightEmpty = true,
}: Props) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          marginRight: columnCount === 2 && itemIndex % 2 === 0 ? horizontalGap : marginHorizontal,
          justifyContent: 'flex-end',
          marginLeft: columnCount === 1 || itemIndex % 2 === 0 ? marginHorizontal : 0,
        }}
      >
        {children}
      </View>
      {isLastItem && addDummyViewIfLastProblemRightEmpty && itemIndex % 2 === 0 && (
        <View style={{ flex: 1, marginRight: marginHorizontal }} />
      )}
    </>
  );
};

export { SingleOrTwoColumnCellLayout };
