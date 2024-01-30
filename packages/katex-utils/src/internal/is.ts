export const isNullable = (value: any): value is null | undefined => value === null || value === undefined;
export const isValidJSON = (value: string) => {
  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }
  return true;
};
export const isNotEmptyString = (candidate?: string): candidate is string => {
  return  typeof candidate === 'string' && candidate.length > 0
}
