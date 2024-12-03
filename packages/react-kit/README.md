# `@teamturing/react-kit`

튜링 내에서 웹 애플리케이션을 만들 때 필요한 리액트의 핵심 컴포넌트, 훅을 모아둔 패키지입니다.

## 설치

```bash
yarn add @teamturing/react-kit styled-components styled-system @emotion/is-prop-valid
```

## 시작하기

```jsx
<StyleSheetManager shouldForwardProp={isPropValid}>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</StyleSheetManager>
```

[Pretendard](https://github.com/orioncactus/pretendard) 폰트와 사용하는 것을 추천합니다.
