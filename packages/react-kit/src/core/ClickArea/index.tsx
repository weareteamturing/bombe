import { HTMLAttributes, KeyboardEvent, PropsWithChildren, Ref, forwardRef } from 'react';
import styled from 'styled-components';

import View, { ViewProps } from '../View';

type Props = {
  disabled?: boolean;
} & ViewProps &
  Pick<HTMLAttributes<HTMLDivElement>, 'onClick'>;

const ClickArea = ({ disabled, onClick, ...props }: PropsWithChildren<Props>, ref: Ref<HTMLDivElement>) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.currentTarget.click();
    }
  };

  return (
    <BaseClickArea
      ref={ref}
      {...props}
      role={'button'}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      disabled={disabled}
      {...(!disabled
        ? {
            onClick,
            onKeyDown: handleKeyDown,
          }
        : {})}
    />
  );
};

const BaseClickArea = styled(View)<Pick<Props, 'disabled'>>`
  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

export default forwardRef(ClickArea);
export type { Props as ClickAreaProps };
