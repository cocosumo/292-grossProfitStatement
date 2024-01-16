import Big from 'big.js';
import {type GrossProfitTableRow, type KTableLabelList} from '../../config';

export const getViewDataTotal = ({
	datas,
	tgtParam,
	memberNum = 1,
}: {
	datas: GrossProfitTableRow[];
	tgtParam: KTableLabelList;
	memberNum?: number;
}) => {
	const memberNumForCalc = memberNum === 0 ? 1 : memberNum;
	const total = datas.reduce((acc, cur) => new Big(acc).plus(cur[tgtParam])
		.toNumber(), 0);
	const totalAve = new Big(total).div(memberNumForCalc).toNumber();

	switch (tgtParam) {
		case 'grossProfitCoco':
		case 'grossProfitMonthlyAve':
		case 'orderAmtMonthlyAve':
		case 'orderAmtTotalBeforeTax':
			// 金額表示
			return totalAve === 0 ? '-'
				: `￥ ${new Big(totalAve).round(0, Big.roundHalfUp).toNumber().toLocaleString()}`;

		case 'grossProfitRateCoco':
			// 割合(%)表示
			return totalAve === 0 ? '-'
				: `${new Big(totalAve).round(2, Big.roundHalfUp).toNumber().toLocaleString()} %`;

		default:
			return '-';
	}
};
