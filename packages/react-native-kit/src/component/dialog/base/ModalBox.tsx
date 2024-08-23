import type { ReactElement, PropsWithChildren } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle, LayoutChangeEvent, EmitterSubscription } from 'react-native';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
  BackHandler,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import is from '../../../util/is';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  transparent: {
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export type ModalBoxProps = PropsWithChildren<{
  isOpen?: boolean;
  isDisabled?: boolean;
  backdropPressToClose?: boolean;
  modalPosition?: 'center' | 'top' | 'bottom';
  backdrop?: boolean;
  backdropOpacity?: number;
  backdropColor?: string;
  animationDuration?: number;
  backButtonClose?: boolean;
  easing?: ((value: number) => number) | undefined;
  onClosed?: () => void;
  onClosedStarted?: () => void;
  onOpened?: () => void;
  style?: StyleProp<ViewStyle>;
  useNativeDriver?: boolean;
  closeImmediately?: boolean;
}>;

type State = {
  modalPosition: Animated.Value;
  backdropOpacity: Animated.Value;
  isOpen: boolean;
  isAnimateClose: boolean;
  isAnimateOpen: boolean;
  height: number;
  width: number;
  containerHeight: number;
  containerWidth: number;
  isInitialized: boolean;
  isAnimateBackdrop: boolean;
  animBackdrop?: Animated.CompositeAnimation;
  animOpen?: Animated.CompositeAnimation;
  animClose?: Animated.CompositeAnimation;
  keyboardOffset: number;
};

export class ModalBox extends React.PureComponent<ModalBoxProps, State> {
  static defaultProps: ModalBoxProps = {
    backdropPressToClose: true,
    modalPosition: 'center',
    backdrop: true,
    backdropOpacity: 0.5,
    backdropColor: 'black',
    animationDuration: 400,
    backButtonClose: false,
    easing: Easing.elastic(0.8),
    useNativeDriver: true,
    closeImmediately: false,
  };

  keyboardWillChangeFrameSubscription?: EmitterSubscription;
  keyboardDidShowSubscription?: EmitterSubscription;
  keyboardDidHideSubscription?: EmitterSubscription;
  onViewLayoutCalculated: (() => void) | undefined | null;

  constructor(props) {
    super(props);

    this.onBackPress = this.onBackPress.bind(this);
    this.handleOpenning = this.handleOpenning.bind(this);
    this.animateBackdropOpen = this.animateBackdropOpen.bind(this);
    this.animateBackdropClose = this.animateBackdropClose.bind(this);
    this.stopAnimateOpen = this.stopAnimateOpen.bind(this);
    this._animateOpen = this._animateOpen.bind(this);
    this.relayoutIfOpenedState = this.relayoutIfOpenedState.bind(this);
    this.stopAnimateClose = this.stopAnimateClose.bind(this);
    this.animateClose = this.animateClose.bind(this);
    this.calculateModalPosition = this.calculateModalPosition.bind(this);
    this.onContentLayout = this.onContentLayout.bind(this);
    this.onContainerLayout = this.onContainerLayout.bind(this);
    this.renderBackdrop = this.renderBackdrop.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    const position = new Animated.Value(SCREEN_HEIGHT);
    this.state = {
      modalPosition: position,
      backdropOpacity: new Animated.Value(0),
      isOpen: false,
      isAnimateClose: false,
      isAnimateOpen: false,
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
      containerHeight: SCREEN_HEIGHT,
      containerWidth: SCREEN_WIDTH,
      isInitialized: false,
      isAnimateBackdrop: false,
      keyboardOffset: 0,
    };
  }

  override componentDidMount() {
    this.handleOpenning();

    if (is.iOS()) {
      this.keyboardWillChangeFrameSubscription = Keyboard.addListener('keyboardWillChangeFrame', (evt) => {
        if (!evt) {
          return;
        }
        if (!this.state.isOpen) {
          return;
        }
        const keyboardFrame = evt.endCoordinates;
        const keyboardHeight = this.state.containerHeight - keyboardFrame.screenY;

        const isFloatingKeyboard = Dimensions.get('window').width > keyboardFrame.width;

        const nextKeyboardOffset = isFloatingKeyboard ? 0 : keyboardHeight;
        if (this.state.keyboardOffset !== nextKeyboardOffset) {
          this.setState({ keyboardOffset: nextKeyboardOffset }, () => {
            this.relayoutIfOpenedState();
          });
        }
      });
    }
    if (is.android()) {
      this.keyboardDidShowSubscription = Keyboard.addListener('keyboardDidShow', (evt) => {
        if (!evt) {
          return;
        }
        if (!this.state.isOpen) {
          return;
        }
        const keyboardFrame = evt.endCoordinates;
        const keyboardHeight = this.state.containerHeight - keyboardFrame.screenY;

        if (this.state.keyboardOffset !== keyboardHeight) {
          this.setState({ keyboardOffset: keyboardHeight }, () => {
            this.relayoutIfOpenedState();
          });
        }
      });
      this.keyboardDidHideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        if (this.state.keyboardOffset !== 0) {
          this.setState({ keyboardOffset: 0 }, () => {
            this.relayoutIfOpenedState();
          });
        }
      });
    }
  }

  override componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleOpenning();
    }
  }

  override componentWillUnmount() {
    if (this.props.backButtonClose && Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    if (is.iOS()) {
      this.keyboardWillChangeFrameSubscription?.remove();
    }
    if (is.android()) {
      this.keyboardDidShowSubscription?.remove();
      this.keyboardDidHideSubscription?.remove();
    }
  }

  onBackPress() {
    this.close();
    return true;
  }

  handleOpenning() {
    if (typeof this.props.isOpen === 'undefined') {
      return;
    }
    if (this.props.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  /****************** ANIMATIONS **********************/

  /*
   * Open animation for the backdrop, will fade in
   */
  animateBackdropOpen() {
    if (this.state.isAnimateBackdrop && this.state.animBackdrop) {
      this.state.animBackdrop.stop();
    }
    this.setState({ isAnimateBackdrop: true });

    const animBackdrop = Animated.timing(this.state.backdropOpacity, {
      toValue: 1,
      duration: this.props.animationDuration,
      easing: this.props.easing,
      useNativeDriver: this.props.useNativeDriver || true,
    });
    animBackdrop.start(() => {
      this.setState({
        isAnimateBackdrop: false,
        animBackdrop,
      });
    });
  }

  /*
   * Close animation for the backdrop, will fade out
   */
  animateBackdropClose() {
    if (this.state.isAnimateBackdrop && this.state.animBackdrop) {
      this.state.animBackdrop.stop();
    }
    this.setState({ isAnimateBackdrop: true });

    const animBackdrop = Animated.timing(this.state.backdropOpacity, {
      toValue: 0,
      duration: this.props.closeImmediately ? 0 : this.props.animationDuration,
      easing: this.props.easing,
      useNativeDriver: this.props.useNativeDriver || true,
    });
    animBackdrop.start(() => {
      this.setState({
        isAnimateBackdrop: false,
        animBackdrop,
      });
    });
  }

  /*
   * Stop opening animation
   */
  stopAnimateOpen() {
    if (this.state.isAnimateOpen) {
      if (this.state.animOpen) {
        this.state.animOpen.stop();
      }
      this.setState({ isAnimateOpen: false });
    }
  }

  /*
   * Open animation for the modal, will move up
   */
  _animateOpen() {
    this.stopAnimateOpen();
    this.stopAnimateClose();

    // Backdrop fadeIn
    if (this.props.backdrop) {
      this.animateBackdropOpen();
    }

    this.setState(
      {
        isAnimateOpen: true,
        isOpen: true,
      },
      () => {
        requestAnimationFrame(() => {
          // Detecting modal position
          const positionDest = this.calculateModalPosition(this.state.containerHeight - this.state.keyboardOffset);
          const animOpen = Animated.timing(this.state.modalPosition, {
            toValue: positionDest,
            duration: this.props.animationDuration,
            easing: this.props.easing,
            useNativeDriver: this.props.useNativeDriver || true,
          });
          animOpen.start(() => {
            this.setState({
              isAnimateOpen: false,
              animOpen,
            });
            if (this.props.onOpened) {
              this.props.onOpened();
            }
          });
        });
      },
    );
  }

  relayoutIfOpenedState() {
    if (this.onViewLayoutCalculated) {
      this.onViewLayoutCalculated();
    } else if (this.state.isOpen || this.state.isAnimateOpen) {
      this._animateOpen();
    }
  }

  /*
   * Stop closing animation
   */
  stopAnimateClose() {
    if (this.state.isAnimateClose) {
      if (this.state.animClose) {
        this.state.animClose.stop();
      }
      this.setState({ isAnimateClose: false });
    }
  }

  /*
   * Close animation for the modal, will move down
   */
  animateClose() {
    this.stopAnimateOpen();

    // Backdrop fadeout
    if (this.props.backdrop) {
      this.animateBackdropClose();
    }
    if (this.props.onClosedStarted) {
      this.props.onClosedStarted();
    }
    this.setState(
      {
        isAnimateClose: true,
        isOpen: false,
        keyboardOffset: 0,
      },
      () => {
        const animClose = Animated.timing(this.state.modalPosition, {
          toValue: this.state.containerHeight,
          duration: this.props.closeImmediately ? 0 : this.props.animationDuration,
          easing: this.props.easing,
          useNativeDriver: this.props.useNativeDriver || true,
        });

        animClose.start(() => {
          // Keyboard.dismiss();   // make this optional. Easily user defined in .onClosed() callback
          this.setState(
            {
              isAnimateClose: false,
              animClose,
            },
            () => {
              /* Set the state to the starting position of the modal, preventing from animating where the swipe stopped */
              this.state.modalPosition.setValue(this.state.containerHeight);
            },
          );
          if (this.props.onClosed) {
            this.props.onClosed();
          }
          if (this.props.backButtonClose && Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
          }
        });
      },
    );
  }

  /*
   * Calculate when should be placed the modal
   */
  calculateModalPosition(containerHeight: number) {
    let position = 0;

    if (this.props.modalPosition === 'bottom') {
      position = containerHeight - this.state.height;
    } else if (this.props.modalPosition === 'center') {
      position = containerHeight / 2 - this.state.height / 2;
    }
    // Checking if the position >= 0
    if (position < 0) {
      position = 0;
    }
    return position;
  }

  /*
   * Event called when the container view layout is calculated
   */
  onContainerLayout(evt) {
    const height = evt.nativeEvent.layout.height;
    const width = evt.nativeEvent.layout.width;

    // If the container size is still the same we're done
    if (height === this.state.containerHeight && width === this.state.containerWidth) {
      this.setState({ isInitialized: true });
      return;
    }

    this.setState(
      {
        isInitialized: true,
        containerHeight: height,
        containerWidth: width,
      },
      () => {
        this.relayoutIfOpenedState();
      },
    );
  }

  /*
   * Event called when the modal view layout is calculated
   */
  onContentLayout({
    nativeEvent: {
      layout: { width, height },
    },
  }: LayoutChangeEvent) {
    // If the dimensions are still the same we're done
    const newState: Partial<State> = {};
    if (height !== this.state.height) {
      newState.height = height;
    }
    if (width !== this.state.width) {
      newState.width = width;
    }
    this.setState(newState as State, () => {
      this.relayoutIfOpenedState();
    });
  }

  /*
   * Render the backdrop element
   */
  renderBackdrop() {
    let backdrop: ReactElement | null = null;

    if (this.props.backdrop) {
      backdrop = (
        <TouchableWithoutFeedback onPress={this.props.backdropPressToClose ? this.close : undefined}>
          <Animated.View
            importantForAccessibility={'no'}
            style={[styles.absolute, { opacity: this.state.backdropOpacity }]}
          >
            <View
              style={[
                styles.absolute,
                {
                  backgroundColor: this.props.backdropColor,
                  opacity: this.props.backdropOpacity,
                },
              ]}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    }

    return backdrop;
  }

  renderContent() {
    const size = {
      height: this.state.containerHeight,
      width: this.state.containerWidth,
    };
    const offsetX = (this.state.containerWidth - this.state.width) / 2;

    return (
      <Animated.View
        onLayout={this.onContentLayout}
        style={[
          styles.wrapper,
          size,
          this.props.style,
          {
            transform: [{ translateY: this.state.modalPosition }, { translateX: offsetX }],
          },
        ]}
        pointerEvents={this.state.isOpen ? 'auto' : 'none'}
      >
        {(this.props as any).children}
      </Animated.View>
    );
  }

  /*
   * Render the component
   */
  override render() {
    const visible = this.state.isOpen || this.state.isAnimateOpen || this.state.isAnimateClose;

    if (!visible) {
      return <View />;
    }

    return (
      <View
        importantForAccessibility={'yes'}
        accessibilityViewIsModal={true}
        style={[styles.transparent, styles.absolute]}
        pointerEvents={'box-none'}
      >
        <View style={{ flex: 1 }} pointerEvents={'box-none'} onLayout={this.onContainerLayout}>
          {visible && this.renderBackdrop()}
          {visible && this.renderContent()}
        </View>
      </View>
    );
  }

  /****************** PUBLIC METHODS **********************/

  open() {
    if (this.props.isDisabled || this.state.isAnimateOpen || this.state.isOpen) {
      return;
    }
    this.onViewLayoutCalculated = () => {
      this._animateOpen();
      if (this.props.backButtonClose && Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
      }
      this.onViewLayoutCalculated = null;
    };
    this.setState({ isAnimateOpen: true });
  }

  close() {
    if (this.props.isDisabled || this.state.isAnimateClose || !this.state.isOpen) {
      return;
    }
    this.animateClose();
    if (this.props.backButtonClose && Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
  }
}
