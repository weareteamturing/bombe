import { ChevronDownIcon, SearchIcon } from '@teamturing/icons';
import { forcePixelValue, isArray, isFunction, isNullable, noop, scrollIntoView } from '@teamturing/utils';
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

import useDevice from '../../hook/useDevice';
import useProvidedOrCreatedRef from '../../hook/useProvidedOrCreatedRef';
import HorizontalDivider from '../HorizontalDivider';
import Overlay, { OverlayProps } from '../Overlay';
import OverlayPopper, { OverlayPopperProps } from '../OverlayPopper';
import Space from '../Space';
import StyledIcon from '../StyledIcon';
import TextInput, { TextInputProps } from '../TextInput';
import View from '../View';

type Props<T> = {
  /**
   * TODO asdf
   */
  validationStatus?: 'error' | 'success' | undefined;
  /**
   * 입력 창 앞에 보여질 시각적 요소를 정의합니다. Icon, Text, Image 등이 될 수 있습니다.
   */
  leadingVisual?: ElementType | ReactNode;
  /**
   * 입력 창 뒤에 보여질 시각적 요소를 정의합니다. Icon, Text, Image 등이 될 수 있습니다.
   * Default: chevron down icon
   */
  trailingVisual?: ElementType | ReactNode;
  children: (
    selectionHandler: { handleSelect: (item: T) => void },
    overlayHandler: { isOpen: boolean; closeOverlay: () => void },
  ) => ReactNode;
  overlayProps?: Pick<OverlayProps, 'size' | 'maxHeight'>;
  searchInputProps?: Pick<TextInputProps, 'placeholder' | 'trailingVisual' | 'trailingAction' | 'onChange'>;
  value?: T;
  renderValue?: (value: T) => ReactNode;
  onChange?: (item: T) => void;
} & Pick<OverlayPopperProps, 'focusTrapSettings' | 'focusZoneSettings' | 'onClose' | 'onOpen'> &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'disabled' | 'onClick' | 'placeholder'>;

const SearchSelectInput = <T,>(
  {
    validationStatus,
    leadingVisual: LeadingVisual,
    trailingVisual: TrailingVisual,
    children,
    focusTrapSettings,
    focusZoneSettings,
    onOpen,
    onClose,
    overlayProps: propOverlayProps,
    searchInputProps,
    value,
    renderValue = (value) => <>{value}</>,
    onChange,
    ...props
  }: Props<T>,
  ref: Ref<HTMLInputElement>,
) => {
  const theme = useTheme();
  const { isDesktop } = useDevice();

  const isVisibleValueExist =
    value && isArray(value) && !isNullable(renderValue(value))
      ? value.length > 0
      : value && !isNullable(renderValue(value));
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
      nativeInputValueSetter?.call(valueInputRef.current, item);

      onChange?.(item);
    }
  };

  /**
   * ? dummyRef가 왜 있나?
   * 모바일 환경에서 Input에 포커스가 가지 않도록 하기 위한 장치입니다.
   */
  const dummyRef = useRef<HTMLDivElement>(null);

  const listContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const activeDescendantRef = useRef<HTMLElement>();

  return (
    <OverlayPopper
      focusTrapSettings={{
        initialFocusRef: isDesktop ? searchInputRef : dummyRef,
        restoreFocusOnCleanUp: true,
        ...focusTrapSettings,
      }}
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
          {...propOverlayProps}
          {...overlayProps}
          maxHeight={300}
          sx={{ display: 'flex', flexDirection: 'column' }}
          style={{ ...overlayProps.style, width: elements?.reference?.getBoundingClientRect().width }}
          onKeyDown={(e) => {
            if (e.code === 'Escape') {
              e.stopPropagation();
              overlayHandler.closeOverlay();
            }
          }}
        >
          {!isDesktop ? <View aria-hidden ref={dummyRef} tabIndex={0} /> : null}
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
                  e.preventDefault();
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
      {(popperProps) => (
        <TextInputWrapper
          {...(disabled
            ? {}
            : {
                ...popperProps,
                onClick: (e) => {
                  focusInput();
                  popperProps.onClick?.(e);
                },
              })}
          tabIndex={-1}
          disabled={disabled}
          hasLeadingVisual={hasLeadingVisual}
          validationStatus={validationStatus}
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
              cursor: disabled ? 'not-allowed' : 'default',
            }}
          >
            {isVisibleValueExist ? (
              <View
                sx={{
                  flex: '0 1 auto',
                  maxWidth: '100%',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'pre',
                  overflow: 'hidden',
                }}
              >
                {value && renderValue(value)}
              </View>
            ) : null}
            <BaseInput
              id={id}
              ref={labelInputRef}
              readOnly
              onChange={noop}
              autoComplete={'off'}
              disabled={disabled}
              onClick={(e) => {
                props.onClick?.(e);
              }}
              placeholder={isVisibleValueExist ? '' : placeholder}
            />
          </View>
          <View
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: 4,
              pointerEvents: 'none',
            }}
          >
            {typeof TrailingVisual !== 'string' && isValidElementType(TrailingVisual) ? (
              <TrailingVisual />
            ) : TrailingVisual ? (
              (TrailingVisual as ReactNode)
            ) : (
              <StyledIcon icon={ChevronDownIcon} color={disabled ? 'icon/disabled' : 'icon/neutral/bolder'} size={16} />
            )}
          </View>
          <BaseInput
            ref={(e) => {
              isFunction(ref) ? ref(e) : null;
              (valueInputRef as MutableRefObject<HTMLInputElement | null>).current = e;
            }}
            type={'hidden'}
            defaultValue={value as string}
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

export default forwardRef(SearchSelectInput) as <T>(
  props: Props<T> & { ref?: Ref<HTMLInputElement> },
) => ReturnType<typeof SearchSelectInput>;
export type { Props as SearchSelectInputProps };
