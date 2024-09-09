import {
  spacing,
  is,
  useStableCallback,
  useTimeoutHandler,
  tAssert,
  BaseWebView,
  px,
  Box,
} from '@teamturing/react-native-kit';
import _ from 'lodash';
import type { ReactElement, Ref, ForwardedRef } from 'react';
import React, { useImperativeHandle, useRef, useCallback, useEffect, forwardRef, useState, useMemo } from 'react';
import { type StyleProp, type ViewStyle, Platform, View, ScrollView } from 'react-native';
import type { WebViewMessageEvent, default as WebView } from 'react-native-webview';

import LaTexHtmlText from '../html/LaTexHtmlText';
import { useTexSettings } from '../provider';
import { convertTexToHtml } from '../util';

import { LaTexRightGradient, LaTexLeftGradient, LaTexTopGradient, LaTexBottomGradient } from './LaTexGradients';

/*
const _debugLongHtml = `
<div class="_cms_content-frame"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span><br><img src="https://cdn.teamturing.com/cms/1705754132_go.png" alt="https://cdn.teamturing.com/cms/1705754132_go.png"></div>
`;
*/

export type LaTexProp = {
  style?: StyleProp<Omit<ViewStyle, 'paddingHorizontal' | 'padding' | 'paddingLeft' | 'paddingRight' | 'height'>>;
  tex: string;
  disablePointerEvent?: boolean;
  testID?: string;
  paddingHorizontal?: number;
  paddingTopIfScrollable?: number;
  paddingBottomIfScrollable?: number;
  initialPhantomBoxVisibility?: PhantomBoxVisibility;
  isPhantomBoxClickable?: boolean;

  onPhantomBoxCountChanged?: (count: number) => void;
  onPhantomBoxPressed?: (index: number) => void;
  height?: number;
  onLayoutHtml?: (params: { clientWidth: number; scrollWidth: number; scrollHeight: number }) => void;
  isFixedToDocumentWidth?: boolean;
  widthForFixedDocumentWidth?: number;

  showsHorizontalFadings?: boolean;
  showsTopFading?: boolean;
  showsBottomFading?: boolean;
  isScrollEnabled?: boolean;
  fontSize?: number;

  convertMarkUp?: boolean;
  convertTable?: boolean;
  injectPhantomBoxClasses?: boolean;
  flattenPhantomBoxClassNameIndice?: boolean;
  isAiAnimationEnable?: boolean;
};
export type LaTexRef = {
  setPhantomBoxVisibility: (visibility: PhantomBoxVisibility) => void;
  scrollToTop: () => void;
};

export type MessageType = 'scroll_to_top' | 'render_tex' | 'set_phantom_boxes_visibility';
type PhantomBoxVisibility = 'box_visible' | 'box_invisible' | 'no_box';
const defaultHeight = 1500;

const LaTexInternal = forwardRef(
  (
    {
      style,
      disablePointerEvent = false,
      testID,
      paddingHorizontal = 0,
      initialPhantomBoxVisibility = 'box_invisible',
      isPhantomBoxClickable = false,
      onPhantomBoxCountChanged,
      onPhantomBoxPressed,
      height: heightProp,
      onLayoutHtml,
      isFixedToDocumentWidth = false,
      widthForFixedDocumentWidth,
      showsBottomFading = false,
      showsHorizontalFadings = false,
      isScrollEnabled: _isScrollEnabled = false,
      showsTopFading = false,
      paddingTopIfScrollable = spacing[0],
      paddingBottomIfScrollable = spacing[32],
      fontSize = 13,
      convertMarkUp,
      convertTable,
      injectPhantomBoxClasses,
      flattenPhantomBoxClassNameIndice,
      isAiAnimationEnable = false,
      tex,
    }: LaTexProp,
    ref: React.Ref<LaTexRef>,
  ): ReactElement => {
    const isScrollEnabled = _isScrollEnabled || Platform.OS === 'web';
    tAssert(
      isFixedToDocumentWidth ? is.number(widthForFixedDocumentWidth) : true,
      '[LaTex] isFixedToDocumentWidth가 설정되었다면 widthForFixedDocumentWidth를 전달해주세요.',
    );

    const webView = useRef<WebView>(null);
    const [documentWidth, setDocumentWidth] = useState<number>();
    const [documentHeight, setDocumentHeight] = useState(heightProp ?? defaultHeight);
    const width = isFixedToDocumentWidth ? Math.max(widthForFixedDocumentWidth!, documentWidth || 0) : '100%';
    const height = isScrollEnabled ? undefined : is.number(heightProp) ? heightProp : documentHeight;

    const html = useMemo(
      () =>
        convertTexToHtml({
          tex,
          convertMarkUp,
          convertTable,
          injectPhantomBoxClasses,
          flattenPhantomBoxClassNameIndice,
        }),
      [tex, convertMarkUp, convertTable, injectPhantomBoxClasses, flattenPhantomBoxClassNameIndice],
    );

    const postMessageToWebView = ({ type, data }: { type: MessageType; data?: any }) => {
      if (Platform.OS === 'web') {
        webView.current?.injectJavaScript({ type, data } as any);
      } else {
        webView.current?.injectJavaScript(
          `(function(){
          window.dispatchEvent(new MessageEvent('message', {data : ${JSON.stringify({ type, data })}}))
      })()`,
        );
      }
    };

    const renderTex = useStableCallback(() => {
      if (is.notEmptyString(html)) {
        postMessageToWebView({
          type: 'render_tex',
          data: {
            html,
            paddingHorizontal,
            paddingTop: isScrollEnabled ? paddingTopIfScrollable : 0,
            paddingBottom: isScrollEnabled ? paddingBottomIfScrollable : 0,
            initialPhantomBoxVisibility,
            isPhantomBoxClickable,
            injectPhantomBoxClasses,
            isAiAnimationEnable,
          },
        });
      }
    });
    const isFirstRendering = useRef(true);
    // Don't change useEffect dependencies if you are not sure.
    useEffect(() => {
      if (isFirstRendering.current) {
        isFirstRendering.current = false;
        return;
      }
      renderTex();
    }, [
      paddingHorizontal,
      initialPhantomBoxVisibility,
      isPhantomBoxClickable,
      paddingTopIfScrollable,
      paddingBottomIfScrollable,
      renderTex,
      tex,
    ]);

    const setPhantomBoxVisibility = useCallback((visibility: PhantomBoxVisibility) => {
      postMessageToWebView({
        type: 'set_phantom_boxes_visibility',
        data: { visibility },
      });
    }, []);

    const scrollToTop = useStableCallback(() => {
      postMessageToWebView({ type: 'scroll_to_top' });
    });

    useImperativeHandle(ref, () => ({ setPhantomBoxVisibility, scrollToTop }), [setPhantomBoxVisibility, scrollToTop]);

    const lastLayoutChangeEventId = useRef(-1);
    const handler = useTimeoutHandler();
    const onMessage = useStableCallback((event: WebViewMessageEvent) => {
      const rawData = event?.nativeEvent?.data;
      if (is.notEmptyString(rawData) && rawData.startsWith('{') && rawData.endsWith('}')) {
        const data = JSON.parse(rawData);
        if (data.event === 'render-success') {
        } else if (data.event === 'render-fail') {
          // retry
          clearTimeout(handler.current);
          handler.current = setTimeout(renderTex, 7000);
        } else if (data.event === 'phantom-box-count-changed' && is.number(data.count)) {
          onPhantomBoxCountChanged?.(data.count);
        } else if (data.event === 'phantom-box-pressed' && is.number(data.index)) {
          onPhantomBoxPressed?.(data.index);
        } else if (data.event === 'set-layout') {
          // 처음에 data에 모든 값이 0이 넘어오므로 필요없는 이벤트인지 검사
          if (!is.number(data.scrollHeight) || !(data.scrollHeight > 0)) {
            return;
          }
          if (is.number(data.layoutChangeEventId) && data.layoutChangeEventId <= lastLayoutChangeEventId.current) {
            return;
          }
          lastLayoutChangeEventId.current = data.layoutChangeEventId;
          // widthForFixedDocumentWidth가 있음은 intrinsic height로 계산되어야 하는 LaTex란 뜻이므로 이 때만 처리
          if (widthForFixedDocumentWidth && is.number(data.scrollWidth)) {
            if (documentHeight !== data.scrollHeight || documentWidth !== data.scrollWidth) {
              setDocumentHeight((data.scrollHeight || defaultHeight) + 50);
              setDocumentWidth(data.scrollWidth || 500);
              onLayoutHtml?.(data);
            }
          }
        }
      }
    });

    const htmlSource = useMemo(() => ({ html: LaTexHtmlText({ fontSize }), baseUrl: '' }), [fontSize]);

    return (
      <View
        style={[style, { width }, Platform.OS === 'web' ? { height: heightProp } : { height }]}
        pointerEvents={disablePointerEvent ? 'none' : 'auto'}
        testID={testID}
      >
        <BaseWebView
          scrollEnabled={isScrollEnabled}
          minHeight={100}
          style={[
            {
              backgroundColor: 'transparent',
              width: '100%',
            },
            Platform.OS === 'web'
              ? is.number(heightProp)
                ? { height: heightProp, overflow: 'hidden' }
                : ({ flex: 1, overflow: 'auto' } as any)
              : undefined,
          ]}
          originWhitelist={originWhitelist}
          javaScriptEnabled
          ref={webView}
          source={htmlSource}
          onLoad={renderTex}
          onMessage={onMessage}
        />
        {showsHorizontalFadings && (
          <>
            <LaTexLeftGradient />
            <LaTexRightGradient />
          </>
        )}
        {showsTopFading && <LaTexTopGradient />}
        {showsBottomFading && <LaTexBottomGradient />}
      </View>
    );
  },
);
const LaTexMemoized = React.memo(LaTexInternal, _.isEqual);

const originWhitelist = ['*'];

/**
 * # LaTex컴포넌트들
 *
 * 1. LaTex컴포넌트에서 html document의 height를 콜백으로 받아 고유한 height를 가진 컨텐츠로
 * 사용할지(이렇게 되면 React Native의 ScrollView로 LaTex를 다른 View와 동일한 레이아웃을 적용할 수 있습니다.),
 *
 * 2. 아니면 LaTex내부의 WebView자체의 스크롤링을 이용할지의 차이입니다.
 *
 * 2번 방식이 먼저 선호되어야 하고 그렇지 않은 경우에만 1번 방식에 LaTex가 좌우로 스크린 너비를 넘어갈 것을 대비하여
 *   Horizontal Scroll을 적용한 컴포넌트가 사용됩니다.
 */

// 2번 방식
export const LaTexScrollable = forwardRef(
  (
    props: Omit<
      LaTexProp,
      | 'widthForFixedDocumentWidth'
      | 'isFixedToDocumentWidth'
      | 'height'
      | 'onLayoutHtml'
      | 'isScrollEnabled'
      | 'showsHorizontalFadings'
    >,
    ref: Ref<LaTexRef>,
  ) => {
    const { fontSize } = useTexSettings();
    return (
      <LaTexMemoized
        key={`${fontSize}`}
        ref={ref}
        {...props}
        isFixedToDocumentWidth={false}
        isScrollEnabled
        showsHorizontalFadings
        fontSize={fontSize}
      />
    );
  },
);

// 2번 방식 - 푼 문제 카드 같은 단순한 아이템 레이아웃에 사용
export const LaTexSimpleItem = ({
  tex,
  style,
  paddingHorizontal,
  height,
  fontSize,
  useTexAsKey = true,
}: Pick<LaTexProp, 'style' | 'tex' | 'paddingHorizontal' | 'height' | 'fontSize'> & { useTexAsKey?: boolean }) => {
  return (
    <LaTexMemoized
      key={useTexAsKey ? `${tex}-${fontSize}` : undefined}
      disablePointerEvent
      isPhantomBoxClickable={false}
      initialPhantomBoxVisibility={'no_box'}
      isScrollEnabled={false}
      showsBottomFading
      paddingBottomIfScrollable={0}
      {...{ fontSize, height, tex, style, paddingHorizontal }}
    />
  );
};

// 1번 방식
export const LaTexWithDocumentIntrinsicHeight = (
  props: Omit<LaTexProp, 'height' | 'showsHorizontalFadings'> & {
    width: number;
    sketchView?: ReactElement;
    disableHorizontalScroll?: boolean;
    refForCapture?: ForwardedRef<View>;
    paddingBottom?: number;
    innerRef?: ForwardedRef<LaTexRef>;
    minHeight?: number;
  },
) => {
  const { fontSize } = useTexSettings();
  const [isHorizontalScrollOverflowed, setHorizontalScrollOverflowed] = useState(false);

  const latexElement = (
    <Box
      bg={'white'}
      flex={1}
      pb={px(props.paddingBottom ?? 0)}
      ref={props.refForCapture}
      collapsable={false}
      minHeight={px(props.minHeight ?? 0)}
    >
      <LaTexMemoized
        key={`${props.tex}-${props.width}-${fontSize}`}
        ref={props.innerRef}
        {...props}
        onLayoutHtml={({ scrollWidth }) => {
          if (scrollWidth && scrollWidth > props.width + 8) {
            setHorizontalScrollOverflowed(true);
          } else {
            setHorizontalScrollOverflowed(false);
          }
        }}
        isFixedToDocumentWidth
        widthForFixedDocumentWidth={props.width}
        isScrollEnabled={Platform.OS === 'web'}
        showsHorizontalFadings={false}
        fontSize={fontSize}
        disablePointerEvent
      />
      {props.sketchView}
    </Box>
  );

  if (Platform.OS === 'web') {
    return (
      <Box w={px(props.width)} flex={1}>
        {latexElement}
        <LaTexLeftGradient />
        <LaTexRightGradient />
      </Box>
    );
  } else {
    return (
      <Box w={px(props.width)} flex={1}>
        <ScrollView
          scrollEnabled={!props.disableHorizontalScroll && isHorizontalScrollOverflowed}
          overScrollMode={'never'}
          disableScrollViewPanResponder={true}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{
            width: props.width,
            flex: 1,
          }}
        >
          {latexElement}
        </ScrollView>
        <LaTexLeftGradient />
        <LaTexRightGradient />
      </Box>
    );
  }
};
