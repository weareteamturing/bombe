import { valid, parse } from 'node-html-parser';

import { isNotEmptyString } from '../internal/is';

export function excludeRootContentFrameClassCSSFromHtml(html: string) {
  try {
    if (!isNotEmptyString(html) || !valid(html)) {
      return html;
    }
    const root = parse(html);
    (root.firstChild as unknown as HTMLElement)?.classList?.remove('_cms_content-frame');
    return root.toString();
  } catch (e) {
    return html;
  }
}
