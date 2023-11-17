import { forcePixelValue } from '@teamturing/utils';
import { Ref, forwardRef } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';
import Image, { ImageProps } from '../Image';

type AvatarSizeType = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
type Props = { size?: ResponsiveValue<AvatarSizeType> } & Pick<ImageProps, 'src' | 'alt'> & SxProp;

const Avatar = ({ src, alt = '', size = 'm', sx }: Props, ref: Ref<HTMLImageElement>) => (
  <BaseAvatar ref={ref} src={src} alt={alt} sx={sx} size={size} />
);

const BaseAvatar = styled(Image)<Props>`
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.full)};

  ${variant<BetterSystemStyleObject>({
    prop: 'size',
    variants: {
      xxs: {
        width: 16,
        height: 16,
      },
      xs: {
        width: 20,
        height: 20,
      },
      s: {
        width: 24,
        height: 24,
      },
      m: {
        width: 28,
        height: 28,
      },
      l: {
        width: 32,
        height: 32,
      },
      xl: {
        width: 40,
        height: 40,
      },
      xxl: {
        width: 48,
        height: 48,
      },
      xxxl: {
        width: 64,
        height: 64,
      },
    },
  })}
  ${sx}
`;

export default forwardRef(Avatar);
export type { Props as AvatarProps };
