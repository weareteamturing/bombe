import { ComponentType, SVGProps } from 'react';

import View, { ViewProps } from '../View';

type Props = {
  /**
   * @teamturing/icons와 함께 사용
   */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
} & Pick<ViewProps, 'size' | 'color' | 'sx'>;

const StyledIcon = ({ icon: Icon, sx, ...props }: Props) => (
  <View
    {...props}
    color={props.color as any}
    sx={{ '& svg': { display: 'inline-flex', width: '100%', height: '100%' }, ...sx }}
  >
    <Icon />
  </View>
);

export default StyledIcon;
