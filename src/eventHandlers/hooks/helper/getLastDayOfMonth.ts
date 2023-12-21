import format from 'date-fns/format';


export const getLastDayOfMonth = (date: Date) => {
  // 与えられた日付の月の最終日を求める
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月は0から11で表されるため、+1する
  const lastDay = new Date(year, month, 0).getDate();

  // 最終日の日付を持つ新しいDateオブジェクトを作成して返す
  const lastDayOfMonth = new Date(year, month - 1, lastDay);

  return format(lastDayOfMonth, 'yyyy-MM-dd');
};
