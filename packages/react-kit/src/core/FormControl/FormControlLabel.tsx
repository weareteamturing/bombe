import { forcePixelValue } from '@teamturing/utils';
import { PropsWithChildren, useContext } from 'react';
import styled from 'styled-components';

import { SxProp, sx } from '../../utils/styled-system';
import View from '../View';

import { FormControlContext, FormControlContextValue } from '.';

type Props = {
  visuallyHidden?: boolean;
} & SxProp;

const FormControlLabel = ({ children, visuallyHidden, ...props }: PropsWithChildren<Props>) => {
  const { id, disabled, required } = useContext(FormControlContext);

  return (
    <VisuallyHidden as={'label'} htmlFor={id} sx={{ width: 'fit-content' }} isVisible={!visuallyHidden}>
      <LabelWrapper {...props} disabled={disabled}>
        {children}
        {required ? (
          <View as={'span'} aria-hidden="true">
            {' *'}
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

const LabelWrapper = styled(View)<SxProp & FormControlContextValue>`
  display: inline-block;
  align-self: flex-start;

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[2]};

  color: ${({ theme }) => theme.colors['text/neutral/subtle']};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${sx};
`;

export default FormControlLabel;
export type { Props as FormControlLabelProps };
