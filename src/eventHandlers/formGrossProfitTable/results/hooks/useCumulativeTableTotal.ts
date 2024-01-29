import {type SummaryContracts} from '../../../helpers/getSummaryContracts';
import {useStores} from '../../../hooks/useStores';
import {
	type AreaLabelList,
	areaLabelList,
} from '../../config';
import {contractsFormatGrossProfitTable} from '../helper/contractsFormatGrossProfitTable';

/** 受け取った契約書のデータを、対象のエリアに絞り込んで表示する */
export const useCumulativeTableTotal = ({
	contractData,
	area,
	monthsNum,
}: {
	contractData: SummaryContracts[];
	area: string[];
	monthsNum: number;
}) => {
	const {data: stores} = useStores();

	const filteredContracts = contractData.filter(contract => {
		const {
			storeName,
			area: territory,
		} = contract;

		if (!areaLabelList.includes(area[0] as AreaLabelList)) {
			// 各店舗が選択されている場合
			const storeNames = area.map(data => {
				const storeDat = stores?.find(({uuid}) => uuid.value === data);
				if (storeDat) {
					return storeDat.店舗名.value;
				}

				return data;
			});

			return storeNames?.includes(storeName);
		}

		// エリアが選択されている場合
		switch (area[0] as AreaLabelList) {
			case '全店舗':
				return true;
			case '西エリア':
				return territory === '西';
			case '東エリア':
				return territory === '東';
			default:
				return true;
		}
	});

	const formattingContracts = contractsFormatGrossProfitTable({
		filteredContracts,
		monthsNum,
	});

	return Object.values(formattingContracts);
};
