import { parse } from 'node-html-parser';

export function flattenPhantomBoxClassNameIndice(html: string) {
  const root = parse(html);

  let accumulatedPhantomBoxCount = 0;

  for (let i = 0; ; i++) {
    const boxes = root.querySelectorAll(`.phantom-box-${i}`);
    const borderes = root.querySelectorAll(`.phantom-box-border-${i}`);
    if (boxes.length && borderes.length) {
      for (let j = 0; j < Math.min(boxes.length, borderes.length); j++) {
        const box = boxes[j];
        const border = borderes[j];
        box.setAttribute('id', `phantom-box-${accumulatedPhantomBoxCount}`);
        border.setAttribute('id', `phantom-box-border-${accumulatedPhantomBoxCount}`);
        accumulatedPhantomBoxCount += 1;
      }
    } else {
      break;
    }
  }

  return root.toString();
}
