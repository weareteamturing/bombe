import { choiceSelector } from './internal/choiceSelector';

export const countAnswerChoice = (text: string) => {
  const choice = /\[선지\s*(\d*)\]/g.exec(text)?.[1];

  if (!choice) return choiceSelector(text).length || null;

  if (isNaN(Number(choice))) return null;
  return Number(choice);
};
