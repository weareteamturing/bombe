import { forcePixelValue } from '@teamturing/utils';
import { HTMLAttributes, PropsWithChildren, ReactNode, cloneElement, isValidElement, useId } from 'react';
import styled from 'styled-components';

import useRelocation from '../../hook/useRelocation';
import { SxProp, sx } from '../../utils/styled-system';

import DatagridBody, { DatagridBodyProps } from './DatagridBody';
import DatagridCell, { DatagridCellProps } from './DatagridCell';
import DatagridHeader, { DatagridHeaderProps } from './DatagridHeader';
import DatagridRow, { DatagridRowProps } from './DatagridRow';
import DatagridSubheader from './DatagridSubheader';

type Props = {} & HTMLAttributes<HTMLDivElement> & SxProp;

const Datagrid = ({
  children,
  sx,
  role = 'table',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  ...props
}: PropsWithChildren<Props>) => {
  const [relocatableComponentsObject, restConmponents] = useRelocation({
    children,
    config: {
      header: DatagridHeader,
      subHeader: DatagridSubheader,
    },
  });

  // Header가 있고 별도 라벨이 지정되지 않은 경우, Header를 표의 접근 가능한 이름으로 연결한다.
  const generatedHeaderId = useId();
  const { header: rawHeader, subHeader } = relocatableComponentsObject;
  let headerNode: ReactNode = rawHeader;
  let resolvedLabelledby = ariaLabelledby;
  if (!ariaLabel && !ariaLabelledby && isValidElement(rawHeader)) {
    const headerId = rawHeader.props.id ?? generatedHeaderId;
    headerNode = cloneElement(rawHeader, { id: headerId });
    resolvedLabelledby = headerId;
  }

  return (
    <DatagridWrapper sx={sx}>
      {headerNode}
      {subHeader}
      <BaseDatagrid role={role} aria-label={ariaLabel} aria-labelledby={resolvedLabelledby} {...props}>
        {restConmponents}
      </BaseDatagrid>
    </DatagridWrapper>
  );
};

const DatagridWrapper = styled.div<SxProp>`
  width: 100%;

  border-width: ${forcePixelValue(1)};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors['border/neutral']};
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.s)};
  isolation: isolate;

  ${sx}
`;

const BaseDatagrid = styled.div`
  width: inherit;

  border-radius: inherit;
`;

export default Object.assign(Datagrid, {
  Header: DatagridHeader,
  Subheader: DatagridSubheader,
  Body: DatagridBody,
  Row: DatagridRow,
  Cell: DatagridCell,
});
export type { Props as DatagridProps, DatagridBodyProps, DatagridCellProps, DatagridHeaderProps, DatagridRowProps };
