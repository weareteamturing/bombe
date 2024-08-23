import type { ReactElement } from 'react';
import type { ColorValue, ViewStyle } from 'react-native';

import { type IconName, Icon } from './Icon';
import { GapW } from './Layout/Gap';
import { RowCenter } from './Layout/Row';

import { palette, spacing } from '@teamturing/react-native-kit';

type Props = {
  highlightColor?: ColorValue;
  renderContent: ReactElement;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  style?: ViewStyle;
};
export const FloatingRoundChip = ({
  highlightColor = palette.violet500,
  renderContent,
  leadingIcon,
  style,
  trailingIcon,
}: Props) => {
  return (
    <RowCenter
      style={[
        {
          borderWidth: 2,
          borderColor: highlightColor,
          borderRadius: 999,
          paddingHorizontal: spacing[3],
          paddingVertical: spacing[2],
          backgroundColor: palette.white,
        },
        style,
      ]}
    >
      {leadingIcon ? (
        <>
          <Icon name={leadingIcon} size={16} fill={highlightColor} />
          <GapW unit={1} />
        </>
      ) : null}
      {renderContent}
      {trailingIcon ? (
        <>
          <GapW unit={1} />
          <Icon name={trailingIcon} size={16} fill={highlightColor} />
        </>
      ) : null}
    </RowCenter>
  );
};
