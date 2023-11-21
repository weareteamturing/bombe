import { ChevronDownIcon } from '@teamturing/icons';
import { forcePixelValue, isFunction, isNullable, noop } from '@teamturing/utils';
import {
  ElementType,
  InputHTMLAttributes,
  MutableRefObject,
  ReactNode,
  Ref,
  RefObject,
  forwardRef,
  useRef,
} from 'react';
import { isValidElementType } from 'react-is';
import styled, { css } from 'styled-components';

import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';
import Overlay from '../Overlay';
import OverlayPopper, { OverlayPopperProps } from '../OverlayPopper';
import StyledIcon from '../StyledIcon';
import View from '../View';

type Props<T extends { label: string; value: string | number | readonly string[] }> = {
  /**
   * TODO asdf
   */
  validationStatus?: 'error' | 'success' | undefined;
  /**
   * 입력 창 앞에 보여질 시각적 요소를 정의합니다. Icon, Text, Image 등이 될 수 있습니다.
   */
  leadingVisual?: ElementType | ReactNode;
  children: ({ handleSelect }: { handleSelect: (item: T) => void }) => ReactNode;
  onChange?: (item: T) => void;
} & Pick<OverlayPopperProps, 'focusTrapSettings' | 'focusZoneSettings' | 'onClose' | 'onOpen'> &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'disabled' | 'onClick' | 'placeholder'>;

const OverlaySelectInput = <T extends { label: string; value: string | number | readonly string[] }>(
  {
    validationStatus,
    leadingVisual: LeadingVisual,
    children,
    onChange,
    focusTrapSettings,
    focusZoneSettings,
    onOpen,
    onClose,
    ...props
  }: Props<T>,
  ref: Ref<HTMLInputElement>,
) => {
  const valueInputRef = useProvidedOrCreatedRef(ref as RefObject<HTMLInputElement>);
  const labelInputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    labelInputRef.current?.focus();
  };

  const { id, disabled, placeholder } = props;

  const handleSelect = (item: T) => {
    if (labelInputRef.current && valueInputRef.current) {
      labelInputRef.current.setAttribute('value', item.label);

      /**
       * ! valueInput의 native onChange를 trigger하려고 했으나 작동하지 않음.
       * ! 일단 Custom onChange를 만들어서 해결.
       */
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(valueInputRef.current, item.value.toString());

      onChange?.(item);
    }
  };

  return (
    <OverlayPopper
      focusTrapSettings={focusTrapSettings}
      focusZoneSettings={focusZoneSettings}
      onOpen={onOpen}
      onClose={onClose}
      renderOverlay={(overlayProps, _, { elements }) => (
        <Overlay
          {...overlayProps}
          style={{ ...overlayProps.style, width: elements?.reference?.getBoundingClientRect().width }}
        >
          {children?.({ handleSelect })}
        </Overlay>
      )}
    >
      {(popperProps, { openOverlay }) => (
        <TextInputWrapper
          {...popperProps}
          tabIndex={disabled ? -1 : 0}
          disabled={disabled}
          onClick={focusInput}
          hasLeadingVisual={!isNullable(LeadingVisual)}
          validationStatus={validationStatus}
          onKeyDown={(e) => {
            if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
              e.preventDefault();
              openOverlay();
            }
          }}
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
          <BaseInput
            id={id}
            ref={labelInputRef}
            onChange={noop}
            autoComplete={'off'}
            tabIndex={-1}
            onClick={(e) => {
              popperProps.onClick?.(e);
              props.onClick?.(e);
            }}
            placeholder={placeholder}
          />
          <StyledIcon
            sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 4, pointerEvents: 'none' }}
            icon={ChevronDownIcon}
            color={disabled ? 'icon/disabled' : 'icon/neutral/bolder'}
            size={16}
          />
          <BaseInput
            ref={(e) => {
              isFunction(ref) ? ref(e) : null;
              (valueInputRef as MutableRefObject<HTMLInputElement | null>).current = e;
            }}
            type={'hidden'}
          />
        </TextInputWrapper>
      )}
    </OverlayPopper>
  );
};

type TextInputWrapperProps = {
  hasLeadingVisual?: boolean;
} & Pick<Props<any>, 'validationStatus' | 'disabled'>;

const TextInputWrapper = styled.div<TextInputWrapperProps>`
  position: relative;
  width: ${forcePixelValue('100%')};
  border-width: ${forcePixelValue(1)};
  border-style: solid;
  border-radius: ${({ theme }) => forcePixelValue(theme.radii.xs)};
  border-color: ${({ theme }) => theme.colors['border/input']};
  background-color: ${({ theme }) => theme.colors['bg/input']};
  cursor: default;
  input {
    cursor: default;
  }
  display: inline-flex;
  align-items: center;

  font-size: ${({ theme }) => forcePixelValue(theme.fontSizes.xs)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors['text/neutral']};
  input::placeholder {
    color: ${({ theme }) => theme.colors['text/neutral/subtlest']};
  }

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
    !props.disabled &&
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

      input::placeholder {
        color: ${props.theme.colors['text/disabled']};
      }

      input {
        cursor: not-allowed;
      }
    `};

  ${(props) =>
    props.hasLeadingVisual &&
    css`
      padding-left: ${forcePixelValue(props.theme.space[4])};
      input {
        padding-left: ${forcePixelValue(props.theme.space[2])};
      }
    `}

  transition: color 100ms, background-color 100ms;
  &:after {
    transition: border-color 100ms;
  }
`;

const UnstyledInput = styled.input`
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
`;

const BaseInput = styled(UnstyledInput)`
  padding-top: ${({ theme }) => forcePixelValue(theme.space[3])};
  padding-right: ${({ theme }) => forcePixelValue(theme.space[10])};
  padding-bottom: ${({ theme }) => forcePixelValue(theme.space[3])};
  padding-left: ${({ theme }) => forcePixelValue(theme.space[4])};

  white-space: pre;
  text-overflow: ellipsis;
`;

export default forwardRef(OverlaySelectInput) as <
  T extends { label: string; value: string | number | readonly string[] },
>(
  props: Props<T> & { ref?: Ref<HTMLInputElement> },
) => ReturnType<typeof OverlaySelectInput>;
export type { Props as OverlaySelectInputProps };
