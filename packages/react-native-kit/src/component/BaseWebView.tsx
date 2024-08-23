import { memo, useMemo, forwardRef, type ForwardedRef } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Platform } from 'react-native';
import type { WebViewProps } from 'react-native-webview';
import WebView from 'react-native-webview';

type Props = { minHeight?: number } & WebViewProps;
const BaseWebView = memo(
  forwardRef(({ minHeight, style, ...rest }: Props, ref: ForwardedRef<WebView>) => {
    const memoizedStyle = useMemo<StyleProp<ViewStyle>>(
      () => [style, { opacity: 0.99, minHeight: minHeight || 1 }],
      [style, minHeight],
    );
    return (
      <WebView
        ref={ref}
        {...rest}
        androidLayerType={'hardware'}
        showsVerticalScrollIndicator={Platform.OS === 'web'}
        showsHorizontalScrollIndicator={false}
        scalesPageToFit={true}
        setSupportMultipleWindows={false}
        overScrollMode={'never'}
        contentMode={'mobile'}
        style={memoizedStyle}
        cacheMode={'LOAD_CACHE_ELSE_NETWORK'}
        webviewDebuggingEnabled={__DEV__}
        textZoom={100}
      />
    );
  }),
);
export type { Props as BaseWebViewProps };
export { BaseWebView };
