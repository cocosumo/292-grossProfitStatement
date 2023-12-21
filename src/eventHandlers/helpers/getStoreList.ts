import { areaLabelList } from '../formGrossProfitTable/config';



const spliceLabel = (stores: string[], label: string) => {

  const result = stores;
  const indexOfLabel = result.indexOf(label);
  if (indexOfLabel !== -1) {
    result.splice(indexOfLabel, 1);
    return result;
  }

  return undefined;
};


export const getStoreList = (stores: string[]) => {
  const latestLabel = stores[stores.length - 1];

  for (const areaLabel of areaLabelList) {
    // 最新の選択がラベルの場合は、ラベルのみに更新する
    if (latestLabel === areaLabel) return [areaLabel];

    // 最新の選択が店舗(ラベルではない)場合は、ラベルを削除する
    const labelChk = spliceLabel(stores, areaLabel);
    if (labelChk) return labelChk;
  }

  return stores;
};
