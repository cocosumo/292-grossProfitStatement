import {useCallback} from 'react';
import {useEmployees} from './useEmployees';
import {type AreaLabelList, areaLabelList} from '../formGrossProfitTable/config';
import {type IEmployees} from '@api/getEmployees';

export const useMembers = ({
	area,
}: {
	area: string[];
}) => useEmployees(
	useCallback((data: IEmployees[]) => data
		.sort((a, b) => Number(a.sort.value) - Number(b.sort.value))
		.filter(({
			territory_v2,
			mainStoreId_v2,
		}) => {
			if (areaLabelList.some(areaLabel => areaLabel === area[0])) {
				switch (area[0] as AreaLabelList) {
					case '全店舗':
						return true;
					case '西エリア':
						return territory_v2.value === '西';
					case '東エリア':
						return territory_v2.value === '東';
					default:
						return true;
				}
			} else {
				// 店舗が選択されている場合
				return area.includes(mainStoreId_v2.value);
			}
		}), [area]),
);
