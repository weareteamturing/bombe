import { ComponentType, forwardRef, HTMLAttributes, Ref, SVGProps } from 'react';

import View, { ViewProps } from '../View';

type Props = {
  /**
   * @teamturing/icons와 함께 사용
   */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
} & Pick<ViewProps, 'size' | 'color' | 'sx'> &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const StyledIcon = forwardRef<HTMLDivElement, Props>(
  ({ icon: Icon, sx, className, ...props }, ref: Ref<HTMLDivElement>) => (
    <View
      ref={ref}
      {...props}
      className={`trk-styled_icon__wrapper ${className}`}
      color={props.color as any}
      sx={{ '& svg': { display: 'inline-flex', width: '100%', height: '100%' }, ...sx }}
    >
      <Icon />
    </View>
  ),
);

export default StyledIcon;
export type { Props as StyledIconProps };
