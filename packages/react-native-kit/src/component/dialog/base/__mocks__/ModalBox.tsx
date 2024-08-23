import React from 'react';
import { View } from 'react-native';
import { act } from 'react-test-renderer';

import is from '../../../../util/is';

type Props = {
  onOpened?: () => void;
  onClosed?: () => void;
  onClosedStarted?: () => void;
  children: React.ReactElement;
  testID?: string;
};
type State = {
  isOpened: boolean;
};

export class ModalBox extends React.Component<Props, State> {
  override state = { isOpened: false };

  open() {
    act(() => this.setState({ isOpened: true }));
    this.props.onOpened?.();
  }
  close() {
    this.setState({ isOpened: false });
    this.props.onClosedStarted?.();
    this.props.onClosed?.();
  }
  override render() {
    return (
      <View testID={`ModalBox/${this.props.testID}`}>
        {this.state.isOpened
          ? is.function(this.props.children)
            ? this.props.children({ close: this.close })
            : this.props.children
          : null}
      </View>
    );
  }
}
