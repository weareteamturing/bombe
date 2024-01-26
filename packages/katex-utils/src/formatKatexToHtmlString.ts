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

// const formatKatexToHtmlString = (text: string, options?: KatexOptions) =>
//   katex.renderToString(text, { throwOnError: false, errorColor: 'red', ...options });

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

export function formatKatexToHtmlString(tex: string): string {
  return injectHtmlToContentFrame(
    injectPhantomBoxAnnotations(
      renderToStringWithDollar(
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
  );
}
