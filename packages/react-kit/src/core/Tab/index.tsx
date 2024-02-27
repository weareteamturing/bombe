import { ChevronLeftIcon, ChevronRightIcon } from '@teamturing/icons';
import { SpaceKey } from '@teamturing/token-studio';
import { forcePixelValue } from '@teamturing/utils';
import throttle from 'lodash.throttle';
import { PropsWithChildren, RefObject, createContext, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { ResponsiveValue } from 'styled-system';

import useResize from '../../hook/useResize';
import IconButton, { IconButtonProps } from '../IconButton';
import View from '../View';

import TabItem from './TabItem';

type Props = {
  variant?: 'plain' | 'outlined' | 'underline';
  size?: ResponsiveValue<'l' | 'm' | 's'>;
  gap?: ResponsiveValue<SpaceKey>;
};

type TabContextValue = { containerRef?: RefObject<HTMLElement> } & Props;
const TabContext = createContext<TabContextValue>({});

const Tab = ({ variant = 'plain', size = 'm', gap = 2, children }: PropsWithChildren<Props>) => {
  const theme = useTheme();
  const rootRef = useRef<HTMLDivElement>(null);

  const [isLeftButtonVisible, setIsLeftButtonVisible] = useState(
    rootRef.current ? rootRef.current.scrollLeft > 0 : false,
  );
  const [isRightButtonVisible, setIsRightButtonVisible] = useState(
    rootRef.current ? rootRef.current.clientWidth + rootRef.current.scrollLeft < rootRef.current.scrollWidth : false,
  );

  const handleScrollButtonVisibility = () => {
    if (rootRef.current) {
      setIsLeftButtonVisible(rootRef.current ? rootRef.current.scrollLeft > 0 : false);
      setIsRightButtonVisible(
        rootRef.current
          ? rootRef.current.clientWidth + Math.ceil(rootRef.current.scrollLeft) < rootRef.current.scrollWidth
          : false,
      );
    }
  };

  const buttonWidth = 32;
  const gradientWidth = 40;

  const handleLeftButtonClick: IconButtonProps['onClick'] = () => {
    if (rootRef.current) {
      rootRef.current.scrollTo({
        left: rootRef.current.scrollLeft - rootRef.current.clientWidth + buttonWidth + gradientWidth,
        behavior: 'smooth',
      });
    }
  };
  const handleRightButtonClick: IconButtonProps['onClick'] = () => {
    if (rootRef.current) {
      rootRef.current.scrollTo({
        left: rootRef.current.scrollLeft + rootRef.current.clientWidth - (buttonWidth + gradientWidth),
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    handleScrollButtonVisibility();
  }, []);

  useResize(handleScrollButtonVisibility);

  return (
    <TabContext.Provider value={{ variant, size, containerRef: rootRef }}>
      <View position={'relative'}>
        <View
          ref={rootRef}
          role={'tablist'}
          sx={{
            'width': 'auto',
            'display': 'flex',
            'flexDirection': 'row',
            'alignItems': 'center',
            'columnGap': gap,
            'overflowX': 'auto',

            'msOverflowStyle': 'none',
            '::-webkit-scrollbar': { display: 'none' },
          }}
          onScroll={throttle(handleScrollButtonVisibility, 150)}
        >
          {children}
        </View>
        <View display={['none', 'initial', 'initial']}>
          {isLeftButtonVisible ? (
            <>
              <View
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: forcePixelValue(buttonWidth),
                  bottom: 0,
                  width: forcePixelValue(gradientWidth),
                  height: '100%',
                  background: `linear-gradient(${theme.gradients['overlay/floating/toright']})`,
                  pointerEvents: 'none',
                }}
              />
              <View
                sx={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  backgroundColor: theme.colors.surface,
                }}
              >
                <IconButton size={'s'} variant={'plain-bold'} icon={ChevronLeftIcon} onClick={handleLeftButtonClick} />
              </View>
            </>
          ) : null}
          {isRightButtonVisible ? (
            <>
              <View
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: forcePixelValue(buttonWidth),
                  bottom: 0,
                  width: forcePixelValue(gradientWidth),
                  height: '100%',
                  background: `linear-gradient(${theme.gradients['overlay/floating/toleft']})`,
                  pointerEvents: 'none',
                }}
              />
              <View
                sx={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: theme.colors.surface,
                }}
              >
                <IconButton
                  size={'s'}
                  variant={'plain-bold'}
                  icon={ChevronRightIcon}
                  onClick={handleRightButtonClick}
                />
              </View>
            </>
          ) : null}
        </View>
      </View>
    </TabContext.Provider>
  );
};

export default Object.assign(Tab, { Item: TabItem });
export { TabContext };
export type { Props as TabProps, TabContextValue };
