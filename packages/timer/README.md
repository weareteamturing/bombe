# `timer`

## Usage

### `SecondsFormatter`

초 단위로 비즈니스에서 사용하는 여러 형태로 Formatting을 해주는 유틸입니다.

여러 형태는 `enum`으로 관리하며 `SecondFormats` 이란 이름입니다.

| name                    | type                                | description                  |
| ----------------------- | ----------------------------------- | ---------------------------- |
| `get`                   | `(SecondFormats) => Formatter`      | 타입에 맞는 Formatter를 반환 |
| `format`                | `(number, SecondFormats) => string` | 타입에 맞게 초를 포매팅      |
| `invalidateIntervalSec` | `number`                            | 각 포맷의 UI에서 다시 그려져야 하는 최소 interval(초)를 반환                             |

### `DueDateText`

리액트 컴포넌트이며 현재 시점부터 미래의 시점까지 남은 시간을 여러 포맷을 이용해 동적으로 변화시키며 보여줄 때 유용합니다.

| name            | type                                                  | description                                                        | default    |
| --------------- | ----------------------------------------------------- | ------------------------------------------------------------------ | ---------- |
| `dueDate`       | `string`                                              | ISO8601 형태의 미래 시각을 의미하는 문자열                         |            |
| `secondsFormat` | `SecondFormats?`                                      |                                                                    | `due_date` |
| `children`      | `(result: string, remainSec: number) => ReactElement` | 포매팅된 시간 문자열을 인자로 전달받아 렌더링 하는 함수            |            |
| `formatResult`  | `(string) => string`                                  | 포매팅된 시간 문자열을 한 번 더 변환, e.g.) `str => str + ' 남음'` | `(text) => text`           |

