import { ShareIcon } from '@teamturing/icons';
import { forcePixelValue } from '@teamturing/utils';
import { DragEventHandler, InputHTMLAttributes, Ref, forwardRef, useImperativeHandle, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import Button, { ButtonProps } from '../Button';

type Props = {
  buttonProps?: Pick<ButtonProps, 'children' | 'variant' | 'size' | 'leadingIcon' | 'trailingIcon'>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const UploadInput = (
  { buttonProps: propsButtonProps, placeholder: propPlaceholder, accept, disabled, ...props }: Props,
  ref: Ref<HTMLInputElement>,
) => {
  const theme = useTheme();
  const placeholder = propPlaceholder ?? theme.locales?.UploadInput?.placeholder ?? '파일을 끌어다 놓으세요';
  const defaultButtonProps: ButtonProps = {
    children: theme.locales?.UploadInput?.selectFile ?? '파일 선택',
    size: 's',
    variant: 'neutral',
  };
  const buttonProps = { ...defaultButtonProps, ...propsButtonProps };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleDragOver: DragEventHandler<HTMLDivElement> = (e) => e.preventDefault();
  const handleDragEnter: DragEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    e.currentTarget?.classList.add('upload-input__wrapper__active');
  };
  const handleDragLeave: DragEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    e.currentTarget?.classList.remove('upload-input__wrapper__active');
  };
  const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    const files = e.dataTransfer?.files ?? [];
    if (files.length < 1) return;
    if (!props.multiple && files.length > 1) {
      e.currentTarget?.classList.remove('upload-input__wrapper__active');
      return;
    }

    const isAcceptableFile = new RegExp(
      (accept || '*').replace(/\*/g, '.*').replace(/,/g, '|').replace(/\s/g, ''),
    ).test(files[0].type);
    if (!isAcceptableFile) return;

    e.currentTarget?.classList.remove('upload-input__wrapper__active');

    if (inputRef && inputRef.current && files) {
      const currentFiles = inputRef.current.files;

      if (files.length !== currentFiles?.length) {
        inputRef.current.files = files;
        inputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
        return;
      }

      const isSameFiles = Array.from(files).every((file, index) => {
        const currentFile = currentFiles?.item(index);

        return (
          file.name === currentFile?.name &&
          file.size === currentFile?.size &&
          file.lastModified === currentFile?.lastModified
        );
      });

      if (isSameFiles) return;

      inputRef.current.files = files;
      inputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  useImperativeHandle(ref, () => inputRef.current!, []);

  return (
    <UploadInputWrapper
      disabled={disabled}
      {...(disabled
        ? {}
        : {
            onDragOver: handleDragOver,
            onDragEnter: handleDragEnter,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop,
          })}
    >
      <ShareIcon />
      <span>{placeholder}</span>
      <Button type={'button'} {...buttonProps} onClick={handleButtonClick} disabled={disabled} />
      <UnstyledInput ref={inputRef} {...props} type={'file'} hidden accept={accept} tabIndex={-1} disabled={disabled} />
    </UploadInputWrapper>
  );
};

const UploadInputWrapper = styled.div<{ disabled?: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: ${({ theme }) => forcePixelValue(theme.space[2])};
  padding: ${({ theme }) => forcePixelValue(theme.space[4])};

  & > svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors['icon/neutral/bold']};
  }

  & > span {
    font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: ${({ theme }) => theme.lineHeights[2]};
    color: ${({ theme }) => theme.colors['text/neutral/subtlest']};
  }

  border-width: ${forcePixelValue(1)};
  border-style: dashed;
  border-color: ${({ theme }) => theme.colors['border/neutral/bolder']};
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  background-color: ${({ theme }) => theme.colors['bg/neutral/subtlest']};

  &.upload-input__wrapper__active {
    background-color: ${({ theme }) => theme.colors['bg/selected/subtle']};
  }

  position: relative;
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
  &:focus-within {
    &:after {
      border-color: ${({ theme }) => theme.colors['border/focused']};
    }
  }

  & > button:focus-visible {
    outline: none;
  }

  ${({ theme, disabled }) =>
    disabled
      ? {
          'cursor': 'not-allowed',
          'backgroundColor': theme.colors['bg/disabled'],
          '& > svg': { color: theme.colors['icon/disabled'] },
          '& > span': { color: theme.colors['text/disabled'] },
        }
      : {}}

  transition: background-color 200ms ease-in-out;
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

export default forwardRef(UploadInput);
export type { Props as UploadInputProps };
