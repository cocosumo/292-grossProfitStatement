import { Big } from 'big.js';

export interface CostManagement {
  orderAmountBeforeTax: number,
  additionalAmountBeforeTax: number,
  purchaseAmount: number,
  paymentAmount: number,
  yumeProfitSharing: number,
  cocoProfitSharing: number,
  予定利益率: number,
  予定利益額: number,
  実利益率: number,
  実利益額: number,
  実利益税抜_夢てつ: number,
  実利益税抜_ここすも: number,
  hasRefund: boolean,
  利益税抜_夢てつ: number,
  利益税抜_ここすも: number,
  受注額計_税込: number,
  受注額計_税抜: number,
  入金額: number,
  未入金: number,
  補助金: number,
}


export const calcProfitability = (params: {
  orderAmountAfterTax: number // 受注金額(税込)
  additionalAmountAfterTax: number // 追加金額(税込)
  purchaseAmount: number // 実行予算金額
  paymentAmount: number // 支払金額
  depositAmount: number // 入金金額
  yumeCommFeeRate: number // ゆめてつ紹介料率
  tax: number // 税率
  hasRefund: boolean // 返金有無(0: なし, 1: あり)
  subsidyAmt?: number // 補助金額
}): CostManagement => {

  //console.log('CalcProfitability params', params);

  const {
    orderAmountAfterTax,
    additionalAmountAfterTax,
    purchaseAmount,
    paymentAmount,
    depositAmount,
    yumeCommFeeRate,
    tax,
    hasRefund,
    subsidyAmt = 0,
  } = params;

  const taxForCalc = Big(tax).add(1);

  /** 受注金額(税抜) */
  const orderAmountBeforeTax = Big(orderAmountAfterTax).div(taxForCalc)
    .round(0, 1)
    .toNumber();

  /** 追加金額(税抜) */
  const additionalAmountBeforeTax = Big(additionalAmountAfterTax).div(taxForCalc)
    .round(0, 1)
    .toNumber();

  /** 受注総額 */
  const orderTotalBeforeTax = Big(orderAmountBeforeTax).plus(additionalAmountBeforeTax)
    .toNumber();

  /** 予定利益額 */
  const plannedProfit = Big(orderTotalBeforeTax).minus(purchaseAmount)
    .toNumber();

  /** 実利益額 */
  const actualProfit = Big(orderTotalBeforeTax).minus(paymentAmount)
    .toNumber();

  /** 予定利益率 */
  const plannedProfitMargin = orderTotalBeforeTax 
    ? Big(plannedProfit)
      .div(orderTotalBeforeTax)
      .mul(100)
      .round(2, 1)
      .toNumber()
    : 0;

  /** 実利益率 */
  const actualProfitMargin = orderTotalBeforeTax 
    ?  Big(actualProfit)
      .div(orderTotalBeforeTax)
      .mul(100)
      .round(2, 1)
      .toNumber()
    : 0;

  /** 実利益税抜_夢てつ */
  const yumeActualProfit = Big(actualProfit).mul(yumeCommFeeRate)
    .div(100)
    .round(0, 1)
    .toNumber();

  /** 実利益税抜_ここすも */
  const cocoActualProfit = Big(actualProfit).minus(yumeActualProfit)
    .round(0, 1)
    .toNumber();

  /** 利益税抜_夢てつ */
  const yumeActualProfitHasRefund = !hasRefund ? 0 : Big(yumeActualProfit).mul(0.95)
    .round(0, 1)
    .toNumber();

  /** 利益税抜_ここすも */
  const cocoActualProfitHasRefund = !hasRefund ? 0 : Big(actualProfit).sub(yumeActualProfitHasRefund)
    .round(0, 1)
    .toNumber();

  /** 受注額計_税込 */
  const orderTotalAfterAmount = Big(orderAmountAfterTax).plus(additionalAmountAfterTax)
    .round(0, 1)
    .toNumber();

  /** ここすも利益配分 */
  const cocoProfitSharing = Big(100).minus(yumeCommFeeRate)
    .toNumber();

  /** 未入金 */
  const unpaidAmount = Big(orderTotalAfterAmount).minus(depositAmount)
    .round(0, 1)
    .toNumber();


  return {
    orderAmountBeforeTax: orderAmountBeforeTax,
    additionalAmountBeforeTax: additionalAmountBeforeTax,
    purchaseAmount: purchaseAmount,
    paymentAmount: paymentAmount,
    予定利益率: plannedProfitMargin,
    予定利益額: plannedProfit,
    実利益率: actualProfitMargin,
    実利益額: actualProfit,
    yumeProfitSharing: yumeCommFeeRate,
    cocoProfitSharing: cocoProfitSharing,
    実利益税抜_夢てつ: yumeActualProfit,
    実利益税抜_ここすも: cocoActualProfit,
    利益税抜_夢てつ: yumeActualProfitHasRefund,
    利益税抜_ここすも: cocoActualProfitHasRefund,    
    hasRefund: hasRefund,
    受注額計_税込: orderTotalAfterAmount,
    受注額計_税抜: orderTotalBeforeTax,
    入金額: depositAmount,
    未入金: unpaidAmount,
    補助金: subsidyAmt,
  };
};