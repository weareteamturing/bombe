// import { isEmptyString } from '@teamturing/validators';
// import { valid, parse } from 'node-html-parser';
//
// export function excludeRootContentFrameClassCSSFromHtml(html: string) {
//   try {
//     if (!html || isEmptyString(html) || !valid(html)) {
//       return html;
//     }
//     const root = parse(html);
//     (root.firstChild as unknown as HTMLElement)?.classList?.remove('_cms_content-frame');
//     return root.toString();
//   } catch (e) {
//     return html;
//   }
// }
