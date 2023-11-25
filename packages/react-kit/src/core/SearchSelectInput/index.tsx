import { ChevronDownIcon, SearchIcon } from '@teamturing/icons';
import { forcePixelValue, isFunction, isNullable, noop, scrollIntoView } from '@teamturing/utils';
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
import styled, { css, useTheme } from 'styled-components';

import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';
import HorizontalDivider from '../HorizontalDivider';
import Overlay from '../Overlay';
import OverlayPopper, { OverlayPopperProps } from '../OverlayPopper';
import Space from '../Space';
import StyledIcon from '../StyledIcon';
import TextInput, { TextInputProps } from '../TextInput';
import View from '../View';

type Props<T extends { label: string; value?: string | number | readonly string[] }> = {
  /**
   * TODO asdf
   */
  validationStatus?: 'error' | 'success' | undefined;
  /**
   * 입력 창 앞에 보여질 시각적 요소를 정의합니다. Icon, Text, Image 등이 될 수 있습니다.
   */
  leadingVisual?: ElementType | ReactNode;
  children: (
    selectionHandler: { handleSelect: (item: T) => void },
    overlayHandler: { isOpen: boolean; closeOverlay: () => void },
  ) => ReactNode;
  onChange?: (item: T) => void;
  searchInputProps?: Pick<TextInputProps, 'placeholder' | 'trailingVisual' | 'trailingAction' | 'onChange'>;
  renderValue?: (value: T['value']) => ReactNode;
} & Pick<OverlayPopperProps, 'focusTrapSettings' | 'focusZoneSettings' | 'onClose' | 'onOpen'> &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'disabled' | 'onClick' | 'placeholder' | 'value'>;

const SearchSelectInput = <T extends { label: string; value: string | number | readonly string[] }>(
  {
    validationStatus,
    leadingVisual: LeadingVisual,
    children,
    onChange,
    focusTrapSettings,
    focusZoneSettings,
    onOpen,
    onClose,
    searchInputProps,
    value,
    renderValue = (value) => value?.toString(),
    ...props
  }: Props<T>,
  ref: Ref<HTMLInputElement>,
) => {
  const theme = useTheme();

  const hasLeadingVisual = !isNullable(LeadingVisual);

  const valueInputRef = useProvidedOrCreatedRef(ref as RefObject<HTMLInputElement>);
  const labelInputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    labelInputRef.current?.focus();
  };

  const handleClose = () => {
    focusInput();

    onClose?.();
  };

  const { id, disabled, placeholder } = props;

  const handleSelect = (item: T) => {
    if (labelInputRef.current && valueInputRef.current) {
      /**
       * ! valueInput의 native onChange를 trigger하려고 했으나 작동하지 않음.
       * ! 일단 Custom onChange를 만들어서 해결.
       */
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(valueInputRef.current, item.value.toString());

      onChange?.(item);
    }
  };

  const listContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const activeDescendantRef = useRef<HTMLElement>();

  return (
    <OverlayPopper
      focusTrapSettings={{ initialFocusRef: searchInputRef, restoreFocusOnCleanUp: true, ...focusTrapSettings }}
      focusZoneSettings={{
        containerRef: listContainerRef,
        activeDescendantFocus: searchInputRef,
        focusOutBehavior: 'stop',
        onActiveDescendantChanged: (current, previous) => {
          activeDescendantRef.current = current;
          if (current && listContainerRef.current) {
            current.style.backgroundColor = theme.colors['bg/selected/subtle'];

            scrollIntoView({
              childrenRef: current,
              scrollContainerRef: listContainerRef.current,
              options: { behavior: 'auto', direction: 'vertical', offset: 0 },
            });
          }
          if (previous && current !== previous) {
            previous.style.backgroundColor = '';
          }
        },
        focusableElementFilter: (elem) => {
          return elem instanceof HTMLElement;
        },
        ...focusZoneSettings,
      }}
      onOpen={onOpen}
      onClose={handleClose}
      renderOverlay={(overlayProps, overlayHandler, { elements }) => (
        <Overlay
          {...overlayProps}
          maxHeight={200}
          sx={{ display: 'flex', flexDirection: 'column' }}
          style={{ ...overlayProps.style, width: elements?.reference?.getBoundingClientRect().width }}
        >
          <Space
            p={2}
            sx={{
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: 'auto',
            }}
          >
            <TextInput
              ref={searchInputRef}
              leadingVisual={SearchIcon}
              onKeyDown={(e) => {
                if (e.code === 'Enter' && activeDescendantRef.current) {
                  const activeDescendantEvent = new KeyboardEvent(e.type, e.nativeEvent);
                  activeDescendantRef.current?.dispatchEvent(activeDescendantEvent);
                }
              }}
              {...(searchInputProps as any)}
            />
          </Space>
          <HorizontalDivider />
          <View
            ref={listContainerRef}
            sx={{
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
              overflowY: 'auto',
            }}
          >
            {children?.({ handleSelect }, overlayHandler)}
          </View>
        </Overlay>
      )}
    >
      {(popperProps, { openOverlay }) => (
        <TextInputWrapper
          {...popperProps}
          tabIndex={disabled ? -1 : 0}
          disabled={disabled}
          onClick={focusInput}
          hasLeadingVisual={hasLeadingVisual}
          validationStatus={validationStatus}
          onKeyDown={(e) => {
            if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
              e.preventDefault();
              openOverlay();
            }

            e.stopPropagation();
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
          <View
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: 3,
              paddingRight: 10,
              paddingBottom: 3,
              paddingLeft: hasLeadingVisual ? 2 : 4,
              whiteSpace: 'pre',
              textOverflow: 'ellipsis',
              width: '100%',
            }}
            onClick={(e) => {
              popperProps.onClick?.(e);
            }}
          >
            {!isNullable(renderValue(value as T['value'])) ? (
              <View
                sx={{
                  flex: '0 1 auto',
                  maxWidth: '100%',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'pre',
                  overflow: 'hidden',
                }}
              >
                {renderValue(value as T['value'])}
              </View>
            ) : null}
            <BaseInput
              id={id}
              ref={labelInputRef}
              readOnly
              onChange={noop}
              autoComplete={'off'}
              tabIndex={-1}
              onClick={(e) => {
                props.onClick?.(e);
              }}
              placeholder={!isNullable(renderValue(value as T['value'])) ? '' : placeholder}
            />
          </View>
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
            defaultValue={value}
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

    flex: 1;
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
  width: 100%;

  border: 0;
  padding: 0;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
`;

const BaseInput = styled(UnstyledInput)`
  white-space: pre;
  text-overflow: ellipsis;
`;

export default forwardRef(SearchSelectInput) as <
  T extends { label: string; value: string | number | readonly string[] },
>(
  props: Props<T> & { ref?: Ref<HTMLInputElement> },
) => ReturnType<typeof SearchSelectInput>;
export type { Props as SearchSelectInputProps };
