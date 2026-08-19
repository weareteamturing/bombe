import { ComponentType, forwardRef, HTMLAttributes, Ref, SVGProps } from 'react';
import { ResponsiveValue } from 'styled-system';

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
   * 반응형 디자인이 적용됩니다.
   *
   * `size`와 짝을 맞춰 쓰는 값이므로 `size`와 같은 길이의 배열을 전달합니다.
   * 예를 들어 `size={[16, 20, 24]}`에는 `strokeWidth={[3, 2.5, 2]}`를 전달합니다.
   */
  strokeWidth?: ResponsiveValue<number | string>;
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
            /**
             * 배열을 넘기면 `@styled-system/css`가 테마의 `breakpoints`를 써서
             * 미디어쿼리로 풀어줍니다. 중첩 셀렉터 안에서도 동일하게 동작합니다.
             */
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
