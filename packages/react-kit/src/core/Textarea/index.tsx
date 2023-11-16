import { MutableRefObject, Ref, RefObject, TextareaHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';

import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';
import { forcePixelValue } from '../../utils';
import { isFunction } from '../../utils/isFunction';

type Props = {
  validationStatus?: 'error' | 'success' | undefined;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ disabled, ...props }: Props, ref: Ref<HTMLTextAreaElement>) => {
    const inputRef = useProvidedOrCreatedRef(ref as RefObject<HTMLTextAreaElement>);

    const focusInput = () => {
      inputRef.current?.focus();
    };

    return (
      <TextareaWrapper disabled={disabled} onClick={focusInput}>
        <BaseTextarea
          ref={(e) => {
            isFunction(ref) ? ref(e) : null;
            (inputRef as MutableRefObject<HTMLTextAreaElement | null>).current = e;
          }}
          disabled={disabled}
          {...props}
        />
      </TextareaWrapper>
    );
  },
);

const TextareaWrapper = styled.div<Pick<Props, 'validationStatus'> & { disabled?: boolean }>`
  position: relative;
  width: ${forcePixelValue('100%')};
  border-width: ${forcePixelValue(1)};
  border-style: solid;
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  border-color: ${({ theme }) => theme.colors['border/input']};
  background-color: ${({ theme }) => theme.colors['bg/input']};
  cursor: text;
  display: inline-flex;
  align-items: center;

  padding-top: ${({ theme }) => forcePixelValue(theme.space['3'])};
  padding-right: ${({ theme }) => forcePixelValue(theme.space['4'])};
  padding-bottom: ${({ theme }) => forcePixelValue(theme.space['3'])};
  padding-left: ${({ theme }) => forcePixelValue(theme.space['4'])};

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors['text/neutral']};
  input::placeholder {
    color: ${({ theme }) => theme.colors['text/neutral/subtlest']};
  }

  height: 74px;

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

      textarea::placeholder {
        color: ${props.theme.colors['text/disabled']};
      }

      &,
      textarea {
        cursor: not-allowed;
      }
    `};
`;

const UnstyledTextarea = styled.textarea`
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

const BaseTextarea = styled(UnstyledTextarea)`
  resize: none;
`;

export default Textarea;
export type { Props as TextareaProps };
