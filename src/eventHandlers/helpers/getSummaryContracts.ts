
import {roundDownTo1000} from './roundDownTo1000';
import {type ProjTypeList} from '../formGrossProfitTable/config';
import {Big} from 'big.js';
import {calcProfitability} from '@api/calculation/calcProfitability';
import {getAgents} from './getAgents';
import {type IProjTypes} from '@api/getProjTypes';
import {type IProjects} from '@api/getAllProjects';
import {type IContracts} from '@api/getAllContracts';
import {type IProcurements} from '@api/getAllProcurementDetails';
import {type TEnvelopeStatus} from '@/configDocsign';
import {cocosumoAsYumeAgId} from '@/config';

export type SummaryContracts = {
	/** 店舗名 */
	storeName: string;

	/** エリア(西/東) */
	area: string;

	/** 顧客名 */
	custName: string;

	/** 工事種別 */
	projType: string;

	/** 集計用の工事種別 */
	projTypeForTotalization: ProjTypeList;

	/** 夢てつAG名 */
	yumeAgIds: string[];

	/** ここすもAG情報 */
	cocoAgIds: string[];

	/** ここすも工事担当者 */
	cocoConstIds: string[];

	/** 返金有無 */
	hasRefund: boolean;

	/** 物件完了日 */
	closingDate: string;

	/** 発注金額(税抜) */
	orderAmountBeforeTax: number;

	/** 粗利金額(税抜) */
	grossProfitAmount: number;

	/** ここすも実利益額(税抜) */
	grossProfitAmtCoco: number;

	/** 夢てつ紹介料 */
	introFeeYume: number;

	/** 自社工事区分 */
	inHouseProjType: string;
};

export const getSummaryContracts = ({
	projTypes,
	projects,
	contracts,
	andpadProcurement,
}: {
	projTypes: IProjTypes[];
	projects: IProjects[];
	contracts: IContracts[];
	andpadProcurement: IProcurements[];
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
		const yumeAgIds = getAgents({agents, relation: 'yumeAG'});

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
			const newOrderAmtAfTax = new Big(acc.orderAmountAfterTax).plus(Number(totalContractAmt.value))
				.toNumber();
			const newSubsidyAmt = new Big(acc.subsidyAmt).plus(Number(subsidyAmtContract.value))
				.toNumber();

			return {
				orderAmountAfterTax: newOrderAmtAfTax,
				hasRefund: acc.hasRefund || hasRefundContracts.value === 'はい',
				tax: contractType.value === '契約' ? Number(taxContract.value) : acc.tax,
				subsidyAmt: hasSubsidy.value === 'はい' ? newSubsidyAmt : acc.subsidyAmt,
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
		} = projTypes.find(({uuid}) => uuid.value === projTypeId.value) || {};

		const procurements = andpadProcurement.filter(({andpadProjId}) => andpadProjId.value === projSystemId);
		const procurementBeforeTax = procurements.reduce((acc, {
			orderAmountBeforeTax: procurementAmt,
		}) => acc + Number(procurementAmt.value), 0);

		const {
			orderAmountBeforeTax,
			実利益額,
			利益税抜_夢てつ,
			実利益税抜_夢てつ,
			利益税抜_ここすも,
			実利益税抜_ここすも,
		} = calcProfitability({
			orderAmountAfterTax,
			additionalAmountAfterTax: 0, // 追加金額も契約金額に含めて処置
			purchaseAmount: procurementBeforeTax,
			paymentAmount: procurementBeforeTax, // 正しくは支払金額だが、粗利表表示が目的のため、発注金額を設定する
			depositAmount: orderAmountAfterTax, // 正しくは入金金額だが、粗利表表示が目的のため、契約金額を設定する
			yumeCommFeeRate: (yumeAgIds.length === 1 && yumeAgIds[0] === cocosumoAsYumeAgId)
				? 0 : Number(commissionRate.value),
			tax,
			hasRefund,
			subsidyAmt,
		});

		return {
			storeName: store.value,
			area: territory.value,
			custName: custNames.value,
			projType: projTypeName?.value || '',
			projTypeForTotalization: projTypeForTotalization?.value as ProjTypeList || '',
			yumeAgIds,
			cocoAgIds: getAgents({agents, relation: 'cocoAG'}),
			cocoConstIds: getAgents({agents, relation: 'cocoConst'}),
			hasRefund,
			closingDate: projFinDate.value,
			orderAmountBeforeTax,
			grossProfitAmount: 実利益額,
			grossProfitAmtCoco: 利益税抜_ここすも || 実利益税抜_ここすも,
			introFeeYume: roundDownTo1000(利益税抜_夢てつ || 実利益税抜_夢てつ),
			inHouseProjType: inHouseProjTypeName.value,
		};
	});

	return summaryContracts;
};
