import { formatKatexToHtmlStringWithOptions, formatKatexToHtmlString } from './formatKatexToHtmlString';

const sampleFormulaSection = String.raw`[들여쓰기1]
$(1)$ 다항식의 정리 방법
[들여쓰기1끝]
[들여쓰기2]
① $\boxed{\phantom{내림차순}}$ : 다항식을 한 문자에 대하여 차수가 높은 항부터 낮은 항의 순서로 나타내는 것
[들여쓰기2끝]
[들여쓰기2]
② $\boxed{\phantom{오름차순}}$ : 다항식을 한 문자에 대하여 차수가 낮은 항부터 높은 항의 순서로 나타내는 것
[들여쓰기2끝]
[들여쓰기2]
$\char128161$ 다항식을 한 문자에 대하여 내림차순이나 오름차순으로 정리할 때, 기준이 되는 문자를 제외한 나머지 문자는 상수로 생각한다.
[들여쓰기2끝]
[들여쓰기1]
$(2)$ 다항식의 덧셈과 뺄셈
① 덧셈 : 동류항끼리 모아서 정리한다.
② 뺄셈 : 빼는 식의 각 항의 $\boxed{\phantom{부호}}$를 바꾸어 더한다.
[들여쓰기1끝]
[들여쓰기1]
$(3)$ 다항식의 덧셈에 대한 성질
세 다항식 $A,\ B,\ C$에 대하여
① $\boxed{\phantom{교환법칙}}$ $A+B=B+A$
② $\boxed{\phantom{결합법칙}}$ $(A+B)+C=A+(B+C)$
[들여쓰기1끝]`;

const sampleFormulaSectionWithTable =
  '[들여쓰기1]\n' +
  '$(1)$ 이차방정식과 이차함수의 관계\n' +
  '이차함수 $y=ax^{2}+bx+c$의 그래프와 $x$축의 교점의 $x$좌표는 이차방정식 $ax^{2}+bx+c=0$의 $\\boxed{\\phantom{실근}}$과 같다.\n' +
  '[들여쓰기1끝]\n' +
  '[들여쓰기2]\n' +
  '${\\char128161}$ 이차함수 $y=ax^{2}+bx+c$의 그래프와 $x$축의 교점의 개수는 이차방정식 $ax^{2}+bx+c=0$의 $\\boxed{\\phantom{서로\\ 다른\\ 실근의\\ 개수}}$와 같다.\n' +
  '[들여쓰기2끝]\n' +
  '[들여쓰기1]\n' +
  '$(2)$ 이차함수의 그래프와 이차방정식의 해\n' +
  '$f(x)=ax^{2}+bx+c\\ (a\\ne0)$에 대하여 이차함수 $y=f(x)$의 그래프와 이차방정식 $f(x)=0$의 해 사이에는 판별식 $D$의 부호에 따라 다음과 같은 관계가 성립한다.\n' +
  '[들여쓰기1끝]\n' +
  '[테이블]\n' +
  '|{"colSpan" : 2, "bg": true}$\\bm{f(x)=0의}\\\\{\\bm{판별식\\ D}}$|{"bg": true}$\\bm{D>0}$|{"bg": true}$\\bm{\\boxed{\\phantom{D=0}}}$|{"bg":true}$\\bm{D<0}$|\n' +
  '|{"colSpan" : 2, "bg": true}$\\bm{f(x)=0{의\\ 해}}$|$서로\\ 다른\\ \\\\두\\ 실근$|중근|$서로\\ 다른\\ \\\\두\\ 허근$|\n' +
  '|{"rowSpan" : 3,"bg": true}$\\bm{y=f(x)}\\\\{\\bm{의\\ 그래프}}$|{"bg": true}$\\bm{x{축과의}}\\\\\\bm{교점의}\\\\\\bm{개수}$|$\\boxed{\\phantom{2}}$|$1$|$0$|\n' +
  '|{"bg": true}$\\bm{a>0}$|<img src="https://cdn.teamturing.com/cms/1672887627_icabangjeongsiggwa-icahamsuyi-gwangye-1.PNG" />|<img src="https://cdn.teamturing.com/cms/1672887638_icabangjeongsiggwa-icahamsuyi-gwangye-2.PNG" />|<img src="https://cdn.teamturing.com/cms/1672887644_icabangjeongsiggwa-icahamsuyi-gwangye-3.PNG" />|\n' +
  '|{"bg": true}$\\bm{a<0}$|<img src="https://cdn.teamturing.com/cms/1672887654_icabangjeongsiggwa-icahamsuyi-gwangye-4.PNG" />|<img src="https://cdn.teamturing.com/cms/1672887660_icabangjeongsiggwa-icahamsuyi-gwangye-5.PNG" />|<img src="https://cdn.teamturing.com/cms/1672887666_icabangjeongsiggwa-icahamsuyi-gwangye-6.PNG" />|\n' +
  '[테이블 끝]';

const sampleFormualSection2 = String.raw`[들여쓰기2]
<img src="https://cdn.teamturing.com/cms/1672811973_image.png" />
[들여쓰기2끝]`;

const sampleFormulaPage = String.raw`
[개념집대제목]Title$a+b=c$Title[개념집대제목끝]
[개념집소제목]소제목소제목[개념집소제목끝]
[공백]12[공백끝]
${sampleFormulaSection}
[공백]40[공백끝]
[개념집소제목]소제목소제목[개념집소제목끝]
[공백]12[공백끝]
${sampleFormulaSectionWithTable}
[공백]40[공백끝]
[개념집소제목]소제목소제목[개념집소제목끝]
[공백]12[공백끝]
${sampleFormualSection2}
`;

const sampleChoice = String.raw`$0$이 아닌 두 실수 $a,\ b$에 대하여 $\sqrt{a} \sqrt{b}=-\sqrt{a b}$일 때, $\sqrt{(a+b)^{2}}+3|a|-\sqrt{a^{2}}+\sqrt{b^{2}}$을 간단히 하면$?$
[선지]
1. $-3a-2b$
2. $-a+2b$
3. $a-2b$
4. $a+2b$
5. $3a$`;

const sampleBox = String.raw`함수 $f(x)$의 도함수가 $f'(x)=x e^{-x^{2}}$이다. 모든 실수 $x$에 대하여 두  함수 $f(x),\ g(x)$가 다음 조건을 만족시킬 때, <보기>에서 옳은 것만을 있는 대로 고른 것은$?$
[박스]
$(가)\ g(x)=\displaystyle\int_{1}^{x} f'(t)(x+1-t) d t$
$(나)\ f(x)=g'(x)-f'(x)$
[박스 끝]
[보기]
ㄱ. $g'(1)=\displaystyle\frac{1}{e}$
ㄴ. $f(1)=g(1)$
ㄷ. 어떤 양수 $x$에 대하여 $g(x)<f(x)$이다.
[보기 끝]
[선지]
1. ㄱ
2. ㄱ, ㄴ
3. ㄱ, ㄷ
4. ㄴ, ㄷ
5. ㄱ, ㄴ, ㄷ`;

const sampleImage = String.raw`좌표평면에서 곡선 $y= \sin x$ 위의 점 $\mathrm{P}(t,\ \sin t)\ (0<t<\pi)$를 중심으로 하고 $x$축에 접하는 원을 $C$라 하자. 원 $C$가 $x$축에 접하는 점을 $\mathrm{Q}$, 선분 $\mathrm{OP}$와 만나는 점을 $\mathrm{R}$라 하자. $\displaystyle \lim _{t \rightarrow 0+} \frac{\overline{\mathrm{OQ}}}{\overline{\mathrm{OR}}}=a+b \sqrt{2}$일 때, $a+b$의 값을 구하시오. $($단, $\mathrm{O}$는 원점이고, $a,\ b$는 정수이다.$)$
<img data-group-id="1075" data-set-id="1075" src="https://cdn.teamturing.com/cms/problem_images/2020-07-21/GW740O_p_pic1_revise.jpg" />`;

describe('일반', () => {
  it('줄바꿈이 <br/>로 치환된다', () => {
    const tex = '\n';
    const result = formatKatexToHtmlString(tex);
    expect(result).toBe(String.raw`<div class="_cms_content-frame"><br/></div>`);
  });

  it('객관식의 선지가 제대로 파싱된다', () => {
    const result = formatKatexToHtmlStringWithOptions(sampleChoice);
    expect(result).not.toContain('[선지]');
    expect(result).toMatchSnapshot();
  });

  it('[박스], [보기]가 제대로 변환된다', () => {
    expect(sampleBox).toContain('[박스]');
    const result = formatKatexToHtmlString(sampleBox);

    expect(result).not.toContain('[박스]');

    expect(result).toContain('_cms_condition-box-frame');
    expect(result).toContain('_cms_condition-box-frame-with-title');
    expect(result).toContain('_cms_title-center');
    expect(result).toMatchSnapshot();
  });

  it('이미지가 결과에서 보전된다', () => {
    expect(sampleImage).toContain(String.raw`<img`);

    // ok, var name has confusion right?
    const resultWithOptions = formatKatexToHtmlString(sampleImage);
    const resultWithoutOptions = formatKatexToHtmlStringWithOptions(sampleImage);

    expect(resultWithOptions).toContain(
      String.raw`<img data-group-id="1075" data-set-id="1075" src="https://cdn.teamturing.com/cms/problem_images/2020-07-21/GW740O_p_pic1_revise.jpg" />`,
    );
    expect(resultWithoutOptions).toContain(
      String.raw`<img data-group-id="1075" data-set-id="1075" src="https://cdn.teamturing.com/cms/problem_images/2020-07-21/GW740O_p_pic1_revise.jpg" />`,
    );

    expect(resultWithOptions).toMatchSnapshot();
  });
});

// katex 버전 변경시 알아채기 위해
describe('수식 렌더링', () => {
  it('기본 수식', () => {
    const tex = String.raw`$a^2+b^2=c^2$`;
    const result = formatKatexToHtmlString(tex);
    expect(result).toMatchSnapshot();
  });
});

describe('개념집', () => {
  it('개념집에서 injectPhantomBoxClasses를 전달하면 해당하는 class들이 제대로 삽입된다', () => {
    const resultWithoutInjection = formatKatexToHtmlStringWithOptions(sampleFormulaSection, {
      convertMarkUp: true,
      injectPhantomBoxClasses: false,
    });
    expect(resultWithoutInjection).not.toContain('phantom-box-0');
    expect(resultWithoutInjection).not.toContain('phantom-box-border-0');

    const resultWithInjection = formatKatexToHtmlStringWithOptions(sampleFormulaSection, {
      convertMarkUp: true,
      injectPhantomBoxClasses: true,
    });
    expect(resultWithInjection).toContain('phantom-box-0');
    expect(resultWithInjection).toContain('phantom-box-border-0');

    expect(resultWithInjection).toMatchSnapshot();
    expect(resultWithoutInjection).toMatchSnapshot();
  });

  it('들여쓰기가 제대로 작동한다', () => {
    const result = formatKatexToHtmlStringWithOptions(sampleFormulaPage, {
      injectPhantomBoxClasses: true,
      convertMarkUp: true,
    });

    expect(result).not.toContain('들여쓰기');
    expect(result).toContain('<div class="_cms_indent-box" style="margin-left:');
    expect(result).toMatchSnapshot();
  });

  it('이미지 태그 바로 뒤에 [들여쓰기n끝]이 나오는 경우에도 들여쓰기가 정상작동한다', () => {
    const result = formatKatexToHtmlStringWithOptions(sampleFormualSection2, {
      injectPhantomBoxClasses: true,
      convertMarkUp: true,
    });

    expect(result).not.toContain('들여쓰기');
    expect(result).toContain('<div class="_cms_indent-box" style="margin-left:');
    expect(result).toMatchSnapshot();
  });

  it('테이블이 제대로 변환된다', () => {
    const result = formatKatexToHtmlStringWithOptions(sampleFormulaPage, {
      injectPhantomBoxClasses: true,
      convertMarkUp: true,
      convertTable: true,
    });

    expect(result).not.toContain('[테이블]');
    expect(result).not.toContain('[테이블 끝]');
    expect(result).not.toContain('colSpan');
    expect(result).not.toContain('rowSpan');
    expect(result).not.toContain('|');
    expect(result).not.toContain('bg');
    expect(result).toContain('<td class="_cms_table-cell"');
    expect(result).toContain('style="background-color: #F3F4F6"');
    expect(result).toContain('colspan');
    expect(result).toContain('rowspan');

    // expect(result).toMatchSnapshot();
  });
});
