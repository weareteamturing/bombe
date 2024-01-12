export const decideAnswerTypeObjectiveFromKatex = (text: string) => {
  return /\[선지\s*(\d*)\]/g.test(text);
};
