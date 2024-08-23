import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { useKeyboard } from '../../hook';
import { palette } from '../../theme';
import { is } from '../../util';
import { GradientCollection } from '../GradientCollection';

import type { FixedBottomLayoutProps } from './FixedBottomLayout';
import { FixedBottomLayout } from './FixedBottomLayout';

type Props = {} & FixedBottomLayoutProps;
const WhiteGradientFixedBottomLayout = ({ children, ...props }: PropsWithChildren<Props>) => {
  const { keyboardShown } = useKeyboard();
  return (
    <FixedBottomLayout {...props}>
      {is.android() && keyboardShown ? null : (
        <GradientCollection
          colors={[palette.transparent, palette.white]}
          locations={[0, 0.3]}
          style={StyleSheet.absoluteFill}
          pointerEvents={'none'}
        />
      )}
      {children}
    </FixedBottomLayout>
  );
};

export type { Props as FixedBottomWHiteGradientLayoutProps };
export { WhiteGradientFixedBottomLayout };
