import { HTMLAttributes, KeyboardEvent, PropsWithChildren, Ref, forwardRef } from 'react';
import styled from 'styled-components';

import { CursorProps, cursor } from '../../utils/styled-system';
import View, { ViewProps } from '../View';

type Props = {
  disabled?: boolean;
} & CursorProps &
  ViewProps &
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

const BaseClickArea = styled(View).attrs<Pick<Props, 'disabled' | 'cursor'>>(({ disabled, cursor }) => ({
  cursor: disabled ? 'not-allowed' : cursor ?? 'pointer',
}))`
  ${cursor}
`;

export default forwardRef(ClickArea);
export type { Props as ClickAreaProps };
