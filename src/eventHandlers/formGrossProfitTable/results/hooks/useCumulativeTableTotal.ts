import { Big } from 'big.js';
import { SummaryContracts } from '../../../helpers/getSummaryContracts';
import { useStores } from '../../../hooks/useStores';
import { AreaLabelList, GrossProfitTableRow, ProjTypeList, areaLabelList, projTypeList } from '../../config';

const grossProfitTblRowInit: GrossProfitTableRow = {
  projType: '',
  orderAmtTotalBeforeTax: 0,
  grossprofitAmtTotal: 0,
  introFeeYume: 0,
  grossProfitCoco: 0,
  grossProfitRateCoco: 0,
  orderAmtMonthlyAve: 0,
  grossProfitMonthlyAve: 0,
};




/** 受け取った契約書のデータを、対象のエリアに絞り込んで表示する */
export const useCumulativeTableTotal = ({
  contractData,
  area,
  monthsNum,
}: {
  contractData: SummaryContracts[]
  area: string[]
  monthsNum: number
}) => {

  const { data: stores } = useStores();

  const filteredContracts = contractData.filter((contract) => {
    const {
      storeName,
      area: territory,
    } = contract;

    if (!areaLabelList.includes(area[0] as AreaLabelList)) {
      // 各店舗が選択されている場合
      const storeNames = area.map((data) => {
        const storeDat = stores?.find(({ uuid }) => uuid.value === data);
        if (storeDat) {
          return storeDat.店舗名.value;
        } else {
          return data;
        }
      });

      return storeNames?.includes(storeName);

    } else {
      // エリアが選択されている場合
      switch (area[0] as AreaLabelList) {
        case '全店舗':
          return true;
        case '西エリア':
          return territory === '西';
        case '東エリア':
          return territory === '東';
      }
    }
  });

  const formattingContracts = filteredContracts.reduce((acc, {
    projTypeForTotalization,
    orderAmountBeforeTax,
    grossProfitAmount,
    grossProfitAmtCoco,
    introFeeYume,
  }) => {

    if (acc[projTypeForTotalization] === undefined) {
      acc[projTypeForTotalization] = {
        ...grossProfitTblRowInit,
        projType: projTypeForTotalization,
        orderAmtTotalBeforeTax: +orderAmountBeforeTax,
        grossprofitAmtTotal: +grossProfitAmount,
        grossProfitCoco: +grossProfitAmtCoco,
        introFeeYume: +introFeeYume,
      };
    } else {
      acc[projTypeForTotalization] = {
        ...acc[projTypeForTotalization],
        orderAmtTotalBeforeTax: acc[projTypeForTotalization].orderAmtTotalBeforeTax + +orderAmountBeforeTax,
        grossprofitAmtTotal: acc[projTypeForTotalization].grossprofitAmtTotal + +grossProfitAmount,
        grossProfitCoco: acc[projTypeForTotalization].grossProfitCoco + +grossProfitAmtCoco,
        introFeeYume: acc[projTypeForTotalization].introFeeYume + +introFeeYume,
      };
    }
    return acc;

  }, {} as Record<ProjTypeList, GrossProfitTableRow>);


  // 取得したデータから割合の計算をする
  for (const projType of projTypeList) {
    if (formattingContracts[projType] === undefined) {

      formattingContracts[projType] = {
        ...grossProfitTblRowInit,
        projType: projType,
      };

    } else {
      const orderAmtBfTax = formattingContracts[projType]?.orderAmtTotalBeforeTax ?? 0;
      const grossProfitCoco = formattingContracts[projType]?.grossProfitCoco ?? 0;

      const calcOrderAmtBfTax = orderAmtBfTax === 0 ? 1 : orderAmtBfTax;
      const grossProfitRateCoco = Big(grossProfitCoco).div(calcOrderAmtBfTax)
        .times(100)
        .round(2, Big.roundHalfUp)
        .toNumber();
      const orderAmtMonthlyAve = Big(orderAmtBfTax).div(monthsNum)
        .round(0, Big.roundHalfUp)
        .toNumber();
      const grossProfitMonthlyAve = Big(grossProfitCoco).div(monthsNum)
        .round(0, Big.roundHalfUp)
        .toNumber();

      formattingContracts[projType] = {
        ...formattingContracts[projType],
        grossProfitRateCoco: grossProfitRateCoco,
        orderAmtMonthlyAve: orderAmtMonthlyAve,
        grossProfitMonthlyAve: grossProfitMonthlyAve,
      };
    }
  }


  return Object.values(formattingContracts);

};
