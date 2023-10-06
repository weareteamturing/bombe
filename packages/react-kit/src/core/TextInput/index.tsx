import { color } from '@teamturing/token-studio';
import {
  ElementType,
  HTMLProps,
  InputHTMLAttributes,
  MutableRefObject,
  ReactNode,
  Ref,
  RefObject,
  cloneElement,
  forwardRef,
} from 'react';
import { isValidElementType } from 'react-is';
import styled, { css } from 'styled-components';

import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';
import { forcePixelValue, isFunction, isNullable } from '../../utils';
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
  /**
   * 입력 창 뒤에 보여질 시각적 요소를 정의합니다. Icon, Text, Image 등이 될 수 있습니다.
   */
  trailingVisual?: ElementType | ReactNode;
  /**
   * 입력 창 뒤에 사용작용할 요소를 정의합니다.
   */
  trailingAction?: React.ReactElement<HTMLProps<HTMLButtonElement>>;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      type = 'text',
      disabled,
      validationStatus,
      leadingVisual: LeadingVisual,
      trailingVisual: TrailingVisual,
      trailingAction,
      ...props
    }: Props,
    ref: Ref<HTMLInputElement>,
  ) => {
    const inputRef = useProvidedOrCreatedRef(ref as RefObject<HTMLInputElement>);

    const focusInput = () => {
      inputRef.current?.focus();
    };

    return (
      <TextInputWrapper
        disabled={disabled}
        onClick={focusInput}
        hasLeadingVisual={!isNullable(LeadingVisual)}
        hasTrailingVisual={!isNullable(TrailingVisual)}
        hasTrailingAction={!isNullable(trailingAction)}
        validationStatus={validationStatus}
      >
        <View
          sx={{
            'flexShrink': 0,
            'fontSize': 'xxs',
            'fontWeight': 'medium',
            'color': color['text/neutral'],
            '& > svg': { display: 'block', width: 24, height: 24, color: color['icon/neutral/bold'] },
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
          type={type}
          disabled={disabled}
          {...props}
        />
        <View
          sx={{
            'display': 'flex',
            'alignItems': 'center',
            'columnGap': 2,
            'flexShrink': 0,
            'fontSize': 'xxs',
            'fontWeight': 'medium',
            'color': color['text/neutral'],
            '& > svg': { display: 'block', width: 24, height: 24, color: color['icon/neutral/bold'] },
          }}
        >
          {typeof TrailingVisual !== 'string' && isValidElementType(TrailingVisual) ? (
            <TrailingVisual />
          ) : (
            (TrailingVisual as ReactNode)
          )}
          {trailingAction ? cloneElement(trailingAction, { disabled: disabled }) : null}
        </View>
      </TextInputWrapper>
    );
  },
);

type TextInputWrapperProps = {
  isInputFocused?: boolean;
  hasLeadingVisual?: boolean;
  hasTrailingVisual?: boolean;
  hasTrailingAction?: boolean;
} & Pick<Props, 'validationStatus' | 'disabled'>;

const TextInputWrapper = styled.div<TextInputWrapperProps>`
  position: relative;
  width: ${forcePixelValue('100%')};
  border-width: ${forcePixelValue(1)};
  border-style: solid;
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.s)};
  border-color: ${({ theme }) => theme.colors['border/input']};
  background-color: ${({ theme }) => theme.colors['bg/input']};
  cursor: text;
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
    border-radius: ${({ theme }) => forcePixelValue(theme.radii.s)};
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
      padding-left: ${forcePixelValue(props.theme.space[5])};
      input {
        padding-left: ${forcePixelValue(props.theme.space[3])};
      }
    `}

  ${(props) =>
    (props.hasTrailingVisual || props.hasTrailingAction) &&
    css`
      padding-right: ${forcePixelValue(props.theme.space[3])};
      input {
        padding-right: ${forcePixelValue(props.theme.space[3])};
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
  padding-top: ${({ theme }) => forcePixelValue(theme.space['4'])};
  padding-right: ${({ theme }) => forcePixelValue(theme.space['4'])};
  padding-bottom: ${({ theme }) => forcePixelValue(theme.space['4'])};
  padding-left: ${({ theme }) => forcePixelValue(theme.space['5'])};
`;

export default TextInput;
export type { Props as TextInputProps };
