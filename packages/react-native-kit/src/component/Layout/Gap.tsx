import { View } from 'react-native';

import { type Spacing, spacing } from '../../theme';

type Props = {
  unit: Spacing;
};
export const GapW = ({ unit }: Props) => {
  return <View style={{ marginLeft: spacing[unit] }} aria-hidden />;
};
export const GapH = ({ unit }: Props) => {
  return <View style={{ marginTop: spacing[unit] }} aria-hidden />;
};
export const GapFlex = ({ flex = 1 }: { flex?: number }) => {
  return <View style={{ flex }} aria-hidden />;
};
