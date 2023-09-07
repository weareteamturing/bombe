import fontSize from './fontSize';
import fontWeight from './fontWeight';
import lineHeight from './lineHeight';

const typography = {
  ...fontSize,
  ...fontWeight,
  ...lineHeight,
};

export default typography;
export { fontSize, fontWeight, lineHeight };
