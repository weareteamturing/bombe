/**
 * 결과 html을 class가 '_cms_content-frame'인 div에 넣고 반환
 */
export const injectHtmlToContentFrame = (html: string) => {
  return `<div class="_cms_content-frame">${html}</div>`;
};
