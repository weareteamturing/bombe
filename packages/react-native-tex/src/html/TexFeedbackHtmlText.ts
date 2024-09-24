/* eslint-disable */
const text = ({ fontSize }: { fontSize: number } = { fontSize: 13 }) => String.raw`
<!DOCTYPE html>
<html>
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
      href="https://cdn.jsdelivr.net/npm/@teamturing/katex-utils@2.20.2/dist/mathking-katex.css"
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

      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <style>
      #container {
        padding: 20px;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #header-container {
        display: flex;
        column-gap: 4px;
        align-items: center;
      }

      #tex-container {
        margin-top: 12px;
        word-break: break-all;
      }

      #tex-container * {
        color: #222 !important;
      }

      #hint-text {
        margin-top: -2px;
      }

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
    </style>
  </head>
  <body onmousedown="return false;">
    <div id="container">
      <div id="header-container">
        <svg
          id="hint-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#835EEB"
          xmlns="http://www.w3.org/2000/svg"
          style="display: none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0.921997C18.065 0.921997 23 5.407 23 10.922C23 16.436 18.065 20.922 12 20.922C10.795 20.922 9.491 20.801 9.047 20.756L5.479 22.674C5.3674 22.7339 5.24162 22.7624 5.11508 22.7565C4.98855 22.7506 4.86599 22.7104 4.76048 22.6403C4.65497 22.5702 4.57046 22.4728 4.51596 22.3585C4.46146 22.2441 4.43901 22.1171 4.451 21.991L4.778 18.568C1.999 16.494 1 13.28 1 10.922C1 5.407 5.935 0.921997 12 0.921997ZM12.072 13.972C11.7541 13.9723 11.4493 14.0987 11.2245 14.3235C10.9997 14.5483 10.8733 14.8531 10.873 15.171C10.8726 15.4085 10.9427 15.6407 11.0743 15.8383C11.206 16.036 11.3933 16.1901 11.6126 16.2812C11.8319 16.3723 12.0733 16.3963 12.3062 16.3501C12.5392 16.304 12.7532 16.1897 12.9212 16.0219C13.0892 15.854 13.2036 15.6401 13.2499 15.4072C13.2963 15.1743 13.2725 14.9329 13.1816 14.7135C13.0906 14.4942 12.9367 14.3067 12.7392 14.1749C12.5417 14.0431 12.3095 13.9728 12.072 13.973V13.972ZM12.057 5.5C11.1996 5.50106 10.3776 5.84212 9.77139 6.44838C9.16512 7.05465 8.82406 7.87661 8.823 8.734C8.83537 8.93419 8.92362 9.12214 9.06976 9.25952C9.21589 9.39691 9.40892 9.4734 9.6095 9.4734C9.81008 9.4734 10.0031 9.39691 10.1492 9.25952C10.2954 9.12214 10.3836 8.93419 10.396 8.734C10.396 7.818 11.141 7.073 12.057 7.073C12.621 7.073 13.193 7.333 13.514 7.735C13.759 8.043 13.835 8.41 13.738 8.826C13.629 9.306 13.348 9.505 12.814 9.846C12.164 10.263 11.271 10.834 11.271 12.281C11.2783 12.4847 11.3643 12.6777 11.511 12.8193C11.6577 12.9608 11.8536 13.0399 12.0575 13.0399C12.2614 13.0399 12.4573 12.9608 12.604 12.8193C12.7507 12.6777 12.8367 12.4847 12.844 12.281C12.844 11.716 13.081 11.542 13.664 11.17C14.234 10.805 15.014 10.306 15.271 9.178C15.474 8.298 15.287 7.438 14.743 6.754C14.127 5.981 13.098 5.5 12.057 5.5Z"
          />
        </svg>
        <svg
          id="feedback-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#835EEB"
          xmlns="http://www.w3.org/2000/svg"
          style="display: none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.98 12.747C16.7748 12.7522 16.5706 12.7162 16.3796 12.6412C16.1885 12.5662 16.0143 12.4538 15.8674 12.3104C15.7204 12.1671 15.6037 11.9958 15.524 11.8066C15.4443 11.6175 15.4032 11.4143 15.4033 11.209C15.4034 11.0037 15.4445 10.8005 15.5244 10.6114C15.6042 10.4223 15.7211 10.2511 15.8681 10.1078C16.0151 9.96459 16.1893 9.85223 16.3805 9.77738C16.5716 9.70253 16.7758 9.6667 16.981 9.672C17.382 9.68236 17.7631 9.84895 18.043 10.1363C18.3229 10.4236 18.4794 10.8089 18.4793 11.21C18.4792 11.6111 18.3224 11.9963 18.0423 12.2834C17.7622 12.5706 17.381 12.7369 16.98 12.747ZM12.066 12.747C11.8607 12.7522 11.6564 12.7162 11.4652 12.6412C11.274 12.5661 11.0997 12.4536 10.9527 12.3102C10.8056 12.1667 10.6888 11.9953 10.609 11.806C10.5293 11.6167 10.4882 11.4134 10.4883 11.208C10.4884 11.0026 10.5295 10.7993 10.6094 10.61C10.6893 10.4208 10.8062 10.2495 10.9534 10.1061C11.1005 9.96279 11.2748 9.85036 11.4661 9.77546C11.6574 9.70055 11.8617 9.6647 12.067 9.67C12.4683 9.68036 12.8496 9.84706 13.1297 10.1346C13.4097 10.4221 13.5664 10.8076 13.5663 11.209C13.5662 11.6104 13.4092 11.9958 13.129 12.2831C12.8487 12.5704 12.4673 12.7369 12.066 12.747ZM7.15102 12.747C6.94581 12.7522 6.74165 12.7162 6.55056 12.6412C6.35946 12.5662 6.18532 12.4538 6.03837 12.3104C5.89143 12.1671 5.77467 11.9958 5.69497 11.8066C5.61527 11.6175 5.57424 11.4143 5.57431 11.209C5.57438 11.0037 5.61553 10.8005 5.69536 10.6114C5.77518 10.4223 5.89206 10.2511 6.03909 10.1078C6.18613 9.96459 6.36035 9.85223 6.55149 9.77738C6.74263 9.70253 6.94682 9.6667 7.15202 9.672C7.553 9.68236 7.93407 9.84895 8.21396 10.1363C8.49386 10.4236 8.65044 10.8089 8.65031 11.21C8.65018 11.6111 8.49335 11.9963 8.21327 12.2834C7.93318 12.5706 7.55201 12.7369 7.15102 12.747ZM12 1.5C6.16702 1.5 1.42102 5.814 1.42102 11.117C1.42102 13.387 2.38102 16.476 5.05502 18.47L4.74002 21.764C4.72819 21.8854 4.74962 22.0077 4.80201 22.1178C4.8544 22.228 4.93577 22.3218 5.0374 22.3892C5.13904 22.4566 5.2571 22.4951 5.37894 22.5005C5.50077 22.5059 5.62179 22.4781 5.72902 22.42L9.16002 20.574C9.58702 20.618 10.841 20.734 12 20.734C17.833 20.734 22.579 16.42 22.579 11.117C22.579 5.814 17.833 1.5 12 1.5Z"
          />
        </svg>
        <svg id="hint-text" width="41" height="13" viewBox="0 0 41 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.48828 11.5H0.273438L3.70508 1.60156H6.34375L9.76172 11.5H7.56055L6.81543 9.2168H3.2334L2.48828 11.5ZM3.75293 7.61719H6.2959L5.05859 3.83008H4.99023L3.75293 7.61719ZM12.9336 1.60156V11.5H10.8828V1.60156H12.9336ZM27.7812 0.316406V9.6543H26.0312V0.316406H27.7812ZM17.5 3.00977V1.64258H20.4121V0.302734H22.1758V1.64258H25.0605V3.00977H17.5ZM18.1699 5.85352C18.1631 4.41113 19.4688 3.44727 21.3008 3.44727C23.1191 3.44727 24.4248 4.41113 24.4316 5.85352C24.4248 7.30273 23.1191 8.23242 21.3008 8.23242C19.4688 8.23242 18.1631 7.30273 18.1699 5.85352ZM19.4414 12.5391V8.90234H21.2051V11.1445H28.1094V12.5391H19.4414ZM19.8379 5.85352C19.8311 6.52344 20.4189 6.90625 21.3008 6.90625C22.1689 6.90625 22.75 6.52344 22.7637 5.85352C22.75 5.16309 22.1689 4.80762 21.3008 4.80078C20.4189 4.80762 19.8311 5.16309 19.8379 5.85352ZM39.6074 6.74219V8.12305H30.8027V1.23242H39.5117V2.64062H32.5801V3.95312H39.2246V5.32031H32.5801V6.74219H39.6074ZM29.4629 11.3086V9.88672H40.8516V11.3086H29.4629Z"
            fill="#835EEB"
          />
        </svg>
        <svg
          id="feedback-text"
          width="37"
          height="16"
          viewBox="0 0 31 12"
          fill="#835EEB"
          xmlns="http://www.w3.org/2000/svg"
          style="display: none"
        >
          <path
            d="M9.78125 0.414062H8.26953V11.0781H9.78125V0.414062ZM0.792969 7.41016L0.933594 8.62891C2.89062 8.61719 5.35742 8.57617 7.625 8.20703L7.55469 7.09375C7.10352 7.14648 6.64062 7.19336 6.17188 7.22852V2.59375H7.12109V1.39844H1.08594V2.59375H2.02344V7.39844C1.58984 7.4043 1.17969 7.41016 0.792969 7.41016ZM3.47656 7.36914V2.59375H4.71875V7.32227C4.30273 7.3457 3.88672 7.35742 3.47656 7.36914ZM19.8828 5.34766H13.8125V2.51172H19.8008V1.30469H12.3359V6.54297H19.8828V5.34766ZM11.1875 9.77734H20.9492V8.54688H11.1875V9.77734ZM23.3516 1.08203H21.9336V6.25H26.1875V1.08203H24.8047V2.60547H23.3516V1.08203ZM23.3516 8.52344H29.2344V11.0781H30.7227V7.32812H23.3516V8.52344ZM23.3516 5.06641V3.74219H24.8047V5.06641H23.3516ZM27.0195 6.78906H28.4141V4.23438H29.3047V6.84766H30.7227V0.425781H29.3047V3.02734H28.4141V0.613281H27.0195V6.78906Z"
          />
        </svg>
      </div>
      <div id="tex-container"></div>
    </div>
    <script>
      const onRenderSuccess = () => {
        window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'render-success' }));
      };

      let resizeTimerHandler = -1;
      const onContainerResize = () => {
        clearTimeout(resizeTimerHandler);
        // debounce
        resizeTimerHandler = setTimeout(() => {
          const container = document.getElementById('container');
          try {
            const shouldBeDecreaseFontSize = container.scrollWidth - 10 > container.clientWidth;
            if (shouldBeDecreaseFontSize) {
              document.querySelectorAll('._cms_content-frame').forEach((node) => {
                if (node && node.nodeType === Node.ELEMENT_NODE) {
                  node.style.fontSize = '11px';
                }
              });
            }
          } catch (e) {}
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ event: 'container-resize', height: container.offsetHeight }),
          );
        }, 500);
      };

      const initContaienrResizeObserver = () => {
        const container = document.getElementById('container');
        const ro = new ResizeObserver(onContainerResize);
        ro.observe(container);
      };
      initContaienrResizeObserver();

      const renderLaTex = ({ html, type }) => {
        try {
          const container = document.getElementById('container');
          const texContainer = document.getElementById('tex-container');
          texContainer.innerHTML = html;
          if (type === 'hint') {
            container.style.backgroundColor = '#F3EFFD';
            document.getElementById('hint-icon').style.display = 'inline';
            document.getElementById('hint-text').style.display = 'inline';
            document.getElementById('feedback-icon').style.display = 'none';
            document.getElementById('feedback-text').style.display = 'none';
          } else if (type === 'feedback-positive') {
            container.style.backgroundColor = '#E9FAF6';
            document.getElementById('hint-icon').style.display = 'none';
            document.getElementById('hint-text').style.display = 'none';
            document.getElementById('feedback-icon').style.display = 'inline';
            document.getElementById('feedback-text').style.display = 'inline';
            document.getElementById('feedback-icon').setAttribute('fill', '#1FCCA1');
            document.getElementById('feedback-text').setAttribute('fill', '#1FCCA1');
          } else if (type === 'feedback-negative') {
            container.style.backgroundColor = '#FEE9EB';
            document.getElementById('hint-icon').style.display = 'none';
            document.getElementById('hint-text').style.display = 'none';
            document.getElementById('feedback-icon').style.display = 'inline';
            document.getElementById('feedback-text').style.display = 'inline';
            document.getElementById('feedback-icon').setAttribute('fill', '#F22735');
            document.getElementById('feedback-text').setAttribute('fill', '#F22735');
          }
          onRenderSuccess();
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

      const MessageTypes = ['render_tex'];

      const checkIsValidArgument = (type) => {
        return MessageTypes.includes(type);
      };

      const handleMessage = ({ type, data }) => {
        if (!checkIsValidArgument(type)) return;

        try {
          if (type === 'render_tex') {
            renderLaTex(data);
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