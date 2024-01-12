export const isNullable = (value: any): value is null | undefined => value === null || value === undefined;
export const isValidJSON = (value: string) => {
  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }
  return true;
};
