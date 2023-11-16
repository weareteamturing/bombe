import { ChevronDownIcon } from '@teamturing/icons';
import { noop } from '@teamturing/utils';
import {
  ElementType,
  InputHTMLAttributes,
  MutableRefObject,
  PropsWithChildren,
  ReactNode,
  Ref,
  RefObject,
  forwardRef,
} from 'react';
import { isValidElementType } from 'react-is';
import styled, { css } from 'styled-components';

import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';
import { forcePixelValue } from '../../utils/forcePixelValue';
import { isFunction } from '../../utils/isFunction';
import { isNullable } from '../../utils/isNullable';
import Overlay from '../Overlay';
import OverlayPopper from '../OverlayPopper';
import StyledIcon from '../StyledIcon';
import View from '../View';

type Props = {
  /**
   * TODO asdf
   */
  validationStatus?: 'error' | 'success' | undefined;
  /**
   * 입력 창 앞에 보여질 시각적 요소를 정의합니다. Icon, Text, Image 등이 될 수 있습니다.
   */
  leadingVisual?: ElementType | ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const OverlaySelectInput = (
  { validationStatus, leadingVisual: LeadingVisual, children, ...props }: PropsWithChildren<Props>,
  ref: Ref<HTMLInputElement>,
) => {
  const inputRef = useProvidedOrCreatedRef(ref as RefObject<HTMLInputElement>);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const { disabled } = props;

  return (
    <OverlayPopper
      renderOverlay={(overlayProps, _, { elements }) => (
        <Overlay
          {...overlayProps}
          style={{ ...overlayProps.style, width: elements?.reference?.getBoundingClientRect().width }}
        >
          {children}
        </Overlay>
      )}
    >
      {(popperProps, { openOverlay }) => (
        <TextInputWrapper
          {...popperProps}
          tabIndex={disabled ? -1 : 0}
          disabled={disabled}
          onClick={focusInput}
          hasLeadingVisual={!isNullable(LeadingVisual)}
          validationStatus={validationStatus}
          onKeyDown={(e) => {
            if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
              e.preventDefault();
              openOverlay();
            }
          }}
        >
          <View
            sx={{
              'flexShrink': 0,
              'fontSize': 'xxs',
              'fontWeight': 'medium',
              'color': 'text/neutral',
              '& > svg': { display: 'block', width: 16, height: 16, color: 'icon/neutral/bold' },
            }}
          >
            {typeof LeadingVisual !== 'string' && isValidElementType(LeadingVisual) ? (
              <LeadingVisual />
            ) : (
              (LeadingVisual as ReactNode)
            )}
          </View>
          <BaseInput
            ref={(e) => {
              isFunction(ref) ? ref(e) : null;
              (inputRef as MutableRefObject<HTMLInputElement | null>).current = e;
            }}
            value={''}
            onChange={noop}
            {...props}
            autoComplete={'off'}
            tabIndex={-1}
            onClick={(e) => {
              popperProps.onClick?.(e);

              props.onClick?.(e);
            }}
          />
          <StyledIcon
            sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 4, pointerEvents: 'none' }}
            icon={ChevronDownIcon}
            color={disabled ? 'icon/disabled' : 'icon/neutral/bolder'}
            size={16}
          />
        </TextInputWrapper>
      )}
    </OverlayPopper>
  );
};

type TextInputWrapperProps = {
  hasLeadingVisual?: boolean;
} & Pick<Props, 'validationStatus' | 'disabled'>;

const TextInputWrapper = styled.div<TextInputWrapperProps>`
  position: relative;
  width: ${forcePixelValue('100%')};
  border-width: ${forcePixelValue(1)};
  border-style: solid;
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  border-color: ${({ theme }) => theme.colors['border/input']};
  background-color: ${({ theme }) => theme.colors['bg/input']};
  cursor: default;
  input {
    cursor: default;
  }
  display: inline-flex;
  align-items: center;

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors['text/neutral']};
  input::placeholder {
    color: ${({ theme }) => theme.colors['text/neutral/subtlest']};
  }

  &:after {
    content: '';
    position: absolute;
    top: ${forcePixelValue(-1)};
    right: ${forcePixelValue(-1)};
    bottom: ${forcePixelValue(-1)};
    left: ${forcePixelValue(-1)};

    border: ${forcePixelValue(2)} solid transparent;
    border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
    pointer-events: none;
  }

  ${(props) =>
    props.validationStatus !== 'error' &&
    !props.disabled &&
    css`
      &:hover:not(:focus-within) {
        &:after {
          border-color: ${({ theme }) => theme.colors['border/hovered']};
        }
      }
    `}

  ${(props) =>
    props.validationStatus === 'error' &&
    css`
      &:after {
        border-color: ${({ theme }) => theme.colors['border/danger']};
      }
    `}

  ${(props) =>
    props.validationStatus !== 'error' &&
    !props.disabled &&
    css`
      &:focus-within {
        &:after {
          border-color: ${({ theme }) => theme.colors['border/focused']};
        }
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      border-color: ${props.theme.colors['border/input']};
      background-color: ${props.theme.colors['bg/disabled']};
      color: ${props.theme.colors['text/disabled']};

      input::placeholder {
        color: ${props.theme.colors['text/disabled']};
      }

      input {
        cursor: not-allowed;
      }
    `};

  ${(props) =>
    props.hasLeadingVisual &&
    css`
      padding-left: ${forcePixelValue(props.theme.space[4])};
      input {
        padding-left: ${forcePixelValue(props.theme.space[2])};
      }
    `}

  transition: color 100ms, background-color 100ms;
  &:after {
    transition: border-color 100ms;
  }
`;

const UnstyledInput = styled.input`
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  border-radius: inherit;
  color: inherit;
  transition: inherit;

  border: 0;
  background-color: transparent;
  width: 100%;
  &:focus {
    outline: 0;
  }
`;

const BaseInput = styled(UnstyledInput)`
  padding-top: ${({ theme }) => forcePixelValue(theme.space[3])};
  padding-right: ${({ theme }) => forcePixelValue(theme.space[10])};
  padding-bottom: ${({ theme }) => forcePixelValue(theme.space[3])};
  padding-left: ${({ theme }) => forcePixelValue(theme.space[4])};

  white-space: pre;
  text-overflow: ellipsis;
  pointer-events: none;
`;

export default forwardRef(OverlaySelectInput);
export type { Props as OverlaySelectInputProps };
