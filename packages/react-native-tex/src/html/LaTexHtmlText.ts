/* eslint-disable */
const text = ({ fontSize }: { fontSize: number } = { fontSize: 13 }) => String.raw`
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>MathKing</title>
    <meta
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      name="viewport"
      id="latex_viewport"
      charset="UTF-8"
    />

    <script async src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@teamturing/katex-utils@2.19.0/dist/mathking-katex.css"
      crossorigin="anonymous"
    />

    <style>
      ._cms_content-frame {
        font-size: ${fontSize}px;
      }
    </style>

    <style>
      *,
      *::after,
      *::before {
        -webkit-user-select: none;
        -webkit-user-drag: none;
        cursor: default;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      html {
        padding: 0 0;
        margin: 0;
      }

      body {
        padding: 0;
        margin: 0 0 0 0;
        position: relative;
      }
    </style>
    <style>
      #container {
        background-color: white;
        width: 100%;
      }

      #shadow-animation-container {
        visibility: hidden;
      }

      @keyframes fade-in {
        to {
          opacity: 1;
        }
        from {
          opacity: 0;
        }
      }

      @keyframes cursor-blink {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      .typewriter-cursor {
        border-radius: 1px;
        width: 1.5px;
        height: 14px;
        /*border: 1px solid black;*/
        background: black;
        visibility: hidden;
        position: absolute;
      }
    </style>
  </head>
  <body>
    <div id="container" onmousedown="return false;"></div>
    <div id="shadow-animation-container" onmousedown="return false;" aria-hidden="true"></div>
    <div class="typewriter-cursor"></div>
    <script>
      const CONTENT_FRAME_CLASS = '_cms_content-frame';

      const documentResizeObserver = new ResizeObserver(() => {
        onDocumentResized();
      });
      documentResizeObserver.observe(document.getElementById('container'));

      const renderChoiceLayout = (container) => {
        const choiceBox = container.querySelector('._cms_choice-box');
        if (!choiceBox) return;

        const choiceBoxWidth = choiceBox.getBoundingClientRect().width;
        choiceBox.classList.remove('strip');
        choiceBox.classList.remove('third');
        choiceBox.classList.remove('half');
        choiceBox.classList.remove('full');

        const maxChoiceWidth = Array.from(choiceBox.querySelectorAll('._cms_choice')).reduce((pre, choice) => {
          const width = choice.getBoundingClientRect().width;
          return pre > width ? pre : width;
        }, 0);

        if (maxChoiceWidth > (choiceBoxWidth / 100) * 50) {
          choiceBox.classList.add('full');
        } else if (maxChoiceWidth > (choiceBoxWidth / 100) * 33) {
          choiceBox.classList.add('half');
        } else if (maxChoiceWidth > (choiceBoxWidth / 100) * 25) {
          choiceBox.classList.add('third');
        } else if (maxChoiceWidth < (choiceBoxWidth / 100) * 20) {
          choiceBox.classList.add('strip');
        } else {
          choiceBox.classList.add('third');
        }
      };

      function relayout() {
        try {
          const container = document.getElementById('container');
          if (container) renderChoiceLayout(container);
        } catch (e) {
          reportErrorWithSlackWebhook(e);
        }
      }

      const onRenderSuccess = () => {
        window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'render-success' }));
      };
      const onRenderFailed = () => {
        window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'render-fail' }));
      };
      const onPhantomBoxCountChanged = (count) => {
        window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'phantom-box-count-changed', count }));
      };
      const onPhantomBoxPressed = (index) => {
        window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'phantom-box-pressed', index }));
      };
      const onDocumentResized = () => {
        const container = document.getElementById('container');
        if (container) {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({
              event: 'set-layout',
              scrollHeight: container.scrollHeight,
              scrollWidth: container.scrollWidth,
              clientWidth: container.clientWidth,
            }),
          );
        }
      };

      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

      const setPhantomBoxVisibility = (index, state) => {
        const box = document.getElementById('phantom-box-' + index);
        const border = document.getElementById('phantom-box-border-' + index);
        if (box && border) {
          box.classList.remove('_cms_phantom_box_invisible', '_cms_phantom_box_visible', '_cms_phantom_no_box');
          border.classList.remove('_cms_phantom_border_visible', '_cms_phantom_border_invisible');
          if (state === 'box_visible') {
            box.classList.add('_cms_phantom_box_visible');
            border.classList.add('_cms_phantom_border_visible');
          } else if (state === 'box_invisible') {
            box.classList.add('_cms_phantom_box_invisible');
            border.classList.add('_cms_phantom_border_visible');
          } else {
            box.classList.add('_cms_phantom_no_box');
            border.classList.add('_cms_phantom_border_invisible');
          }
        }
      };

      const togglePhantomBoxVisibility = (index) => {
        const box = document.getElementById('phantom-box-' + index);
        if (box) {
          if (box.classList.contains('_cms_phantom_box_invisible')) {
            setPhantomBoxVisibility(index, 'box_visible');
          } else if (box.classList.contains('_cms_phantom_box_visible')) {
            setPhantomBoxVisibility(index, 'box_invisible');
          } else {
            // if no_box state, do nothing
          }
        }
      };

      const initializePhantomBoxes = (initialPhantomBoxVisibility, isPhantomBoxClickable) => {
        let count = 0;
        iteratePhantomBoxes((box, border, i) => {
          count += 1;
          initializeBox(box, border, i);
        });
        onPhantomBoxCountChanged(count);

        function initializeBox(box, border, index) {
          setPhantomBoxVisibility(index, initialPhantomBoxVisibility || 'box_invisible');
          if (isPhantomBoxClickable) {
            box.onclick = () => {
              togglePhantomBoxVisibility(index);
              onPhantomBoxPressed(index);
            };
          }
        }
      };

      const iteratePhantomBoxes = (callback) => {
        try {
          for (let i = 0; ; i++) {
            const box = document.getElementById('phantom-box-' + i);
            const border = document.getElementById('phantom-box-border-' + i);
            if (box && border) {
              callback(box, border, i);
            } else {
              break;
            }
          }
        } catch (e) {}
      };

      const renderLaTex = ({
        html,
        paddingHorizontal,
        initialPhantomBoxVisibility,
        isPhantomBoxClickable,
        paddingBottom,
        paddingTop,
        isAiAnimationEnable,
      }) => {
        const container = document.getElementById('container');
        const shadowContainer = document.getElementById('shadow-animation-container');

        let delayHandler = -1;

        function setPaddingForContentFrame(element) {
          if (element instanceof HTMLElement) {
            const paddingStyle =
              (paddingTop || 0) +
              'px ' +
              (paddingHorizontal || 0) +
              'px ' +
              (paddingBottom || '0') +
              'px ' +
              (paddingHorizontal || 0) +
              'px';

            element.style.padding = paddingStyle;
          }
        }

        function renderContainer() {
          container.innerHTML = html;
          container.style.visibility = 'visible';
          shadowContainer.innerHTML = '';
          clearTimeout(delayHandler);
          setPaddingForContentFrame(container.querySelector('.' + CONTENT_FRAME_CLASS));
          setTimeout(function () {
            relayout();
          }, 100);
          initializePhantomBoxes(initialPhantomBoxVisibility, isPhantomBoxClickable);
          onRenderSuccess();
        }

        function onAiAnimationRenderFailed() {
          clearTimeout(delayHandler);
          shadowContainer.innerHTML = '';
          /** @type {HTMLDivElement} */
          const cursor = document.querySelector('.typewriter-cursor');
          if (cursor) {
            cursor.style.visibility = 'hidden';
          }
          renderContainer();
        }

        function renderContainerWithAiAnimation() {
          try {
            container.innerHTML = '';
            const mockedContentFrame = document.createElement('div');
            mockedContentFrame.className = CONTENT_FRAME_CLASS;
            setPaddingForContentFrame(mockedContentFrame);
            container.appendChild(mockedContentFrame);
            shadowContainer.innerHTML = html;
            const root = shadowContainer.querySelector('.' + CONTENT_FRAME_CLASS);
            if (root) {
              root.style.visibility = 'hidden';
              /** @type {Node[]} */
              const replacedElements = [];
              /** @type {HTMLElement[]} */
              const animatedElements = [];

              for (let node = root.firstChild; node; node = node.nextSibling) {
                if (node.nodeType === 3 /* text */ && typeof node.textContent === 'string' && node.textContent.trim()) {
                  for (let i = 0; i < node.textContent.length; i++) {
                    /** @type {HTMLSpanElement} */
                    const newSpan = document.createElement('span');
                    newSpan.textContent = node.textContent.charAt(i);
                    newSpan.style.visibility = 'hidden';
                    newSpan.className += ' splitted-text';
                    animatedElements.push(newSpan);
                    replacedElements.push(newSpan);
                  }
                } else if (
                  node.firstChild &&
                  node.firstChild.firstChild &&
                  node.firstChild.firstChild.classList.contains('base')
                ) {
                  /** @type {HTMLElement} */
                  const katexHtml = node.firstChild;
                  for (let i = 0; i < katexHtml.children.length; i++) {
                    /** @type {HTMLElement} */
                    const baseElement = katexHtml.children[i];
                    if (baseElement.classList.contains('base')) {
                      baseElement.style.visibility = 'hidden';
                      animatedElements.push(baseElement);
                    }
                  }
                  replacedElements.push(node);
                } else {
                  if (node.nodeType === 1 /* element */) {
                    node.style.visibility = 'hidden';
                    animatedElements.push(node);
                  }
                  replacedElements.push(node);
                }
              }
              root.innerHTML = '';
              for (const el of replacedElements) {
                root.appendChild(el);
              }

              // 구성된 root를 contianer에 넣어준다.
              mockedContentFrame.appendChild(root);
              shadowContainer.innerHTML = '';

              /** @type {number[]} */
              const durations = [];
              for (let i = 0, j = 0, k = 0; i < animatedElements.length; i++) {
                const el = animatedElements[i];
                if (el.className && el.className.includes('splitted-text')) {
                  k++;
                  if (el.textContent === ' ' && k % 10 === 0 && Math.random() < 0.5) {
                    durations.push(400 + Math.random() * 200 - 200);
                  } else {
                    durations.push(20 + Math.random() * 10 - 10);
                  }
                } else {
                  j++;
                  if (j % 20 === 0 && Math.random() < 0.5) {
                    durations.push(250);
                  } else {
                    durations.push(80 + Math.random() * 40 - 40);
                  }
                }
              }
              const runAnimation = (index) => {
                if (animatedElements.length <= index || animatedElements.length !== durations.length) {
                  // setContainerVisible(false);
                  // clearTimeout(delayHandler.current);
                  onAiAnimationRenderFailed();
                  return;
                }
                const el = animatedElements[index];

                el.style.visibility = 'visible';
                if (el.tagName === 'IMG') {
                  el.style.animation = '.5s fade-in ease-in';
                }

                /** @type {HTMLDivElement} */
                const cursor = document.querySelector('.typewriter-cursor');
                if (cursor && el.tagName === 'SPAN') {
                  cursor.style.visibility = 'visible';
                  const rect = el.getBoundingClientRect();
                  cursor.style.top = rect.y + (rect.height - 14) / 2 + 'px';
                  cursor.style.left = rect.right + 4 + 'px';
                }

                if (index === durations.length - 1) {
                  // 애니메이션 종료
                  clearTimeout(delayHandler);
                  if (cursor) {
                    const anim = cursor.animate([{ opacity: 0 }, { opacity: 1 }], {
                      duration: 500,
                      iterations: Infinity,
                      direction: 'alternate-reverse',
                      easing: 'ease-in-out',
                    });
                    delayHandler = setTimeout(() => {
                      anim.cancel();
                      cursor.style.visibility = 'hidden';
                      cursor.style.animation = '';
                    }, 1500);
                  }
                } else {
                  // 다음 요소 애니메이션
                  delayHandler = setTimeout(() => {
                    runAnimation(index + 1);
                  }, durations[index]);
                }
              };
              runAnimation(0);
            } else {
              onAiAnimationRenderFailed();
            }
          } catch (e) {
            onAiAnimationRenderFailed();
          }
        }

        try {
          if (isAiAnimationEnable) {
            renderContainerWithAiAnimation();
          } else {
            renderContainer();
          }
        } catch (e) {
          reportErrorWithSlackWebhook(e);
          onRenderFailed();
        }
      };

      function reportErrorWithSlackWebhook(e) {
        fetch('https://hooks.slack.com/services/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', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            text: '*Tex Rendering Issue*\`\`\`' + ('' + e) + '\n\`\`\`',
          }),
        });
      }

      const MessageTypes = ['render_tex', 'set_phantom_boxes_visibility', 'scroll_to_top'];

      const checkIsValidArgument = (type) => {
        return MessageTypes.includes(type);
      };

      const handleMessage = ({ type, data }) => {
        if (!checkIsValidArgument(type)) return;

        try {
          if (type === 'render_tex') {
            renderLaTex(data);
          } else if (type === 'set_phantom_boxes_visibility') {
            iteratePhantomBoxes((box, border, i) => {
              setPhantomBoxVisibility(i, data.visibility);
            });
          } else if (type === 'scroll_to_top') {
            scrollToTop();
          }
        } catch (e) {}
      };

      /**
       * For Android, use document and use window for iOS
       * @link https://github.com/react-native-community/react-native-webview/issues/356#issuecomment-467430141
       */
      document.addEventListener('message', (event) => {
        handleMessage(event.data);
      });

      window.addEventListener('message', (event) => {
        handleMessage(event.data);
      });
    </script>
  </body>
</html>
`
export default text;