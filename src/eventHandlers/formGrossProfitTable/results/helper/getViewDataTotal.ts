import Big from 'big.js';
import { GrossProfitTableRow, KTableLabelList } from '../../config';



export const getViewDataTotal = ({
  datas,
  tgtParam,
}: {
  datas: GrossProfitTableRow[]
  tgtParam: KTableLabelList
}) => {

  const total = datas.reduce((acc, cur) => {
    return Big(acc).plus(cur[tgtParam])
      .toNumber();
  }, 0);

  switch (tgtParam) {
    case 'grossProfitCoco':
    case 'grossProfitMonthlyAve':
    case 'orderAmtMonthlyAve':
    case 'orderAmtTotalBeforeTax':
      // 金額表示
      return total === 0 ? '-' : `￥ ${total.toLocaleString()}`;

    case 'grossProfitRateCoco':
      // 割合(%)表示
      return total === 0 ? '-' : `${total} %`;

    default:
      return '-';
  }
};
