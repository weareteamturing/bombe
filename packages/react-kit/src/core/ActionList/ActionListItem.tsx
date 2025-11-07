import { CheckIcon } from '@teamturing/icons';
import { forcePixelValue, isNullable, noop } from '@teamturing/utils';
import {
  ElementType,
  PropsWithChildren,
  ReactNode,
  MouseEvent as ReactMouseEvent,
  KeyboardEvent as ReactKeyboardEvent,
  useContext,
  useCallback,
  LiHTMLAttributes,
} from 'react';
import { isValidElementType } from 'react-is';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

import { BetterSystemStyleObject, SxProp, sx } from '../../utils/styled-system';
import { CheckboxProps } from '../Checkbox';
import Grid from '../Grid';
import StyledIcon from '../StyledIcon';
import Text from '../Text';
import View from '../View';

import { ActionListContext } from '.';

type Props = {
  variant?: 'neutral' | 'danger';

  leadingVisual?: ElementType | ReactNode;
  trailingVisual?: ElementType | ReactNode;
  description?: string;
  descriptionLayout?: 'inline' | 'block';

  disabled?: boolean;

  selected?: boolean;
  onSelect?: (event: ReactMouseEvent<HTMLLIElement> | ReactKeyboardEvent<HTMLLIElement>) => void;
} & Pick<LiHTMLAttributes<HTMLLIElement>, 'onFocus' | 'onBlur'> &
  SxProp;

const ActionListItem = ({
  variant = 'neutral',
  leadingVisual: LeadingVisual,
  trailingVisual: TrailingVisual,
  description,
  descriptionLayout = 'block',
  disabled = false,
  selected = false,
  onSelect: propOnSelect,
  children,
  onFocus,
  onBlur,
  sx,
}: PropsWithChildren<Props>) => {
  const { selectionVariant, onSelect: defaultOnSelect } = useContext(ActionListContext);

  if (!selectionVariant && selected) {
    throw new Error('To use selected props in ActionList.Item, ActionList selectionVariant props should be defined.');
  }

  const handleSelect = useCallback(
    (event: ReactMouseEvent<HTMLLIElement> | ReactKeyboardEvent<HTMLLIElement>) => {
      defaultOnSelect?.(event);
      propOnSelect?.(event);
    },
    [propOnSelect],
  );

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      if (disabled) return;
      handleSelect(event);
    },
    [handleSelect, disabled],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLLIElement>) => {
      if (disabled) return;
      if ([' ', 'Enter'].includes(event.key)) {
        handleSelect(event);
      }
    },
    [handleSelect, disabled],
  );

  return (
    <BaseActionListItem
      variant={variant}
      {...(disabled ? { disabled } : { tabIndex: 0 })}
      sx={sx}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {!isNullable(selectionVariant) ? (
        <View
          className={'action_list_item__selection_wrapper'}
          display={'inline-flex'}
          minWidth={20}
          sx={{ 'mr': 2, '& svg': { color: 'icon/selected/primary' } }}
        >
          {selectionVariant === 'single' ? (
            selected ? (
              <StyledIcon className={'action_list_item__selection_wrapper_single'} icon={CheckIcon} size={20} />
            ) : null
          ) : selectionVariant === 'multiple' ? (
            <FakeCheckbox
              className={'action_list_item__selection_wrapper_multiple'}
              aria-checked={selected}
              checked={selected}
              onChange={noop}
              aria-disabled={disabled}
              disabled={disabled}
            />
          ) : null}
        </View>
      ) : null}
      <VisualWrapper
        className={'action_list_item__leading_visual'}
        display={'inline-flex'}
        flexShrink={0}
        sx={{ mr: LeadingVisual ? 2 : 0 }}
        variant={variant}
      >
        {typeof LeadingVisual !== 'string' && isValidElementType(LeadingVisual) ? (
          <LeadingVisual />
        ) : (
          (LeadingVisual as ReactNode)
        )}
      </VisualWrapper>
      <View flex={1} className={'action_list_item__content'}>
        <Grid gapX={2} gapY={0.5} wrap={true} alignItems={'center'}>
          <Grid.Unit
            className={'action_list__content__children'}
            size={descriptionLayout === 'inline' ? 'min' : 1}
            sx={{ fontWeight: description && descriptionLayout === 'block' ? 'bold' : 'medium' }}
          >
            {children}
          </Grid.Unit>
          <Grid.Unit
            className={'action_list_item__content__description'}
            size={descriptionLayout === 'inline' ? 'max' : 1}
          >
            <Text typography={'xxs/regular'} color={disabled ? 'text/disabled' : 'text/neutral/subtler'}>
              {description}
            </Text>
          </Grid.Unit>
        </Grid>
      </View>
      <VisualWrapper
        className={'action_list_item__content__trailing_visual'}
        display={'inline-flex'}
        flexShrink={0}
        sx={{ ml: TrailingVisual ? 2 : 0 }}
        variant={variant}
      >
        {typeof TrailingVisual !== 'string' && isValidElementType(TrailingVisual) ? (
          <TrailingVisual />
        ) : (
          (TrailingVisual as ReactNode)
        )}
      </VisualWrapper>
    </BaseActionListItem>
  );
};

const VisualWrapper = styled(View)<Pick<Props, 'variant'>>`
  ${variant<BetterSystemStyleObject>({
    prop: 'variant',
    variants: {
      neutral: { 'color': 'text/neutral', '& svg': { color: 'icon/neutral' } },
      danger: { 'color': 'text/danger', '& svg': { color: 'icon/danger' } },
    },
  })}
`;

const BaseActionListItem = styled.li<Props>`
  display: flex;
  align-items: flex-start;

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[2]};

  & svg {
    width: ${forcePixelValue(20)};
    height: ${forcePixelValue(20)};
  }

  padding: ${({ theme }) => forcePixelValue(theme.space[3])};
  background-color: ${({ theme }) => theme.colors['bg/neutral/subtler']};
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  cursor: pointer;
  transition: background-color 100ms;

  ${({ theme, disabled }) =>
    disabled
      ? css`
          color: ${theme.colors['text/disabled']};
          & svg {
            color: ${({ theme }) => theme.colors['icon/disabled']};
          }
          cursor: not-allowed;
        `
      : css`
          &:hover {
            background-color: ${theme.colors['bg/neutral/subtler/hovered']};
          }
          &:hover:active {
            background-color: ${theme.colors['bg/neutral/subtler/pressed']};
          }
          &:focus-visible {
            outline-width: ${forcePixelValue(2)};
            outline-style: solid;
            outline-color: ${theme.colors['border/focused']};
            outline-offset: ${forcePixelValue(-2)};
          }
        `}

  ${({ theme, disabled, variant }) =>
    !disabled && variant === 'danger'
      ? css`
          color: ${theme.colors['text/danger']};
        `
      : !disabled && variant === 'neutral'
      ? css`
          color: ${theme.colors['text/neutral']};
        `
      : null}

  ${sx};
`;

const FakeCheckbox = styled.div<CheckboxProps>`
  position: relative;

  width: ${forcePixelValue(20)};
  height: ${forcePixelValue(20)};

  border-width: ${forcePixelValue(2)};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors['border/neutral']};
  border-radius: ${({ theme }) => `${forcePixelValue(theme.radii.xxs)}`};
  cursor: pointer;

  transition: visibility 200ms;

  &::before {
    visibility: hidden;

    content: '';
    display: grid;
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border-radius: ${({ theme }) => `${forcePixelValue(theme.radii.xxs)}`};

    background-color: ${({ theme }) => theme.colors['icon/inverse']};
    mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6 17.2C10.3 17.2 10 17.1 9.80001 16.8L5.20001 12.2C4.70001 11.7 4.70001 11 5.20001 10.5C5.70001 9.99998 6.40001 9.99998 6.90001 10.5L10.6 14.2L17.2 7.59998C17.7 7.09998 18.4 7.09998 18.9 7.59998C19.4 8.09998 19.4 8.79998 18.9 9.29998L11.5 16.7C11.2 17.1 10.9 17.2 10.6 17.2Z' fill='%238D94A0'/%3E%3C/svg%3E%0A");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6 17.2C10.3 17.2 10 17.1 9.80001 16.8L5.20001 12.2C4.70001 11.7 4.70001 11 5.20001 10.5C5.70001 9.99998 6.40001 9.99998 6.90001 10.5L10.6 14.2L17.2 7.59998C17.7 7.09998 18.4 7.09998 18.9 7.59998C19.4 8.09998 19.4 8.79998 18.9 9.29998L11.5 16.7C11.2 17.1 10.9 17.2 10.6 17.2Z' fill='%238D94A0'/%3E%3C/svg%3E%0A");
    mask-size: 100%;
    -webkit-mask-size: 100%;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-position: center;
  }

  &[aria-disabled='true'] {
    background-color: ${({ theme }) => theme.colors['bg/disabled']};
    border-color: ${({ theme }) => theme.colors['border/disabled']};
  }

  &[aria-checked='true'] {
    background-color: ${({ theme }) => theme.colors['bg/primary']};
    border-width: 0;

    &::before {
      visibility: visible;
    }

    &[aria-disabled='true'] {
      background-color: ${({ theme }) => theme.colors['bg/disabled']};
      border-color: ${({ theme }) => theme.colors['border/disabled']};

      &::before {
        background-color: ${({ theme }) => theme.colors['icon/disabled']};
      }
    }
  }

  ${sx}
`;

export default ActionListItem;
export type { Props as ActionListItemProps };
