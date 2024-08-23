import type { ReactElement } from 'react';

import { is } from '../../util';
import { Box } from '../Box';
import { WhiteGradientFixedBottomLayout, FixedBottomLayout } from '../Layout';

import type { BaseBtnProps } from './BaseBtn';
import BaseBtn from './BaseBtn';

type Props = {
  excludeSafeAreaBottom?: boolean;
  enableGradient?: boolean;
  wrapper?: (children: ReactElement) => ReactElement;
} & Omit<BaseBtnProps, 'size' | 'variant' | 'fullWidth' | 'layout'>;

const FixedBottomCTABtn = ({ excludeSafeAreaBottom, enableGradient = true, wrapper, ...props }: Props) => {
  const Wrapper = enableGradient ? WhiteGradientFixedBottomLayout : FixedBottomLayout;
  const button = <BaseBtn size={'l'} variant={'primary'} fullWidth {...props} />;
  return (
    <Wrapper excludeSafeAreaBottom={excludeSafeAreaBottom}>
      <Box px={'sidePadding'}>{is.function(wrapper) ? wrapper(button) : button}</Box>
    </Wrapper>
  );
};

export { FixedBottomCTABtn };
export type { Props as FixedBottomCTABtnProps };
