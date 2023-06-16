import { useEffect, ReactElement } from 'react';

import { useDueDateTicker, DueDateTickerProps } from './useDueDateTicker';

type Props = {
  dueDate: string;
  children: (text: string, remainSeconds: number) => ReactElement;
} & DueDateTickerProps;
export const DueDateText = ({ dueDate, children, ...options }: Props) => {
  const { dueDateText, startTickerWithTargetDateTimeString, tickSec } = useDueDateTicker({
    ...options,
  });
  useEffect(() => {
    startTickerWithTargetDateTimeString(dueDate);
  }, [dueDate, startTickerWithTargetDateTimeString]);
  return children(dueDateText, tickSec);
};
