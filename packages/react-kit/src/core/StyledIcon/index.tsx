import { ComponentType, forwardRef, HTMLAttributes, Ref, SVGProps } from 'react';

import View, { ViewProps } from '../View';

type Props = {
  /**
   * @teamturing/icons와 함께 사용
   */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * 선(stroke)으로 그려진 아이콘의 선 굵기를 정의합니다.
   * `lucide`, `tabler`처럼 `stroke-width`가 고정된 아이콘은 `size`를 줄이면 선도 함께 얇아지므로,
   * 이 값으로 보정합니다. 면(fill)으로 그려진 아이콘에는 영향이 없습니다.
   */
  strokeWidth?: number | string;
} & Pick<ViewProps, 'size' | 'color' | 'sx'> &
  Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'aria-label' | 'aria-hidden'>;

const StyledIcon = forwardRef<HTMLDivElement, Props>(
  (
    { 'icon': Icon, strokeWidth, sx, className, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, ...props },
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
        sx={{
          /**
           * `stroke-width`는 CSS가 presentation attribute를 이기므로,
           * 아이콘 컴포넌트가 props를 전달하지 않아도 적용됩니다.
           */
          '& svg': {
            display: 'inline-flex',
            width: '100%',
            height: '100%',
            ...(strokeWidth !== undefined ? { strokeWidth } : {}),
          },
          ...sx,
        }}
      >
        <Icon />
      </View>
    );
  },
);

export default StyledIcon;
export type { Props as StyledIconProps };
