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

1. `all.json`에 있는 json 형식대로 DB에서 문제들의 정보를 조회하여 json파일 형식으로 준비한다.

```sql
select id,
       sequence as task_id,
       problem_tex,
       solution_tex
from problems_problem p
where problem_tex != ''
order by id asc
limit 1000000;
```

2. `check:tex`를 실행시켜 `result.json`의 결과를 확인한다.