import { forcePixelValue } from '@teamturing/utils';
import { InputHTMLAttributes, Ref, forwardRef } from 'react';
import styled from 'styled-components';

import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';
import { SxProp, sx } from '../../utils/styled-system';

type Props = {
  validationStatus?: 'error' | 'success' | undefined;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  SxProp;

const Switch = ({ checked, validationStatus, ...props }: Props, ref: Ref<HTMLInputElement>) => {
  const checkboxRef = useProvidedOrCreatedRef(ref as React.RefObject<HTMLInputElement>);
  return <BaseSwitch ref={checkboxRef} checked={checked} validationStatus={validationStatus} {...props} />;
};

const UnstyledSwitch = styled.input.attrs({ type: 'checkbox' })<SxProp>`
  appearance: none;

  ${sx}
`;

const BaseSwitch = styled(UnstyledSwitch)<Props>`
  position: relative;

  width: ${forcePixelValue(36)};
  height: ${forcePixelValue(20)};

  border-radius: ${({ theme }) => `${forcePixelValue(theme.radii.full)}`};
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors['bg/neutral']};

  transition: background-color 200ms;

  &::before {
    content: '';
    position: absolute;
    width: ${forcePixelValue(16)};
    height: ${forcePixelValue(16)};
    background-color: ${({ theme }) => theme.colors['surface']};
    top: ${forcePixelValue(2)};
    border-radius: ${({ theme }) => `${forcePixelValue(theme.radii.full)}`};

    transform: translateX(${forcePixelValue(2)});
    transition: transform 200ms;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors['bg/disabled']};
    cursor: not-allowed;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors['bg/primary']};

    &::before {
      transform: translateX(${forcePixelValue(36 - 16 - 2)});
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors['bg/primary/disabled']};
    }
  }

  &:focus-visible {
    outline-width: ${forcePixelValue(2)};
    outline-style: solid;
    outline-color: ${({ theme }) => theme.colors['border/focused']};
  }

  ${sx}
`;

export default forwardRef(Switch);
export type { Props as SwitchProps };
