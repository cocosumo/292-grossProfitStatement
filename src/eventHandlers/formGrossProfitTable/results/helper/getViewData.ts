import {type GrossProfitTableRow, type KTableLabelList, type ProjTypeList} from '../../config';

export const getViewData = ({
	datas,
	projTypeForTotalization,
	tgtParam,
}: {
	datas: GrossProfitTableRow[];
	projTypeForTotalization: ProjTypeList;
	tgtParam: KTableLabelList;
}) => {
	const tgtObj = datas.find(({projType}) => projType === projTypeForTotalization);
	const tgtData = tgtObj ? tgtObj[tgtParam] : 0;

	switch (tgtParam) {
		case 'grossProfitCoco':
		case 'grossProfitMonthlyAve':
		case 'orderAmtMonthlyAve':
		case 'orderAmtTotalBeforeTax':
			// 金額表示
			return tgtData === 0 ? '-' : `￥ ${tgtData.toLocaleString()}`;

		case 'grossProfitRateCoco':
			// 割合(%)表示
			return tgtData === 0 ? '-' : `${tgtData} %`;

		default:
			return '-';
	}
};
