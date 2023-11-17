import { forcePixelValue } from '@teamturing/utils';
import { InputHTMLAttributes, Ref, forwardRef } from 'react';
import styled, { css } from 'styled-components';

import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';
import useSafeLayoutEffect from '../../hook/useSafeLayoutEffect';
import { SxProp, sx } from '../../utils/styled-system';

type Props = {
  validationStatus?: 'error' | 'success' | undefined;
  indeterminate?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  SxProp;

const Checkbox = (
  { checked, validationStatus, indeterminate = false, ...props }: Props,
  ref: Ref<HTMLInputElement>,
) => {
  const checkboxRef = useProvidedOrCreatedRef(ref as React.RefObject<HTMLInputElement>);

  useSafeLayoutEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate || false;
    }
  }, [indeterminate, checked, checkboxRef]);

  return <BaseCheckbox ref={checkboxRef} checked={checked} validationStatus={validationStatus} {...props} />;
};

const UnstyledCheckbox = styled.input.attrs({ type: 'checkbox' })<SxProp>`
  appearance: none;

  ${sx}
`;

const BaseCheckbox = styled(UnstyledCheckbox)<Props>`
  position: relative;

  width: ${forcePixelValue(20)};
  height: ${forcePixelValue(20)};

  border-width: ${forcePixelValue(2)};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors['border/neutral']};
  border-radius: ${({ theme }) => `${forcePixelValue(theme.radii.xxs)}`};
  cursor: pointer;

  transition: visibility 200ms;

  &::before {
    visibility: hidden;

    content: '';
    display: grid;
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border-radius: ${({ theme }) => `${forcePixelValue(theme.radii.xxs)}`};

    background-color: ${({ theme }) => theme.colors['icon/inverse']};
    mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6 17.2C10.3 17.2 10 17.1 9.80001 16.8L5.20001 12.2C4.70001 11.7 4.70001 11 5.20001 10.5C5.70001 9.99998 6.40001 9.99998 6.90001 10.5L10.6 14.2L17.2 7.59998C17.7 7.09998 18.4 7.09998 18.9 7.59998C19.4 8.09998 19.4 8.79998 18.9 9.29998L11.5 16.7C11.2 17.1 10.9 17.2 10.6 17.2Z' fill='%238D94A0'/%3E%3C/svg%3E%0A");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6 17.2C10.3 17.2 10 17.1 9.80001 16.8L5.20001 12.2C4.70001 11.7 4.70001 11 5.20001 10.5C5.70001 9.99998 6.40001 9.99998 6.90001 10.5L10.6 14.2L17.2 7.59998C17.7 7.09998 18.4 7.09998 18.9 7.59998C19.4 8.09998 19.4 8.79998 18.9 9.29998L11.5 16.7C11.2 17.1 10.9 17.2 10.6 17.2Z' fill='%238D94A0'/%3E%3C/svg%3E%0A");
    mask-size: 100%;
    -webkit-mask-size: 100%;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-position: center;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors['bg/disabled']};
    border-color: ${({ theme }) => theme.colors['border/disabled']};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors['bg/primary']};
    border-width: 0;

    &::before {
      visibility: visible;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors['bg/disabled']};
      border-color: ${({ theme }) => theme.colors['border/disabled']};

      &::before {
        background-color: ${({ theme }) => theme.colors['icon/disabled']};
      }
    }
  }

  &:indeterminate {
    background-color: ${({ theme }) => theme.colors['bg/primary']};
    border-width: 0;

    &::before {
      visibility: visible;
      mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.05 13.2H4.05001C3.73175 13.2 3.42652 13.0736 3.20148 12.8485C2.97643 12.6235 2.85001 12.3182 2.85001 12C2.85001 11.6817 2.97643 11.3765 3.20148 11.1515C3.42652 10.9264 3.73175 10.8 4.05001 10.8H20.05C20.3683 10.8 20.6735 10.9264 20.8985 11.1515C21.1236 11.3765 21.25 11.6817 21.25 12C21.25 12.3182 21.1236 12.6235 20.8985 12.8485C20.6735 13.0736 20.3683 13.2 20.05 13.2Z' fill='%238D94A0'/%3E%3C/svg%3E%0A");
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.05 13.2H4.05001C3.73175 13.2 3.42652 13.0736 3.20148 12.8485C2.97643 12.6235 2.85001 12.3182 2.85001 12C2.85001 11.6817 2.97643 11.3765 3.20148 11.1515C3.42652 10.9264 3.73175 10.8 4.05001 10.8H20.05C20.3683 10.8 20.6735 10.9264 20.8985 11.1515C21.1236 11.3765 21.25 11.6817 21.25 12C21.25 12.3182 21.1236 12.6235 20.8985 12.8485C20.6735 13.0736 20.3683 13.2 20.05 13.2Z' fill='%238D94A0'/%3E%3C/svg%3E%0A");
      mask-size: 100%;
      -webkit-mask-size: 100%;
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-position: center;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors['bg/disabled']};
      border-color: ${({ theme }) => theme.colors['border/disabled']};

      &::before {
        background-color: ${({ theme }) => theme.colors['icon/disabled']};
      }
    }
  }

  &:focus-visible {
    outline-width: ${forcePixelValue(2)};
    outline-style: solid;
    outline-color: ${({ theme }) => theme.colors['border/focused']};
  }

  ${(props) =>
    props.validationStatus === 'error' &&
    css`
      border-color: ${({ theme }) => theme.colors['border/danger']};
    `}

  ${sx}
`;

export default forwardRef(Checkbox);
export type { Props as CheckboxProps };
