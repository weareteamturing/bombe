import { isEmptyString } from '@teamturing/validators';
import katex from 'katex';
import { parse, NodeType, HTMLElement } from 'node-html-parser';

import { choiceSelector } from './internal/choiceSelector';
import { isNullable, isValidJSON } from './internal/is';

/**
 * [보기], [박스] 에 해당하는 div frame을 의미하는 html을 반환
 */
const injectTexToBoxFrame = (text: string, title = false) => {
  return `<div class="_cms_condition-box-frame ${
    title && '_cms_condition-box-frame-with-title'
  }"><div class="_cms_codition-box-title-row">${
    title ? '<span class="_cms_title-center">&lt;보기&gt;</span>' : ''
  }</div>${text}</div>`;
};

/**
 * [보기]와 [보기 끝]사이에 있는 문자열들을 추출해서 <보기> 제목이 있는 박스를 의미하는 div 안에 넣고 반환
 */
const convertConditionMarkToHTML = (text: string) => {
  // return text.replace(/\[보기\](.*?)\[보기 끝\]/gms, injectTexToBoxFrame('$1', true));
  return text.replace(/^\[보기\]$(\r?\n)(.*?)^\[보기 끝\]$/gms, injectTexToBoxFrame('$2', true));
};

/**
 * [박스]와 [박스 끝]사이에 있는 문자열들을 추출해서 박스를 의미하는 div 안에 넣고 반환
 */
const convertBoxMarkToHTML = (text: string) => {
  // return text.replace(/\[박스\](.*?)\[박스 끝\]/gms, injectTexToBoxFrame('$1', false));
  return text.replace(/^\[박스\]$(\r?\n)(.*?)^\[박스 끝\]$/gms, injectTexToBoxFrame('$2', false));
};

/**
 * [정답]에 해당하는 줄을 삭제하고 반환
 */
const excludeAnswerTagLine = (text: string) => {
  return text.replace(/(\[정답\] *-?\d+[ \n\r]?)/g, '');
};

/**
 * <img /> 뒤에 붙는 줄 바꿈을 하나 삭제한 뒤 반환
 */
const excludeNewLineFollowingImgTag = (text: string) => {
  return text.replace(/(<img.*?\/>)[\n\r]/g, '$1');
};

/**
 * \n을 <br/> 태그로 바꾸고 반환
 */
const convertNewLineToHTMLTag = (text: string) => {
  return text.replace(/\n/gm, () => '<br/>');
};

const getChoiceNumberSymbol = (choice: number) => {
  if (choice <= 0 || choice > 5) {
    return '';
  }
  return '①②③④⑤'[choice - 1];
};

const convertChoiceMarkToHTML = (text: string) => {
  const choices = choiceSelector(text);
  const choiceHtml = `<div class="_cms_choice-box">${choices
    .map(
      (c, choiceIndex) =>
        `<div class="_cms_choice"><span class="_cms_number-symbol">${getChoiceNumberSymbol(
          choiceIndex + 1,
        )}</span>${c}</div>`,
    )
    .join('')}</div>`;
  // must be function not just 'choiceHtml' itself
  return text.replace(/^\[선지\s*\d*\](\r?\n)?(.*)/gms, () => choiceHtml);
};

const convertIndentMarkToHTML = (text: string) => {
  return text.replace(/^\[들여쓰기(\d*)\]$(\r?\n)(.*?)^\[들여쓰기(\d*)끝\]$/gms, (match, p1, p2, p3, p4) => {
    return p1 === p4
      ? `<div class="_cms_indent-box" style="margin-left: ${1.3 * p1}rem; text-indent: -1.3rem">${p3}</div>`
      : match;
  });
};

// ex)
// [테이블]
// |{"rowSpan": 2} 성적(점) |{"colSpan": 2} 상대도수 |
// |  A반 |  B반  |
// |70 ~ 80|0.4|0.24|
// |80 ~ 90|0.44|0.32|
// |90 ~ 100|0.16|0.44|
// |합계|1|1|
// [테이블 끝]
type TableMetadata = Partial<{
  colSpan: number;
  rowSpan: number;
  bg: boolean;
}>;
/**
 * root-1. extract all [테이블]...[테이블 끝] texts and substitue for each table text
 *  table-1. split line as a row
 *    row-1. trim side cell separators
 *    row-2. split cells by spearators
 *      cell-1. process to KaTex HTML for each cell
 *      cell-2. wrap, decorate with table(td) cell css
 *    row-3. join cells
 *  table-2. join rows
 *  table-3. wrap, decorate with table(table) box css
 */
const convertTableMarkToHTML = (rootText: string) => {
  const cellSeparator = '|';
  return rootText.replace(/^\[테이블\]$(\r?\n)(.*?)^\[테이블 끝\]$/gms, (_, __, innerText) =>
    convertTableTextToHtml(innerText),
  );

  function convertTableTextToHtml(text: string) {
    const rowTexts = text.split('\n').slice(0, -1);
    return wrapIntoTableBox(rowTexts.map(convertRowTextToHtml).map(wrapIntoTableRow).join(''));
  }

  function convertRowTextToHtml(text: string) {
    if (isInvalidRowText(text)) return '';

    return renderToStringWithDollar(text.slice(1, text.length - 1))
      .split(cellSeparator)
      .map(decorateCellHtml)
      .join('');

    function isInvalidRowText(text: string) {
      return !(text.startsWith(cellSeparator) && text.endsWith(cellSeparator));
    }

    function decorateCellHtml(cellHtml: string) {
      const metadataRegex = /^{(.*?)}/g;
      const cell = cellHtml.replace(metadataRegex, '').replace(/(\r\n|\n|\r)/gm, '');

      return `<td class="_cms_table-cell" ${metadataToInlineAttributeString(parseMetadata(cellHtml))}">${cell}</td>`;

      function parseMetadata(cellText: string): TableMetadata {
        const metadataText = cellText.match(metadataRegex)?.[0];
        return !isNullable(metadataText) && isValidJSON(metadataText) ? JSON.parse(metadataText) : {};
      }

      function metadataToInlineAttributeString({ bg, colSpan, rowSpan }: TableMetadata) {
        let result = '';
        if (bg) {
          result += 'style="background-color: #F3F4F6"';
        }
        if (colSpan) {
          result += ` colspan="${colSpan}"`;
        }
        if (rowSpan) {
          result += ` rowspan="${rowSpan}"`;
        }
        return result;
      }
    }
  }

  function wrapIntoTableRow(html: string) {
    return `<tr class="_cms_table-row">${html}</tr>`;
  }

  function wrapIntoTableBox(html: string) {
    return `<table class="_cms_table-box">${html}</table>`;
  }
};

const renderToStringWithDollar = (text: string) => {
  let dollarMode = false;
  let startIndex = 0;
  let endIndex = 0;
  let resultHTML = '';
  let metDollar = false;

  for (let index = 0; index < text.length; index++) {
    const char = text[index];

    if (char === '$') {
      metDollar = true;
      if (!dollarMode) {
        endIndex = index;
        resultHTML += text.slice(startIndex, endIndex);
        startIndex = index;
        dollarMode = true;
      } else if (dollarMode) {
        endIndex = index;
        const targetString = text
          .slice(startIndex + 1, endIndex)
          .replace(/\n/g, '')
          .replace(/<br ?\/?>/g, '');
        try {
          const renderResult = katex.renderToString(targetString, {
            strict: 'ignore',
            throwOnError: false,
            errorColor: '#CF222E',
            trust: true,
            output: 'html',
            displayMode: false,
          });
          resultHTML += renderResult;
          startIndex = index + 1;
        } catch (error) {
          // resultAccu += targetString
        }
        dollarMode = false;
      }
    }
  }
  if (!metDollar) {
    return text;
  }

  resultHTML += text.slice(startIndex);

  return resultHTML;
};

/**
 * 결과 html을 class가 '_cms_content-frame'인 div에 넣고 반환
 */
const injectHtmlToContentFrame = (html: string) => {
  return `<div class="_cms_content-frame">${html}</div>`;
};

/**
 * html의 phantom box로 처리되어야 하는 Element들에 class를 추가한다.
 * Phantom Box를 활용하는 개념집을 렌더링하는 것이 아니라면 파이프라인에 포함하지 않는것이 성능에 유리하다.
 *
 * https://www.notion.so/teamturing2/Tex-Phantom-Box-8cd1e4dc61d1442080b136b811d61fab?pvs=4
 */

const injectPhantomBoxAnnotations = (html: string) => {
  const root = parse(html);
  const boxCandidates = root
    .querySelectorAll('.boxpad')
    .filter(
      (boxpad) => !boxpad.querySelector('.boxpad') && /style=".*color[:=]"?transparent"?.*"/g.test(boxpad.toString()),
    );
  if (boxCandidates.length === 0) {
    return html;
  }
  let isFailed = false;
  boxCandidates.forEach((box, index) => {
    // Set box attributes
    box.classList.add(`phantom-box-${index}`);
    box.classList.add('_cms_phantom_box');

    let dfsRoot = box;
    while (dfsRoot !== root && !dfsRoot.classList.contains('vlist')) {
      dfsRoot = dfsRoot.parentNode;
    }
    if (dfsRoot === root || !dfsRoot.classList.contains('vlist')) {
      isFailed = true;
      return;
    }
    const stack: HTMLElement[] = [];
    const borderCandidates: HTMLElement[] = [];
    stack.push(dfsRoot);
    while (stack.length) {
      const cur = stack[stack.length - 1];
      stack.pop();
      if (cur.classList.contains('stretchy') && cur.classList.contains('fbox')) {
        borderCandidates.push(cur);
      }
      cur.childNodes.forEach((child) => {
        if (child.nodeType === NodeType.ELEMENT_NODE && child instanceof HTMLElement) {
          stack.push(child);
        }
      });
    }
    if (borderCandidates.length !== 1) {
      isFailed = true;
    } else {
      borderCandidates[0].classList.add(`phantom-box-border-${index}`);
    }
  });
  if (isFailed) {
    return html;
  }
  return root.toString();
};

const convertMarkUpsToHTML = (tex: string) => {
  const markUpPairs: [RegExp, string][] = [
    [
      /\[OX해설\]/g,
      `<div style="margin-top: 56px"/>
  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.37109 4.09766H0.355469V2.7168H2.51562V1.1582H4.23828V2.7168H6.37109V4.09766ZM0.642578 7.61133C0.642578 7.04167 0.761068 6.53353 0.998047 6.08691C1.23503 5.6403 1.56087 5.29167 1.97559 5.04102C2.39486 4.78581 2.86654 4.6582 3.39062 4.6582C3.91471 4.6582 4.38411 4.78581 4.79883 5.04102C5.21354 5.29167 5.53711 5.6403 5.76953 6.08691C6.00651 6.53353 6.125 7.04167 6.125 7.61133C6.125 8.18099 6.00651 8.69141 5.76953 9.14258C5.53711 9.59375 5.21354 9.94694 4.79883 10.2021C4.38411 10.4528 3.91471 10.5781 3.39062 10.5781C2.86654 10.5781 2.39486 10.4528 1.97559 10.2021C1.56087 9.94694 1.23503 9.59375 0.998047 9.14258C0.761068 8.69141 0.642578 8.18099 0.642578 7.61133ZM2.17383 7.61133C2.17383 8.08073 2.2832 8.44759 2.50195 8.71191C2.72526 8.97168 3.02148 9.10156 3.39062 9.10156C3.74609 9.10156 4.0332 8.9694 4.25195 8.70508C4.47526 8.44076 4.58919 8.07617 4.59375 7.61133C4.59375 7.30599 4.54134 7.03939 4.43652 6.81152C4.33171 6.58366 4.18815 6.41048 4.00586 6.29199C3.82812 6.16895 3.62305 6.10742 3.39062 6.10742C3.02604 6.10742 2.7321 6.24186 2.50879 6.51074C2.28548 6.77962 2.17383 7.14648 2.17383 7.61133ZM6.83594 1.0625H8.46289V5.875H9.47461V0.816406H11.1289V13.2578H9.47461V7.26953H8.46289V12.7246H6.83594V1.0625ZM22.9551 7.14648H21.2188V4.05664H18.8809V2.67578H21.2188V0.816406H22.9551V7.14648ZM12.373 5.86133C13.0384 5.66536 13.5944 5.37826 14.041 5C14.4876 4.62174 14.818 4.18652 15.0322 3.69434C15.251 3.20215 15.3626 2.68034 15.3672 2.12891V1.22656H17.1309V2.12891C17.1263 2.63932 17.2266 3.12695 17.4316 3.5918C17.6367 4.05208 17.9512 4.46224 18.375 4.82227C18.8034 5.17773 19.3366 5.45117 19.9746 5.64258L19.0586 6.98242C18.4069 6.77734 17.8464 6.47656 17.377 6.08008C16.9076 5.67904 16.5339 5.20508 16.2559 4.6582C15.9733 5.27344 15.5837 5.80208 15.0869 6.24414C14.5902 6.6862 13.9863 7.01888 13.2754 7.24219L12.373 5.86133ZM14.6836 7.66602H22.9551V10.9883H16.4199V11.7539H23.3105V13.1211H14.6973V9.7168H21.2324V9.00586H14.6836V7.66602Z" fill="#8D94A0"/>
    </svg><br/>`,
    ],
    [
      /\[OX개념팁\]/g,
      `<div style="margin-top: 32px"/>
    <svg width="49" height="14" viewBox="0 0 49 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1016 0.652588H9.41992V5.36938H8.28516V0.980713H6.6582V12.5471H8.28516V6.76392H9.41992V13.094H11.1016V0.652588ZM0.21875 9.33423L1.23047 10.5374C4.7373 8.50024 5.77637 5.65649 5.7832 2.18384H0.847656V3.57837H4.08105C3.84863 6.0188 2.75488 7.84399 0.21875 9.33423ZM14.9434 1.18579H13.1797V7.62524H14.1777C16.0918 7.63208 17.6709 7.55688 19.4277 7.24243L19.25 5.87524C17.7803 6.10083 16.4473 6.1897 14.9434 6.21021V1.18579ZM14.6699 12.9573H22.9551V8.43188H14.6699V12.9573ZM16.3789 11.5627V9.81274H21.2324V11.5627H16.3789ZM18.1699 5.27368H21.2188V7.92603H22.9551V0.652588H21.2188V1.80103H18.1699V3.09985H21.2188V3.96118H18.1699V5.27368ZM27.877 3.63306H30.9121V11.8362H32.9492V3.63306H35.9844V1.93774H27.877V3.63306ZM39.3066 1.93774H37.2559V11.8362H39.3066V1.93774ZM40.9746 11.8362H43.0254V8.60962H44.8027C47.0859 8.60962 48.3984 7.24927 48.3984 5.27368C48.3984 3.32544 47.1064 1.93774 44.8574 1.93774H40.9746V11.8362ZM43.0254 6.95532V3.61938H44.4746C45.6914 3.62622 46.2861 4.28931 46.2793 5.27368C46.2861 6.27173 45.6914 6.95532 44.4746 6.95532H43.0254Z" fill="#8D94A0"/>
</svg><br/>`,
    ],
  ];

  for (let i = 0; i < markUpPairs.length; i++) {
    tex = tex.replace(markUpPairs[i][0], markUpPairs[i][1]);
  }

  return tex;
};

export function formatKatexToHtmlString(
  tex: string,
  { convertMarkUp, convertPhantomBox }: { convertMarkUp?: boolean; convertPhantomBox?: boolean } = {
    convertMarkUp: false,
    convertPhantomBox: false,
  },
): string {
  if (!tex || isEmptyString(tex)) return '';
  const dummyTransform = (str: string) => str;

  const markUpTransform = convertMarkUp ? convertMarkUpsToHTML : dummyTransform;
  const phantomBoxTransform = convertPhantomBox ? injectPhantomBoxAnnotations : dummyTransform;

  return injectHtmlToContentFrame(
    phantomBoxTransform(
      // 이 때를 기점으로 파이프라인 이전 부분은 tex를 다루고(하지만 마크업처럼 미리 html화 된 것들도 있다.)
      // 위 부분은 html을 다루므로 성능상 유의가 필요하다.
      renderToStringWithDollar(
        markUpTransform(
          convertNewLineToHTMLTag(
            excludeNewLineFollowingImgTag(
              convertTableMarkToHTML(
                convertIndentMarkToHTML(
                  excludeAnswerTagLine(convertChoiceMarkToHTML(convertConditionMarkToHTML(convertBoxMarkToHTML(tex)))),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}
