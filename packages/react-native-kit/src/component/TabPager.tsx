import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

type Props = {
  tabElements: ReactElement[];
  lazyMount?: boolean;
  index: number;
  style?: StyleProp<ViewStyle>;
  activePageStyle?: StyleProp<ViewStyle>;
  detachOnInActive?: boolean;
  testID?: string;
};
const TabPager = ({
  tabElements,
  lazyMount = true,
  index,
  style,
  detachOnInActive = false,
  activePageStyle,
  testID = 'TapPager',
}: Props) => {
  const size = tabElements.length;

  const [mountedIndice, setMountedIndice] = useState(lazyMount ? [index] : [...new Array(size).keys()]);

  useEffect(() => {
    if (!mountedIndice.includes(index)) {
      setMountedIndice((indice) => [...indice, index]);
    }
  }, [index, mountedIndice]);

  return (
    <View style={style} testID={testID}>
      {tabElements.map((element, i) => {
        const isActive = index === i;

        return detachOnInActive && index !== i ? null : (
          <View
            testID={`${testID}/tab/${index}`}
            key={i}
            style={[StyleSheet.absoluteFill, { opacity: isActive ? 1 : 0 }, isActive ? activePageStyle : null]}
            pointerEvents={isActive ? 'auto' : 'none'}
          >
            {mountedIndice.includes(i) ? element : null}
          </View>
        );
      })}
    </View>
  );
};

export { TabPager };
