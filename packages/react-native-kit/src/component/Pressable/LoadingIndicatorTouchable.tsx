import { StyleSheet } from 'react-native';

import { LoadingIndicator } from '../LoadingIndicator';

import { type TouchProps, Touch } from './Touch';

type Props = { isLoading: boolean } & TouchProps;
const LoadingIndicatorTouchable = ({ isLoading, disabled, children, style, ...rest }: Props) => {
  return (
    <Touch disabled={disabled || isLoading} style={[style, { opacity: isLoading ? 0.5 : 1 }]} {...rest}>
      {children}
      {isLoading ? <LoadingIndicator style={StyleSheet.absoluteFill} /> : null}
    </Touch>
  );
};

export { LoadingIndicatorTouchable };
