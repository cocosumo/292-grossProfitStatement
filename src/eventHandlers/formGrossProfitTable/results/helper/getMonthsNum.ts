import {type PeriodLabelList, periodLabelList} from '../../config';

export const getMonthsNum = (periods: string[]) => {
	if (!periodLabelList.includes(periods[0] as PeriodLabelList)) {
		return periods.length ?? 1;
	}

	// 期間が選択されている場合
	switch (periods[0] as PeriodLabelList) {
		case '全期':
			return 12;
		case '上半期':
		case '下半期':
			return 6;
		default:
			return 1;
	}
};
