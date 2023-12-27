import {type IEmployees} from '@api/getEmployees';
import {type AreaLabelList, areaLabelList} from '../../config';

export const getMembers = ({
	employees,
	area,
}: {
	employees: IEmployees[];
	area: string[];
}) => {
	const tgtMembers = employees.filter(({
		territory_v2,
		mainStore,
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
			return area.includes(mainStore.value);
		}
	});

	return tgtMembers;
};
