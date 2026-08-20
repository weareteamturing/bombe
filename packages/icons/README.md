# `@teamturing/icons`

React 프로젝트용 아이콘 컴포넌트. 세 갈래로 나뉜다.

| 엔트리 | 내용 | 형태 | 앞으로 |
| --- | --- | --- | --- |
| `@teamturing/icons` | 디자이너가 만든 자사 아이콘 291개 | `fill="currentColor"` | **동결** |
| `@teamturing/icons/lucide` | [lucide](https://lucide.dev) 1769개 | `stroke="currentColor"`, `stroke-width="2"` | 업스트림 버전 업 |
| `@teamturing/icons/gpai` | GPAI 전용 아이콘 | 원본에 따름 | 신규 추가 |

```tsx
import { SearchIcon } from '@teamturing/icons';
import { SearchIcon as LucideSearchIcon } from '@teamturing/icons/lucide';
```

세 갈래 다 `Icon` 접미사를 쓴다. 자사와 lucide에 같은 개념이 다 있는 것이 72개라
(`CalendarIcon`, `ArrowDownIcon` 등) 한 파일에서 함께 쓸 때는 별칭이 필요하다.
별칭을 써도 번들에는 아무것도 더해지지 않는다. 나머지 1697개는 그대로 가져다 쓰면 된다.

lucide 이름은 공식 문서의 이름에 접미사만 붙인 형태다. `search` → `SearchIcon`,
`trash-2` → `Trash2Icon`.

엔트리끼리는 서로를 참조하지 않는다. 자사 아이콘만 쓰는 앱의 번들에는 lucide 코드가
한 바이트도 들어가지 않는다.

## 새 아이콘을 어디에 넣나

```
필요한 아이콘이 lucide에 있나?
├─ 있다        →  @teamturing/icons/lucide 에서 가져다 쓴다. 추가 작업 없음
└─ 없다
   ├─ 범용 아이콘이다  →  lucide-static 버전을 올려 본다 (yarn svgr:lucide)
   └─ GPAI 전용이다    →  svg/gpai/ 에 넣는다 (yarn svgr)
```

루트 `svg/`의 291개는 **동결**이다. 새 아이콘을 그쪽에 넣지 않는다. 기존 아이콘의 형태를
고치는 것은 되지만, 목록이 늘어나지는 않는다.

`gpai`는 브랜드 네임스페이스다. `packages/token-studio`가 색을 `gpai`/`aisaac`으로 나누는 것과
같은 구분이고, 아이콘도 같은 축을 따른다.

## 버전

`2.0.0`부터 lucide가 포함된다. 코드 상으로 깨지는 변경은 없으므로 `1.x`에서 올라올 때
고칠 것은 없다. 자사 아이콘만 쓰던 앱은 import를 그대로 두면 되고, 번들도 그대로다
(두 엔트리가 서로를 참조하지 않는다).

메이저를 올린 것은 패키지의 성격이 달라졌다는 신호다. 291개짜리 자사 전용 패키지에서
2060개짜리 두 갈래 패키지가 됐고, 앞으로 lucide 업스트림의 아이콘 제거·개명이
이 패키지의 메이저 사유가 된다.

## 하지 말 것 — 네임스페이스 import

```tsx
// ✅ 아이콘 하나당 1KB 남짓
import { SearchIcon } from '@teamturing/icons/lucide';

// ❌ 1.07MB — lucide 전체가 번들에 들어간다
import * as Lucide from '@teamturing/icons/lucide';
const Icon = Lucide[iconName];
```

번들러는 어떤 키가 쓰일지 정적으로 알 수 없으면 전부 남길 수밖에 없다. 이름을 런타임에
정해야 한다면 네임스페이스 대신 필요한 아이콘만 담은 맵을 직접 만든다.

```tsx
import { SearchIcon, SettingsIcon, Trash2Icon } from '@teamturing/icons/lucide';

const ICONS = { search: SearchIcon, settings: SettingsIcon, trash: Trash2Icon };
const Icon = ICONS[iconName];
```

## lucide의 선 두께

lucide의 `stroke-width="2"`는 **24px로 그렸을 때** 기준이다. 16px나 20px로 줄이면 선도 같은
비율로 얇아져 자사 아이콘 옆에서 흐리게 보인다. 필요하면 `strokeWidth`로 보정한다.

```tsx
<SearchIcon width={16} height={16} strokeWidth={3} />
```

react-kit을 쓴다면 `StyledIcon`의 `strokeWidth` prop이 같은 일을 한다.

## 라이선스

이 패키지의 코드는 MIT다. `@teamturing/icons/lucide`의 아이콘은 [lucide](https://lucide.dev)에서
파생된 것으로 **ISC**를 따르고, 그중 `search`·`check`·`calendar`처럼 Feather 프로젝트에서
파생된 약 110개는 별도의 **MIT**(Copyright (c) 2013-present Cole Bemis)를 따른다.

두 라이선스 모두 저작권 표시와 허가 문구를 사본에 유지할 것을 조건으로 한다. 그래서
`THIRD-PARTY-NOTICES.md`에 전문을 싣고, 빌드 산출물의 lucide 모듈마다 `@license` 배너를 붙인다.
배너를 엔트리에만 붙이면 트리셰이킹이 배럴을 걷어낼 때 표시도 함께 사라지므로,
상류인 `lucide-react`와 마찬가지로 아이콘 파일마다 붙인다.

자사 아이콘 쪽에는 붙지 않는다. lucide를 쓰지 않는 번들에 lucide 표시가 들어가면
그것대로 잘못된 출처 표시이기 때문이다.

## 아이콘 추가·갱신

```bash
yarn svgr         # svg/ 와 svg/gpai/ → src/ 와 src/gpai/
yarn svgr:lucide  # lucide-static → src/lucide/
```

SVGR은 `svg/` 아래 폴더 구조를 그대로 보존하고 **폴더마다 `index.ts`를 따로 생성**한다.
그래서 gpai 아이콘은 `svg/gpai/`에 넣기만 하면 되고, 명령은 기존 `yarn svgr` 그대로다.
루트 `src/index.ts`는 하위 폴더의 아이콘을 끌어오지 않으므로 두 엔트리가 섞이지 않는다.

`src/`·`src/gpai/`·`src/lucide/`의 `.tsx`는 **생성물이지만 커밋한다.** 빌드가 생성 단계에
의존하지 않아 CI에서 결과가 갈리지 않고, 릴리스에 실제로 무엇이 들어가는지 PR에서 보인다.

`yarn svgr` 끝에 `verify-icons.mjs`가 돌아 대소문자 충돌·`viewBox` 유실·`Icon` 접미사·
index와 파일 불일치를 검사한다. gpai 아이콘에 색이 하드코딩돼 있으면 경고를 남긴다
(`color`를 상속하지 못한다 — 다만 여러 색으로 그려진 아이콘이면 정상이므로 실패시키지는 않는다).

lucide **원본 svg만은 커밋하지 않는다.** lucide의 `search.svg`가 디자이너의 `search.svg`와
이름이 겹치는 데다, 1769개를 리포에 넣을 이유도 없다. `lucide-static` 의존성에서 그때그때 읽어
`.lucide-svg/`(gitignore)에 모은 뒤 변환한다.

lucide 버전을 올릴 때는 `yarn svgr:lucide`를 다시 돌린다. 마지막의 `verify-lucide.mjs`가
개수·export 이름 중복·대소문자 충돌·`viewBox` 유실을 검사하고 어긋나면 빌드를 멈춘다.
업스트림에서 아이콘이 제거되거나 이름이 바뀌면 breaking change이므로 `feat(icons)!`로 커밋한다.

### 브랜드 폴더를 더 만들려면

`aisaac` 등을 추가할 때는 `svg/aisaac/`를 만들고 세 곳에 한 줄씩 더하면 된다.

- `package.json` — `exports`의 `./aisaac`, `typesVersions`의 `aisaac`
- `rollup.config.js` — `entry('src/aisaac/index.ts', 'dist/aisaac')`
- `tsconfig.esm.json` — `files`에 `./src/aisaac/index.ts`

`scripts/verify-icons.mjs`의 `TARGETS`에도 추가한다. SVGR·`gen_icon.sh` 쪽은 손댈 것이 없다.
