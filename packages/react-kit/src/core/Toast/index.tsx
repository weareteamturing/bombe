import { CheckInCircleIcon, ExclamationPointInCircleIcon } from '@teamturing/icons';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BetterSystemStyleObject } from '../../utils/styled-system';

type Props = {
  /**
   * 변주에 대해 정의합니다.
   */
  variant?: 'success' | 'warning';
  /**
   * 크기 변화에 대한 행동을 정의합니다.
   * 반응형 디자인이 적용됩니다.
   */
  resizing?: ResponsiveValue<'hug' | 'fill'>;
};

const Toast = ({ variant = 'success', resizing = 'hug', children }: PropsWithChildren<Props>) => {
  const IconByVariant = {
    success: CheckInCircleIcon,
    warning: ExclamationPointInCircleIcon,
  }[variant];

  return (
    <BaseToast variant={variant} resizing={resizing}>
      <IconByVariant />
      {children}
    </BaseToast>
  );
};

const BaseToast = styled.div<Props>(
  ({ theme }) => ({
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'columnGap': theme.space[3],
    'backgroundColor': theme.colors['bg/neutral/bold'],
    'color': theme.colors['text/inverse'],
    'borderRadius': theme.radii.m,
    'padding': theme.space[4],
    'fontSize': theme.fontSizes.s,
    'fontWeight': theme.fontWeights.medium,
    'lineHeight': theme.lineHeights[2],

    '& div': { margin: 0, display: 'inline-block' },
    '& svg': {
      width: 24,
      minWidth: 24,
      height: 24,
      minHeight: 24,
    },
  }),
  ({ theme }) =>
    variant<BetterSystemStyleObject, NonNullable<Props['variant']>>({
      prop: 'variant',
      variants: {
        success: {
          '& svg': {
            color: theme.colors['icon/success'],
          },
        },
        warning: {
          '& svg': {
            color: theme.colors['icon/warning'],
          },
        },
      },
    }),
  () =>
    variant<BetterSystemStyleObject>({
      prop: 'resizing',
      variants: {
        fill: {
          width: '100%',
        },
        hug: {
          width: 'fit-content',
        },
      },
    }),
);

export default Toast;
export type { Props as ToastProps };
