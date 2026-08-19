# `@teamturing/icons`

React 프로젝트용 아이콘 컴포넌트. 두 갈래로 나뉜다.

| 엔트리 | 내용 | 형태 |
| --- | --- | --- |
| `@teamturing/icons` | 디자이너가 만든 자사 아이콘 291개 | `fill="currentColor"` |
| `@teamturing/icons/lucide` | [lucide](https://lucide.dev) 1769개 | `stroke="currentColor"`, `stroke-width="2"` |

```tsx
import { SearchIcon } from '@teamturing/icons';
import { Search } from '@teamturing/icons/lucide';
```

자사 아이콘은 이름 끝에 `Icon`이 붙고 lucide는 붙지 않는다. 같은 개념의 아이콘을 양쪽에서
가져와도 이름이 겹치지 않으며, lucide 쪽은 공식 문서의 이름을 그대로 쓴다.

두 엔트리는 서로를 참조하지 않는다. 자사 아이콘만 쓰는 앱의 번들에는 lucide 코드가
한 바이트도 들어가지 않는다.

## 하지 말 것 — 네임스페이스 import

```tsx
// ✅ 아이콘 하나당 1KB 남짓
import { Search } from '@teamturing/icons/lucide';

// ❌ 1.07MB — lucide 전체가 번들에 들어간다
import * as Lucide from '@teamturing/icons/lucide';
const Icon = Lucide[iconName];
```

번들러는 어떤 키가 쓰일지 정적으로 알 수 없으면 전부 남길 수밖에 없다. 이름을 런타임에
정해야 한다면 네임스페이스 대신 필요한 아이콘만 담은 맵을 직접 만든다.

```tsx
import { Search, Settings, Trash2 } from '@teamturing/icons/lucide';

const ICONS = { search: Search, settings: Settings, trash: Trash2 };
const Icon = ICONS[iconName];
```

## lucide의 선 두께

lucide의 `stroke-width="2"`는 **24px로 그렸을 때** 기준이다. 16px나 20px로 줄이면 선도 같은
비율로 얇아져 자사 아이콘 옆에서 흐리게 보인다. 필요하면 `strokeWidth`로 보정한다.

```tsx
<Search width={16} height={16} strokeWidth={3} />
```

react-kit을 쓴다면 `StyledIcon`의 `strokeWidth` prop이 같은 일을 한다.

## 아이콘 추가·갱신

```bash
yarn svgr         # svg/ 의 자사 아이콘 → src/
yarn svgr:lucide  # lucide-static → src/lucide/
```

`src/`와 `src/lucide/`의 `.tsx`는 **생성물이지만 커밋한다.** 빌드가 생성 단계에 의존하지 않아
CI에서 결과가 갈리지 않고, 릴리스에 실제로 무엇이 들어가는지 PR에서 보인다.

lucide **원본 svg는 커밋하지 않는다.** `svg/`에 하위 폴더가 생기면
`packages/react-native-kit/script/gen_icon.sh`가 그 안의 파일을 `svg/` 바로 아래로 옮기고
폴더를 지우는데, 그 과정에서 lucide의 `search.svg`가 디자이너의 `search.svg`를 덮어쓴다.
그래서 원본은 `lucide-static` 의존성에서 그때그때 읽어 `.lucide-svg/`(gitignore)에 모은 뒤 변환한다.

lucide 버전을 올릴 때는 `yarn svgr:lucide`를 다시 돌린다. 마지막의 `verify-lucide.mjs`가
개수·export 이름 중복·대소문자 충돌·`viewBox` 유실을 검사하고 어긋나면 빌드를 멈춘다.
업스트림에서 아이콘이 제거되거나 이름이 바뀌면 breaking change이므로 `feat(icons)!`로 커밋한다.
