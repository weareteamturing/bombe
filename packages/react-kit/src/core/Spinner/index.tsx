import { ProgressGradientIcon, ProgressLineIcon } from '@teamturing/icons';
import { forwardRef, SVGProps } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';

type SpinnerVariantType = 'progress-gradient' | 'progress-line';

type Props = {
  variant?: SpinnerVariantType;
  /**
   * 스크린 리더에 읽힐 로딩 상태 텍스트를 정의합니다.
   * 빈 문자열(`''`)을 전달하면 장식용으로 간주되어 보조 기술에서 숨겨집니다.
   * @default '로딩 중'
   */
  label?: string;
} & Omit<SVGProps<SVGSVGElement>, 'ref'>;

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
  ({ variant: propsVariant, width = 32, height = 32, label = '로딩 중', ...props }, ref) => {
    const theme = useTheme();
    const variant: SpinnerVariantType =
      propsVariant ?? theme.components?.spinner?.defaultVariant ?? 'progress-gradient';
    const SpinnerComponent = {
      'progress-gradient': ProgressGradientSpinner,
      'progress-line': ProgressLineSpinner,
    }[variant];

    const a11yProps: Pick<SVGProps<SVGSVGElement>, 'role' | 'aria-label' | 'aria-busy' | 'aria-hidden'> = label
      ? { 'role': 'status', 'aria-label': label, 'aria-busy': true }
      : { 'aria-hidden': true };

    return <SpinnerComponent ref={ref} width={width} height={height} {...a11yProps} {...props} />;
  },
);

export default Spinner;
export type { Props as SpinnerProps };
