import { calcProfitability } from 'api-kintone/src/andpadProcurement/calculation/calcProfitability';
import { IAndpadprocurements, IContracts, IProjects, IProjtypes, TAgents, TEnvelopeStatus } from 'types';
import { roundDownTo1000 } from './roundDownTo1000';
import { ProjTypeList } from '../formGrossProfitTable/config';

export interface SummaryContracts {
  /** 店舗名 */
  storeName: string

  /** エリア(西/東) */
  area: string

  /** 顧客名 */
  custName: string

  /** 工事種別 */
  projType: string

  /** 集計用の工事種別 */
  projTypeForTotalization: ProjTypeList

  /** 夢てつAG名 */
  yumeAgName: string[]

  /** ここすもAG名 */
  cocoAgs: string[]

  /** ここすも工事担当者 */
  cocoConst: string[]

  /** 返金有無 */
  hasRefund: boolean

  /** 物件完了日 */
  closingDate: string

  /** 発注金額(税抜) */
  orderAmountBeforeTax: number

  /** 粗利金額(税抜) */
  grossProfitAmount: number

  /** ここすも実利益額(税抜) */
  grossProfitAmtCoco: number

  /** 夢てつ紹介料 */
  introFeeYume: number

  /** 自社工事区分 */
  inHouseProjType: string
}


const getAgents = ({
  agents,
  relation,
}: {
  agents: IProjects['agents']
  relation: TAgents,
}) => {
  return agents.value
    .filter(({ value: {
      agentType,
      agentName,
    } }) => (agentType.value === relation) && (agentName.value !== ''))
    .map(({ value: { agentName } }) => {
      return agentName.value;
    });
};




export const getSummaryContracts = ({
  projTypes,
  projects,
  contracts,
  andpadProcurement,
}: {
  projTypes: IProjtypes[]
  projects: IProjects[]
  contracts: IContracts[]
  andpadProcurement: IAndpadprocurements[]
}) => {

  const summaryContracts: SummaryContracts[] = projects.map(({
    store,
    territory,
    custNames,
    projTypeId,
    agents,
    projFinDate,
    uuid: projId,
    andpadSystemId,
    forceLinkedAndpadSystemId,
    commissionRate,
    inHouseProjTypeName,
  }) => {

    const projSystemId = andpadSystemId.value || forceLinkedAndpadSystemId.value || '';
    const yumeAgNames = getAgents({ agents: agents, relation: 'yumeAG' });

    const filterContracts = contracts
      .filter(({
        projId: projIdContract,
        envelopeStatus,
      }) => (projIdContract.value === projId.value)
        && (envelopeStatus.value as TEnvelopeStatus === 'completed'));

    const {
      orderAmountAfterTax,
      hasRefund,
      tax,
      subsidyAmt,
    } = filterContracts.reduce((acc, {
      totalContractAmt,
      hasRefund: hasRefundContracts,
      tax: taxContract,
      contractType,
      hasSubsidy,
      subsidyAmt: subsidyAmtContract,
    }) => {

      return {
        orderAmountAfterTax: acc.orderAmountAfterTax + +totalContractAmt.value,
        hasRefund: acc.hasRefund || hasRefundContracts.value === 'はい',
        tax: contractType.value === '契約' ? +taxContract.value : acc.tax,
        subsidyAmt: hasSubsidy.value === 'はい' ? acc.subsidyAmt += +subsidyAmtContract.value : acc.subsidyAmt,
      };

    }, {
      orderAmountAfterTax: 0,
      hasRefund: false,
      tax: 0.1,
      subsidyAmt: 0,
    });

    const {
      label: projTypeName,
      projTypeForTotalization,
    } = projTypes.find(({ uuid }) => uuid.value === projTypeId.value) || {};


    const procurements = andpadProcurement.filter(({ andpadProjId }) => andpadProjId.value === projSystemId);
    const procurementBeforeTax = procurements.reduce((acc, {
      orderAmountBeforeTax: procurementAmt,
    }) => {
      return acc + +procurementAmt.value;
    }, 0);


    const {
      orderAmountBeforeTax,
      実利益額,
      利益税抜_夢てつ,
      実利益税抜_夢てつ,
      利益税抜_ここすも,
      実利益税抜_ここすも,
    } = calcProfitability({
      orderAmountAfterTax: orderAmountAfterTax,
      additionalAmountAfterTax: 0, // 追加金額も契約金額に含めて処置
      purchaseAmount: procurementBeforeTax,
      paymentAmount: procurementBeforeTax, // 正しくは支払金額だが、粗利表表示が目的のため、発注金額を設定する
      depositAmount: orderAmountAfterTax,  // 正しくは入金金額だが、粗利表表示が目的のため、契約金額を設定する
      yumeCommFeeRate: (yumeAgNames.length === 1 && yumeAgNames[0] === 'ここすも') ? 0 : +commissionRate.value,
      tax: tax,
      hasRefund: hasRefund,
      subsidyAmt: subsidyAmt,
    });


    return {
      storeName: store.value,
      area: territory.value,
      custName: custNames.value,
      projType: projTypeName?.value || '',
      projTypeForTotalization: projTypeForTotalization?.value as ProjTypeList || '',
      yumeAgName: yumeAgNames,
      cocoAgs: getAgents({ agents: agents, relation: 'cocoAG' }),
      cocoConst: getAgents({ agents: agents, relation: 'cocoConst' }),
      hasRefund: hasRefund,
      closingDate: projFinDate.value,
      orderAmountBeforeTax: orderAmountBeforeTax,
      grossProfitAmount: 実利益額,
      grossProfitAmtCoco: 利益税抜_ここすも || 実利益税抜_ここすも,
      introFeeYume: roundDownTo1000(利益税抜_夢てつ || 実利益税抜_夢てつ),
      inHouseProjType: inHouseProjTypeName.value,
    };

  });

  return summaryContracts;
};
