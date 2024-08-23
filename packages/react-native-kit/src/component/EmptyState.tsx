import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { palette, spacing } from '../theme';
import { is } from '../util';

import { Btn } from './Btn';
import type { BaseBtnProps } from './Btn/BaseBtn';
import type { IconName, IconProps } from './Icon';
import { Icon } from './Icon';
import { Txt } from './Txt';

type Props = {
  iconName?: IconName;
  iconFill?: IconProps['fill'];
  title: string;
  renderTitle?: (title: string) => React.ReactNode;
  description?: string;
  renderDescription?: (description: string) => React.ReactNode;
  style?: StyleProp<ViewStyle>;
  action?: {
    text: BaseBtnProps['text'];
    onPress: BaseBtnProps['onPress'];
    loading?: boolean;
  };
  testID?: string;
} & SxProps;

const EmptyState = (props: Props) => {
  const {
    iconName = 'exclamation_point_in_circle',
    iconFill,
    title,
    renderTitle = (title) => Txt.L.Bold.render(title, { align: 'center' }),
    description,
    renderDescription = (description) => Txt.S.Medium.Gray500.render(description, { align: 'center' }),
    action,
    testID = 'EmptyState',
  } = props;
  const { getStyle } = useSx(props);
  return (
    <View
      testID={testID}
      style={[{ alignItems: 'center', justifyContent: 'center' }, getStyle()]}
      pointerEvents={'box-none'}
    >
      <Icon name={iconName} fill={iconFill || palette.gray300} size={48} />
      <View style={{ marginTop: spacing[2] }} pointerEvents={'none'}>
        {renderTitle(title)}
      </View>
      {is.string(description) ? (
        <View style={{ marginTop: spacing[2] }} pointerEvents={'none'}>
          {renderDescription(description)}
        </View>
      ) : null}
      {action ? (
        <Btn
          testID={`${testID}/action`}
          layout={{ marginTop: spacing[6] }}
          {...action}
          size={'m'}
          variant={'primary'}
        />
      ) : null}
    </View>
  );
};

export type { Props as EmptyStateProps };
export { EmptyState };
