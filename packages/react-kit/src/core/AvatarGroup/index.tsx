import { forcePixelValue } from '@teamturing/utils';
import React, { PropsWithChildren, ReactElement, Ref, forwardRef } from 'react';
import styled from 'styled-components';

import { sx, SxProp } from '../../utils/styled-system';
import Avatar from '../Avatar';
import Overlay from '../Overlay';
import OverlayPopper from '../OverlayPopper';
import Space from '../Space';
import Text from '../Text';
import View from '../View';
import UnstyledButton from '../_UnstyledButton';

import AvatarGroupItem from './AvatarGroupItem';

type Props = {
  maxItemCount?: number;
} & SxProp;

const AvatarGroup = (
  { children: propChildren, maxItemCount = 5, ...props }: PropsWithChildren<Props>,
  ref: Ref<HTMLDivElement>,
) => {
  const childrenArray = React.Children.toArray(propChildren);
  const isOverflown = childrenArray.length > maxItemCount;

  return (
    <AvatarGroupWrapper ref={ref}>
      <BaseAvatarGroup {...props}>{[...childrenArray.slice(0, maxItemCount)].reverse()}</BaseAvatarGroup>
      {isOverflown ? (
        <OverlayPopper
          placement={'bottom'}
          renderOverlay={(overlayProps) => {
            return (
              <Overlay
                size={'s'}
                maxHeight={300}
                sx={{ overflow: 'auto' }}
                onClick={(e) => e.stopPropagation()}
                {...overlayProps}
              >
                <Space px={1} py={2}>
                  {(childrenArray as Array<ReactElement>).slice(maxItemCount).map(({ key, props }) => (
                    <View key={key} sx={{ p: 3, display: 'flex', alignItems: 'center', columnGap: 2 }}>
                      <Avatar size={'xs'} src={props.src} alt={props.alt} />
                      <Text typography={'xs'} color={'text/neutral'}>
                        {props.alt}
                      </Text>
                    </View>
                  ))}
                </Space>
              </Overlay>
            );
          }}
        >
          {(popperProps) => (
            <UnstyledButton
              {...popperProps}
              onClick={(e) => {
                e.stopPropagation();
                popperProps.onClick?.(e);
              }}
              sx={{
                'p': 0.5,
                'fontSize': 'xxs',
                'fontWeight': 'medium',
                'color': 'text/neutral/subtle',
                'borderRadius': 'xxs',
                '&:hover': { backgroundColor: 'bg/neutral/subtlest/hovered' },
              }}
            >
              +{childrenArray.length - maxItemCount}
            </UnstyledButton>
          )}
        </OverlayPopper>
      ) : null}
    </AvatarGroupWrapper>
  );
};

const AvatarGroupWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  column-gap: ${({ theme }) => forcePixelValue(theme.space[1])};
`;

const BaseAvatarGroup = styled.ol<Props>`
  list-style: none;
  padding: 0;
  margin: 0;

  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;

  & > * {
    position: relative;
    background-color: ${({ theme }) => theme.colors['border/neutral/subtle']};
    padding: ${({ theme }) => forcePixelValue(theme.space['0.25'])};
    border-radius: ${({ theme }) => forcePixelValue(theme.radii.full)};

    margin-left: ${({ theme }) => forcePixelValue(theme.space[-1])};

    &:last-child {
      margin-left: 0;
    }
  }

  ${sx}
`;

export default Object.assign(forwardRef(AvatarGroup), { Item: AvatarGroupItem });
export type { Props as AvatarGroupProps };
