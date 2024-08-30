import {
  formatKatexToHtmlStringWithOptions,
  flattenPhantomBoxClassNameIndice as flattenPhantomBoxClassNameIndiceFn,
} from '@teamturing/katex-utils';

const HTML_CACHE: Record<string, string> = {};

export function convertTexToHtml({
  tex,
  convertMarkUp,
  convertTable,
  flattenPhantomBoxClassNameIndice,
  injectPhantomBoxClasses,
}: {
  tex: string;
  convertMarkUp?: boolean;
  convertTable?: boolean;
  injectPhantomBoxClasses?: boolean;
  flattenPhantomBoxClassNameIndice?: boolean;
}): string {
  const hash = `${convertMarkUp}-${convertTable}-${injectPhantomBoxClasses}
  -${flattenPhantomBoxClassNameIndice}-${tex.length}-${tex}`;
  if (hash in HTML_CACHE) {
    return HTML_CACHE[hash];
  }
  let result = formatKatexToHtmlStringWithOptions(tex, { convertMarkUp, convertTable, injectPhantomBoxClasses });
  if (flattenPhantomBoxClassNameIndice) {
    result = flattenPhantomBoxClassNameIndiceFn(result);
  }
  // byte += calculateStringByteSize(result);
  HTML_CACHE[hash] = result;
  return result;
}
