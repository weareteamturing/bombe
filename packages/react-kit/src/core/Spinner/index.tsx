import { ProgressGradientIcon, ProgressLineIcon } from '@teamturing/icons';
import { forwardRef, SVGProps } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';

type SpinnerVariantType = 'progress-gradient' | 'progress-line';

type Props = { variant?: SpinnerVariantType } & Omit<SVGProps<SVGSVGElement>, 'ref'>;

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ProgressGradientSpinner = styled(ProgressGradientIcon)`
  color: ${({ theme }) => theme.colors['icon/neutral']};
  animation: ${spin} 1000ms infinite steps(8, end);
`;

const ProgressLineSpinner = styled(ProgressLineIcon)`
  color: ${({ theme }) => theme.colors['icon/neutral']};
  animation: ${spin} 1000ms infinite linear;
`;

const Spinner = forwardRef<SVGSVGElement, Props>(
  ({ variant: propsVariant, width = 32, height = 32, ...props }, ref) => {
    const theme = useTheme();
    const variant: SpinnerVariantType =
      propsVariant ?? theme.components?.spinner?.defaultVariant ?? 'progress-gradient';
    const SpinnerComponent = {
      'progress-gradient': ProgressGradientSpinner,
      'progress-line': ProgressLineSpinner,
    }[variant];

    return <SpinnerComponent ref={ref} width={width} height={height} {...props} />;
  },
);

export default Spinner;
export type { Props as SpinnerProps };
