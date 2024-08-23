import React, { useState, useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

const UNDETERMINED = 'UNDETERMINED';
const TRUE = 'TRUE';
const FALSE = 'FALSE';
type UNDETERMINED_BOOL = 'UNDETERMINED' | 'TRUE' | 'FALSE';

export type AdaptiveWidthConstriantViewProps = {
  ifElement?: React.ReactElement;
  elseElement?: React.ReactElement;
  minWidth?: number;
  maxWidth?: number;
  style?: StyleProp<ViewStyle>;
};
const AdaptiveWidthConstraintView = ({
  elseElement,
  ifElement,
  minWidth = -99999,
  maxWidth = 99999,
  style,
}: AdaptiveWidthConstriantViewProps) => {
  const [layoutWidth, setLayoutWidth] = useState(-1);

  const renderState: UNDETERMINED_BOOL = useMemo(() => {
    if (layoutWidth === -1) {
      return UNDETERMINED;
    }
    if (layoutWidth >= minWidth && layoutWidth <= maxWidth) {
      return TRUE;
    } else {
      return FALSE;
    }
  }, [layoutWidth, minWidth, maxWidth]);

  return (
    <View
      style={style}
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => {
        setLayoutWidth(width);
      }}
    >
      {renderState === UNDETERMINED ? null : renderState === TRUE ? ifElement : elseElement}
    </View>
  );
};

export { AdaptiveWidthConstraintView };
