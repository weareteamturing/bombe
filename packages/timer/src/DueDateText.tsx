import { useEffect, ReactElement } from 'react';

import { useDueDateTicker, DueDateTickerProps } from './useDueDateTicker';

type Props = {
  dueDate: string;
  children: (text: string, meta: { remainSeconds: number; isExpired: boolean }) => ReactElement;
} & DueDateTickerProps;
export const DueDateText = ({ dueDate, children, ...options }: Props) => {
  const { dueDateText, startTickerWithTargetDateTimeString, tickSec, isExpired } = useDueDateTicker({
    ...options,
  });
  useEffect(() => {
    startTickerWithTargetDateTimeString(dueDate);
  }, [dueDate, startTickerWithTargetDateTimeString]);
  return children(dueDateText, { isExpired, remainSeconds: tickSec });
};
