import Big from 'big.js';
import {type GrossProfitTableRow, type KTableLabelList, type ProjTypeList} from '../../config';

export const getViewData = ({
	datas,
	projTypeForTotalization,
	tgtParam,
	memberNum = 1,
}: {
	datas: GrossProfitTableRow[];
	projTypeForTotalization: ProjTypeList;
	tgtParam: KTableLabelList;
	memberNum?: number;
}) => {
	const memberNumForCalc = memberNum || 1;
	const tgtObj = datas.find(({projType}) => projType === projTypeForTotalization);
	const tgtData = tgtObj ? tgtObj[tgtParam] : 0;
	const tgtDataAve = new Big(tgtData).div(memberNumForCalc).toNumber();

	switch (tgtParam) {
		case 'grossProfitCoco':
		case 'grossProfitMonthlyAve':
		case 'orderAmtMonthlyAve':
		case 'orderAmtTotalBeforeTax':
			// 金額表示
			return tgtDataAve === 0 ? '-'
				: `￥ ${new Big(tgtDataAve).round(0, Big.roundHalfUp).toNumber().toLocaleString()}`;

		case 'grossProfitRateCoco':
			// 割合(%)表示
			return tgtDataAve === 0 ? '-'
				: `${new Big(tgtDataAve).round(2, Big.roundHalfUp).toNumber()} %`;

		default:
			return '-';
	}
};
