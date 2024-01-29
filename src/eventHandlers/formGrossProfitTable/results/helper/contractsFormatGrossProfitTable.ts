import {type SummaryContracts} from '@/eventHandlers/helpers/getSummaryContracts';
import {
	type GrossProfitTableRow,
	type ProjTypeList,
	grossProfitTblRowInit,
	projTypeList,
} from '../../config';
import Big from 'big.js';

export const contractsFormatGrossProfitTable = ({
	filteredContracts,
	monthsNum,
	cocoConstId = '',
}: {
	filteredContracts: SummaryContracts[];
	monthsNum: number;
	cocoConstId?: string;
}) => {
	const formattingContracts = filteredContracts.reduce<Record<ProjTypeList, GrossProfitTableRow>>((acc, {
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
				orderAmtTotalBeforeTax: Number(orderAmountBeforeTax),
				grossprofitAmtTotal: Number(grossProfitAmount),
				grossProfitCoco: Number(grossProfitAmtCoco),
				introFeeYume: Number(introFeeYume),
				cocoConstId,
			};
		} else {
			acc[projTypeForTotalization] = {
				...acc[projTypeForTotalization],
				orderAmtTotalBeforeTax: acc[projTypeForTotalization].orderAmtTotalBeforeTax + Number(orderAmountBeforeTax),
				grossprofitAmtTotal: acc[projTypeForTotalization].grossprofitAmtTotal + Number(grossProfitAmount),
				grossProfitCoco: acc[projTypeForTotalization].grossProfitCoco + Number(grossProfitAmtCoco),
				introFeeYume: acc[projTypeForTotalization].introFeeYume + Number(introFeeYume),
				cocoConstId,
			};
		}

		return acc;
	}, {} as Record<ProjTypeList, GrossProfitTableRow>);

	// 取得したデータから割合の計算をする
	for (const projType of projTypeList) {
		if (formattingContracts[projType] === undefined) {
			formattingContracts[projType] = {
				...grossProfitTblRowInit,
				cocoConstId,
				projType,
			};
		} else {
			const orderAmtBfTax = formattingContracts[projType]?.orderAmtTotalBeforeTax ?? 0;
			const grossProfitCoco = formattingContracts[projType]?.grossProfitCoco ?? 0;

			const calcOrderAmtBfTax = orderAmtBfTax || 1;
			const grossProfitRateCoco = new Big(grossProfitCoco).div(calcOrderAmtBfTax)
				.times(100)
				.round(2)
				.toNumber();
			const orderAmtMonthlyAve = new Big(orderAmtBfTax).div(monthsNum)
				.round(0)
				.toNumber();
			const grossProfitMonthlyAve = new Big(grossProfitCoco).div(monthsNum)
				.round(0)
				.toNumber();

			formattingContracts[projType] = {
				...formattingContracts[projType],
				grossProfitRateCoco,
				orderAmtMonthlyAve,
				grossProfitMonthlyAve,
			};
		}
	}

	return formattingContracts;
};
