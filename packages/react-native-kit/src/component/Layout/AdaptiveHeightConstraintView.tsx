import React, { useState, useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

const UNDETERMINED = 'UNDETERMINED';
const TRUE = 'TRUE';
const FALSE = 'FALSE';
type UNDETERMINED_BOOL = 'UNDETERMINED' | 'TRUE' | 'FALSE';

export type AdaptiveHeightConstriantViewProps = {
  ifElement?: React.ReactElement;
  elseElement?: React.ReactElement;
  minHeight?: number;
  maxHeight?: number;
  style?: StyleProp<ViewStyle>;
};
const AdaptiveHeightConstraintView = ({
  elseElement,
  ifElement,
  minHeight = -99999,
  maxHeight = 99999,
  style,
}: AdaptiveHeightConstriantViewProps) => {
  const [layoutHeight, setLayoutHeight] = useState(-1);

  const renderState: UNDETERMINED_BOOL = useMemo(() => {
    if (layoutHeight === -1) {
      return UNDETERMINED;
    }
    if (layoutHeight >= minHeight && layoutHeight <= maxHeight) {
      return TRUE;
    } else {
      return FALSE;
    }
  }, [layoutHeight, minHeight, maxHeight]);

  return (
    <View
      style={style}
      onLayout={({
        nativeEvent: {
          layout: { height },
        },
      }) => {
        setLayoutHeight(height);
      }}
    >
      {renderState === UNDETERMINED ? null : renderState === TRUE ? ifElement : elseElement}
    </View>
  );
};

export { AdaptiveHeightConstraintView };
