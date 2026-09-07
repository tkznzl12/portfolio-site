/** "2년 3개월", "9개월" 형태의 경력 문자열을 개월 수로 변환한다. */
export function parseCareerToMonths(career: string): number {
  const years = Number(career.match(/(\d+)\s*년/)?.[1] ?? 0);
  const months = Number(career.match(/(\d+)\s*개월/)?.[1] ?? 0);
  return years * 12 + months;
}

export function formatMonths(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years && months) return `${years}년 ${months}개월`;
  if (years) return `${years}년`;
  return `${months}개월`;
}
