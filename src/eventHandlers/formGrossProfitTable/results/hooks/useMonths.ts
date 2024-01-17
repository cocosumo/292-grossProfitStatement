import {periodLabelList} from '../../config';

export const useMonths = ({
	periods,
	year,
}: {
	periods: string[];
	year: string;
}) => {
	// 選択されているのが期間の場合(期間の場合は単一選択)
	const hasArea = periodLabelList.some(periodLabel => periodLabel === periods[0]);
	if (hasArea) {
		return periods[0];
	}

	// 月が選択されている場合
	let yearCnt = 0;
	const months = periods.map(month => {
		const newYear = month.split('-')[0];
		if (newYear === year) {
			yearCnt += 1;
		} else {
			return `${month.replace('-', '年')}月`;
		}

		let newMonth = month.split('-')[1];
		newMonth = String(Number(newMonth)); // 01月の0を除く

		if (yearCnt >= 2) {
			return `${newMonth}`;
		}

		return `${newYear}年${newMonth}`;
	});

	return `${months.join(',')}月`;
};
