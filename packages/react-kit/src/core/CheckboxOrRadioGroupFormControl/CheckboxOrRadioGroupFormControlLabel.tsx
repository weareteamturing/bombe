import { forcePixelValue } from '@teamturing/utils';
import { PropsWithChildren, useContext } from 'react';
import styled, { useTheme } from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';
import View from '../View';

import { CheckboxOrRadioGroupFormControlContext, CheckboxOrRadioGroupFormControlContextValue } from '.';

type Props = {
  visuallyHidden?: boolean;
} & SxProp;

const CheckboxOrRadioGroupFormControlLabel = ({ children, visuallyHidden, ...props }: PropsWithChildren<Props>) => {
  const { id, disabled, required } = useContext(CheckboxOrRadioGroupFormControlContext);
  const theme = useTheme();

  return (
    <VisuallyHidden
      as={'label'}
      htmlFor={id}
      sx={{ width: 'fit-content', display: 'contents' }}
      isVisible={!visuallyHidden}
    >
      <LabelWrapper {...props} disabled={disabled}>
        {children}
        {typeof required === 'boolean' && required === false ? (
          <View
            as={'span'}
            className={'checkbox_or_radio_group_form_control_label__required__false'}
            aria-hidden="true"
          >
            {theme.locales?.FormControl?.optionalLabel ?? ' (선택)'}
          </View>
        ) : null}
      </LabelWrapper>
    </VisuallyHidden>
  );
};

const VisuallyHidden = styled.span<{ isVisible?: boolean } & SxProp>`
  ${({ isVisible = false }) => {
    if (isVisible) {
      return sx;
    }

    return `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    `;
  }}
`;

const LabelWrapper = styled(View)<SxProp & CheckboxOrRadioGroupFormControlContextValue>`
  display: inline-block;
  align-self: flex-start;

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[2]};

  color: ${({ theme }) => theme.colors['text/neutral/subtle']};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  span.checkbox_or_radio_group_form_control_label__required__false {
    font-size: inherit;
    font-weight: inherit;
    color: ${({ theme }) => theme.colors['text/neutral/subtlest']};
  }

  ${sx};
`;

export default CheckboxOrRadioGroupFormControlLabel;
export type { Props as CheckboxOrRadioGroupFormControlLabelProps };
