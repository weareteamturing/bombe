import { DocumentIcon } from '@teamturing/icons';
import { ComponentType, ReactNode, SVGProps } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';
import Button, { ButtonProps } from '../Button';
import Text from '../Text';
import View from '../View';

type EmptyStateAction = {} & Pick<
  ButtonProps,
  'variant' | 'disabled' | 'loading' | 'leadingIcon' | 'trailingIcon' | 'onClick' | 'children'
>;
type EmptyStateSize = 'm' | 's';

type Props = {
  title: ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  description?: ReactNode;
  action?: EmptyStateAction;
  renderAction?: (action: EmptyStateAction, emptyStateProps: Pick<Props, 'size'>) => ReactNode;
  size?: ResponsiveValue<EmptyStateSize>;
} & SxProp;

const EmptyState = ({
  title,
  icon: Icon = DocumentIcon,
  description,
  action,
  renderAction = ({ ...buttonProps }, emptyStateProps) => <Button size={emptyStateProps.size} {...buttonProps} />,
  size = 'm',
  sx,
}: Props) => {
  return (
    <BaseEmptyState size={size} sx={sx}>
      <Icon />
      <Text as={'p'}>{title}</Text>
      <Text>{description}</Text>
      {action ? <View>{renderAction(action, { size })}</View> : null}
    </BaseEmptyState>
  );
};

const BaseEmptyState = styled.div<Pick<Props, 'size' | 'sx'>>`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    color: ${({ theme }) => theme.colors['icon/neutral']};
  }
  & > p {
    color: ${({ theme }) => theme.colors['text/neutral']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights[2]};
  }
  & > span {
    color: ${({ theme }) => theme.colors['text/neutral/subtler']};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: ${({ theme }) => theme.lineHeights[2]};
  }

  ${variant<BetterSystemStyleObject, EmptyStateSize, 'size'>({
    prop: 'size',
    variants: {
      m: {
        '& > svg': { width: 64, height: 64 },
        '& > p': {
          fontSize: 'm',
          mt: 2,
        },
        '& > span': {
          fontSize: 's',
          mt: 1,
        },
        '& > div': {
          mt: 6,
        },
      },
      s: {
        '& > svg': { width: 32, height: 32 },
        '& > p': {
          fontSize: 's',
          mt: 3,
        },
        '& > span': {
          fontSize: 'xs',
          mt: 0.5,
        },
        '& > div': {
          mt: 3,
        },
      },
    },
  })}

  ${sx}
`;

export default EmptyState;
export type { Props as EmptyStateProps };
