import { HTMLAttributes, PropsWithChildren, Ref, forwardRef } from 'react';
import styled from 'styled-components';

import View, { ViewProps } from '../View';

type Props = {
  disabled?: boolean;
} & ViewProps &
  Pick<HTMLAttributes<HTMLDivElement>, 'onClick'>;

const ClickArea = ({ disabled, onClick, ...props }: PropsWithChildren<Props>, ref: Ref<HTMLDivElement>) => (
  <BaseClickArea
    ref={ref}
    {...props}
    role={'button'}
    aria-disabled={disabled}
    disabled={disabled}
    {...(!disabled
      ? {
          onClick,
        }
      : {})}
  />
);

const BaseClickArea = styled(View)<Pick<Props, 'disabled'>>`
  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

export default forwardRef(ClickArea);
export type { Props as ClickAreaProps };
