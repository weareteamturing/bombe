import { forcePixelValue } from '@teamturing/utils';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';
import Image, { ImageProps } from '../Image';

type AvatarSizeType = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
type Props = { size?: ResponsiveValue<AvatarSizeType> } & ImageProps & SxProp;

const DEFAULT_AVATAR_URL = 'https://cdn.teamturing.com/cms/uploads/2024-02-21/1708481300_empty-profile.png';

const Avatar = forwardRef<HTMLImageElement, Props>(
  ({ src = DEFAULT_AVATAR_URL, alt = '', size = 'm', sx, ...props }, ref) => (
    <BaseAvatar ref={ref} role={'presentation'} src={src} alt={alt} sx={sx} size={size} {...props} />
  ),
);

const BaseAvatar = styled(Image)<Props>`
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.full)};
  object-fit: cover;

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

export default Avatar;
export type { Props as AvatarProps };
