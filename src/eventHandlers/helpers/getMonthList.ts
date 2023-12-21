import { periodLabelList } from '../formGrossProfitTable/config';


const spliceLabel = (months: string[], label: string) => {

  const result = months;
  const indexOfLabel = result.indexOf(label);
  if (indexOfLabel !== -1) {
    result.splice(indexOfLabel, 1);
    return result;
  }

  return undefined;
};


export const getMonthList = (months: string[]) => {

  const latestLabel = months[months.length - 1];

  for (const periodLabel of periodLabelList) {
    // 最新の選択がラベルの場合は、ラベルのみに更新する
    if (latestLabel === periodLabel) return [periodLabel];

    // 最新の選択が単月(ラベルではない)場合は、ラベルを削除する
    const labelChk = spliceLabel(months, periodLabel);
    if (labelChk) return labelChk.sort();
  }

  return months.sort();
};
