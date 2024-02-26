# `@teamturing/katex-utils`

## KaTeX버전과 수학대왕

현재 버전은 `0.16.9` 를 사용 중이고, `@teamturing/katex-utils` 의 `dependencies` 에 존재한다.

`MathKing` 프로젝트의 Html 파일들에서는 다음과 같이 이 프로젝트의 공통 CSS를 참조한다.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@teamturing/katex-utils@2.12.0/iife/mathking-katex.css"
  crossorigin="anonymous"
/>
```

따라서 MathKing 프로젝트엔 KaTex자체에 대한 의존성은 없고 `@teamturing/katex-utils` 에만 의존성이 있다.

## KaTeX버전을 변경할 때 유의점 & Tex 전수 조사법

웬만한 일이 없다면 바꾸지 않는 것을 추천한다.

바꿔야 한다면 현재 문제들 중 TeX가 깨지는 것이 없는지 전수조사를 한 후에 진행한다.

`check:tex` 커맨드가 그것을 도와줄 것이다.

1. `lerna run build` 로 프로젝트를 빌드하여 `packages/katex-utils/dist` 에 현재 소스코드로 빌드된 결과물을 준비시킨다.

2. tool/data에 `all.json`을 준비한다. `all.json`에 있는 json 형식대로 DB에서 문제들의 정보를 조회하여 json파일 형식으로 준비한다.

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