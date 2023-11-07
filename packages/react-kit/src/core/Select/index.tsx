import { ChevronDownIcon } from '@teamturing/icons';
import {
  ElementType,
  SelectHTMLAttributes,
  MutableRefObject,
  ReactNode,
  Ref,
  RefObject,
  forwardRef,
  useState,
} from 'react';
import { isValidElementType } from 'react-is';
import styled, { css } from 'styled-components';

import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';
import { forcePixelValue } from '../../utils/forcePixelValue';
import { isFunction } from '../../utils/isFunction';
import { isNullable } from '../../utils/isNullable';
import StyledIcon from '../StyledIcon';
import View from '../View';

import SelectOption, { SelectOptionProps } from './SelectOption';

type Props = {
  /**
   * TODO asdf
   */
  validationStatus?: 'error' | 'success' | undefined;
  /**
   * 입력 창 앞에 보여질 시각적 요소를 정의합니다. Icon, Text, Image 등이 될 수 있습니다.
   */
  leadingVisual?: ElementType | ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = (
  { children, disabled, validationStatus, leadingVisual: LeadingVisual, placeholder = '옵션 선택', ...props }: Props,
  ref: Ref<HTMLSelectElement>,
) => {
  const PLACEHOLDER_VALUE = '';

  const selectRef = useProvidedOrCreatedRef(ref as RefObject<HTMLSelectElement>);
  const [isValueEmpty, setIsValueEmpty] = useState<boolean>(
    isNullable(props.value) || props.value === PLACEHOLDER_VALUE,
  );

  const focusSelect = () => {
    selectRef.current?.focus();
  };

  return (
    <SelectWrapper
      disabled={disabled}
      onClick={focusSelect}
      hasLeadingVisual={!isNullable(LeadingVisual)}
      validationStatus={validationStatus}
      isValueEmpty={isValueEmpty}
    >
      <View
        sx={{
          'flexShrink': 0,
          'fontSize': 'xxs',
          'fontWeight': 'medium',
          'color': 'text/neutral',
          '& > svg': { display: 'block', width: 16, height: 16, color: 'icon/neutral/bold' },
        }}
      >
        {typeof LeadingVisual !== 'string' && isValidElementType(LeadingVisual) ? (
          <LeadingVisual />
        ) : (
          (LeadingVisual as ReactNode)
        )}
      </View>
      <BaseSelect
        ref={(e) => {
          isFunction(ref) ? ref(e) : null;
          (selectRef as MutableRefObject<HTMLSelectElement | null>).current = e;
        }}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
        onChange={(e) => {
          props.onChange?.(e);

          if (!e.defaultPrevented) {
            if (e.target.value === PLACEHOLDER_VALUE) {
              setIsValueEmpty(true);
            } else {
              setIsValueEmpty(false);
            }
          }
        }}
      >
        <SelectOption label={placeholder} value={PLACEHOLDER_VALUE} />
        {children}
      </BaseSelect>
      <StyledIcon
        sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 5, pointerEvents: 'none' }}
        icon={ChevronDownIcon}
        color={disabled ? 'icon/disabled' : 'icon/neutral/bolder'}
        size={16}
      />
    </SelectWrapper>
  );
};

type SelectWrapperProps = {
  isValueEmpty?: boolean;
  hasLeadingVisual?: boolean;
} & Pick<Props, 'value' | 'validationStatus' | 'disabled'>;

const SelectWrapper = styled.div<SelectWrapperProps>`
  position: relative;
  width: ${forcePixelValue('100%')};
  border-width: ${forcePixelValue(1)};
  border-style: solid;
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  border-color: ${({ theme }) => theme.colors['border/input']};
  background-color: ${({ theme }) => theme.colors['bg/input']};
  display: inline-flex;
  align-items: center;

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors['text/neutral/subtle']};

  /**
   * placeholder style
   */
  ${({ theme, isValueEmpty }) =>
    isValueEmpty
      ? css`
          color: ${theme.colors['text/neutral/subtlest']};
        `
      : null}

  &:after {
    content: '';
    position: absolute;
    top: ${forcePixelValue(-1)};
    right: ${forcePixelValue(-1)};
    bottom: ${forcePixelValue(-1)};
    left: ${forcePixelValue(-1)};

    border: ${forcePixelValue(2)} solid transparent;
    border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
    pointer-events: none;
  }

  ${(props) =>
    props.validationStatus !== 'error' &&
    !props.disabled &&
    css`
      &:hover:not(:focus-within) {
        &:after {
          border-color: ${({ theme }) => theme.colors['border/hovered']};
        }
      }
    `}

  ${(props) =>
    props.validationStatus === 'error' &&
    css`
      &:after {
        border-color: ${({ theme }) => theme.colors['border/danger']};
      }
    `}

  ${(props) =>
    props.validationStatus !== 'error' &&
    css`
      &:focus-within {
        &:after {
          border-color: ${({ theme }) => theme.colors['border/focused']};
        }
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      border-color: ${props.theme.colors['border/input']};
      background-color: ${props.theme.colors['bg/disabled']};
      color: ${props.theme.colors['text/disabled']};

      select::placeholder {
        color: ${props.theme.colors['text/disabled']};
      }

      select {
        cursor: not-allowed;
      }
    `};

  ${(props) =>
    props.hasLeadingVisual &&
    css`
      padding-left: ${forcePixelValue(props.theme.space[5])};
      select {
        padding-left: ${forcePixelValue(props.theme.space[2])};
      }
    `}

  transition: background-color 100ms;
  &:after {
    transition: border-color 100ms;
  }
`;

const UnstyledSelect = styled.select`
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
  border-radius: inherit;
  color: inherit;
  transition: inherit;

  border: 0;
  background-color: transparent;
  width: 100%;
  &:focus {
    outline: 0;
  }

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const BaseSelect = styled(UnstyledSelect)`
  padding-top: ${({ theme }) => forcePixelValue(theme.space['4'])};
  padding-right: ${({ theme }) => forcePixelValue(theme.space['12'])};
  padding-bottom: ${({ theme }) => forcePixelValue(theme.space['4'])};
  padding-left: ${({ theme }) => forcePixelValue(theme.space['5'])};

  white-space: pre;
  text-overflow: ellipsis;
`;

export default Object.assign(forwardRef(Select), { Option: SelectOption });
export type { Props as SelectProps, SelectOptionProps };
