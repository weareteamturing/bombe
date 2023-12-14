import { forcePixelValue } from '@teamturing/utils';
import { InputHTMLAttributes, Ref, forwardRef } from 'react';
import styled, { css } from 'styled-components';

import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';
import { SxProp, sx } from '../../utils/styled-system';

type Props = {
  validationStatus?: 'error' | 'success' | undefined;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  SxProp;

const Radio = ({ checked, validationStatus, ...props }: Props, ref: Ref<HTMLInputElement>) => {
  const radioRef = useProvidedOrCreatedRef(ref as React.RefObject<HTMLInputElement>);

  return <BaseRadio ref={radioRef} checked={checked} validationStatus={validationStatus} {...props} />;
};

const UnstyledRadio = styled.input.attrs({ type: 'radio' })<SxProp>`
  appearance: none;

  ${sx}
`;

const BaseRadio = styled(UnstyledRadio)<Props>`
  position: relative;

  width: ${forcePixelValue(20)};
  height: ${forcePixelValue(20)};

  border-width: ${forcePixelValue(2)};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors['border/neutral']};
  border-radius: ${({ theme }) => `${forcePixelValue(theme.radii.full)}`};
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

    border-radius: ${({ theme }) => `${forcePixelValue(theme.radii.full)}`};

    background-color: ${({ theme }) => theme.colors['icon/inverse']};
    mask-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='4' fill='white'/%3E%3C/svg%3E%0A");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='4' fill='white'/%3E%3C/svg%3E%0A");
    mask-size: 40%;
    -webkit-mask-size: 40%;
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

export default forwardRef(Radio);
export type { Props as RadioProps };
