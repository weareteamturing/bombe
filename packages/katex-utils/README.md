# `@teamturing/katex-utils`

## KaTeX버전과 수학대왕

현재 버전은 `0.16.9` 를 사용 중이고, `@teamturing/katex-utils` 의 `dependencies` 에 존재한다.

`MathKing` 프로젝트가 이 패키지를 참조하는 부분은 두 가지이다.

1. HTML 파일들(TexFeedbackHtml.html까지 두 군데이다.)

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@teamturing/katex-utils@{{version}}/iife/mathking-katex.css"
  crossorigin="anonymous"
/>
```

2. NPM 의존성

```json
"dependencies": {
  "@teamturing/katex-utils": "{{version}}",
  ...
}
```

따라서 MathKing 프로젝트엔 KaTex자체에 대한 의존성은 없고 `@teamturing/katex-utils` 에만 의존성이 있다.

단, MathKing 프로젝트에선 위 두 가지(총 3개의 파일) 종류의 버전을 모두 맞춰주어야 한다.

- `src/feature/problemsolve/presentation/widget/LaTex/html/LaTexHtml.html`
- `src/feature/problemsolve/presentation/widget/LaTex/html/TexFeedbackHtml.html`
- `package.json`

위 Html 파일들을 변경하고 난 뒤엔 `yarn generate-html` 커맨드를 MathKing에서 실행시켜주어야 한다.

## KaTeX버전을 변경할 때 유의점 & Tex 전수 조사법

웬만한 일이 없다면 바꾸지 않는 것을 추천한다.

바꿔야 한다면 현재 문제들 중 TeX가 깨지는 것이 없는지 전수조사를 한 후에 진행한다.

`check:tex` 커맨드가 그것을 도와줄 것이다.

1. `lerna run build` 로 프로젝트를 빌드하여 `packages/katex-utils/dist` 에 현재 소스코드로 빌드된 결과물을 준비시킨다.

2. `tool/problem_check`에 `problems.json`을 준비한다. `problems.json`에 있는 json 형식대로 DB에서 문제들의 정보를 조회하여 json파일 형식으로 준비한다.

```sql
select id,
       sequence as task_id,
       problem_tex,
       solution_tex,
       answer,
       answer_type
from problems_problem p
where problem_tex != ''
order by id asc
limit 1000000;
```

3. `check:tex`를 실행시켜 `result.json`의 결과를 확인한다.

4. 몇 가지 검사들(특히 이미지 유효성 검사)은 시간이 오래걸리기 때문에, 다음과 같은 코드에서 검사하지 않을 항목들을 `false`로 변경한 뒤 진행한다.

```js
const CHECK_IMAGE_DOWNLOADABLE = true;
const CHECK_TEX_SYNTAX = true;
```

5. jest test도 실행시켜준다. snapshot이 검사된다.