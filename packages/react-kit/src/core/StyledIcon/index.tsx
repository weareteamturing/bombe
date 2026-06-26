import { ComponentType, forwardRef, HTMLAttributes, Ref, SVGProps } from 'react';

import View, { ViewProps } from '../View';

type Props = {
  /**
   * @teamturing/icons와 함께 사용
   */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
} & Pick<ViewProps, 'size' | 'color' | 'sx'> &
  Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'aria-label' | 'aria-hidden'>;

const StyledIcon = forwardRef<HTMLDivElement, Props>(
  (
    { 'icon': Icon, sx, className, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, ...props },
    ref: Ref<HTMLDivElement>,
  ) => {
    /**
     * 기본적으로 장식용 아이콘으로 간주해 `aria-hidden`을 부여합니다.
     * 의미 있는 아이콘이라면 `aria-label`을 전달하세요. (`role="img"`로 노출됩니다.)
     */
    const a11yProps = ariaLabel
      ? { 'role': 'img' as const, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden }
      : { 'aria-hidden': ariaHidden ?? true };

    return (
      <View
        ref={ref}
        {...props}
        {...a11yProps}
        className={`trk-styled_icon__wrapper ${className}`}
        color={props.color as any}
        sx={{ '& svg': { display: 'inline-flex', width: '100%', height: '100%' }, ...sx }}
      >
        <Icon />
      </View>
    );
  },
);

export default StyledIcon;
export type { Props as StyledIconProps };
