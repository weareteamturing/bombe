import { commaizeNumber, forcePixelValue, isFunction } from '@teamturing/utils';
import toArray from 'lodash.toarray';
import { MutableRefObject, Ref, RefObject, forwardRef, useEffect, useState } from 'react';
import ReactTextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';
import styled, { css } from 'styled-components';

import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';

type Props = {
  validationStatus?: 'error' | 'success' | undefined;
} & TextareaAutosizeProps;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ validationStatus, disabled, ...props }: Props, ref: Ref<HTMLTextAreaElement>) => {
    const inputRef = useProvidedOrCreatedRef(ref as RefObject<HTMLTextAreaElement>);

    const focusInput = () => {
      inputRef.current?.focus();
    };
    const getTextareaLength = (value: string) => {
      return toArray(value).length;
    };

    const [count, setCount] = useState(0);
    const handleChange: Props['onChange'] = (e) => {
      setCount(getTextareaLength(e.target.value));

      props.onChange?.(e);
    };

    useEffect(() => {
      if (inputRef.current) {
        setCount(getTextareaLength(inputRef.current.value));
      }
    }, [ref]);

    return (
      <TextareaWrapper disabled={disabled} onClick={focusInput} validationStatus={validationStatus}>
        <ReactTextareaAutosize
          {...props}
          ref={(e) => {
            isFunction(ref) ? ref(e) : null;
            (inputRef as MutableRefObject<HTMLTextAreaElement | null>).current = e;
          }}
          disabled={disabled}
          minRows={7}
          onChange={handleChange}
        />
        <TextareaCount>{commaizeNumber(count)}자</TextareaCount>
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
  flex-direction: column;
  align-items: center;

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors['text/neutral']};
  textarea::placeholder {
    color: ${({ theme }) => theme.colors['text/neutral/subtlest']};
  }
  textarea {
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
    resize: none;

    padding-top: ${({ theme }) => forcePixelValue(theme.space['3'])};
    padding-right: ${({ theme }) => forcePixelValue(theme.space['4'])};
    padding-bottom: ${({ theme }) => forcePixelValue(theme.space['3'])};
    padding-left: ${({ theme }) => forcePixelValue(theme.space['4'])};
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

const TextareaCount = styled.div`
  width: 100%;

  padding-right: ${({ theme }) => forcePixelValue(theme.space[4])};
  padding-bottom: ${({ theme }) => forcePixelValue(theme.space[3])};
  padding-left: ${({ theme }) => forcePixelValue(theme.space[4])};

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xxs)};
  font-weight: ${({ theme }) => forcePixelValue(theme.fontWeights.medium)};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors['text/neutral/subtlest']};
  text-align: end;
`;

export default Textarea;
export type { Props as TextareaProps };
