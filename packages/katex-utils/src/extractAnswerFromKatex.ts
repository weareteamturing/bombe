export const extractAnswerFromKatex = (text: string) => {
  const answer = /\[정답\] *(-?\d+) */gs.exec(text)?.[1]?.trim();
  if (isNaN(Number(answer))) return null;
  return answer;
};
