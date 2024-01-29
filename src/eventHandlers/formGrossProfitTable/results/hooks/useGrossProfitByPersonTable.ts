import {type SummaryContracts} from '../../../helpers/getSummaryContracts';
import {
	type GrossProfitTableRow,
} from '../../config';
import {type IEmployees} from '@api/getEmployees';
import {contractsFormatGrossProfitTable} from '../helper/contractsFormatGrossProfitTable';

/** 契約書のデータを、担当者ごとにまとめて表示する */
export const useGrossProfitByPersonTable = ({
	contractData,
	monthsNum,
	employees,
}: {
	contractData: SummaryContracts[];
	monthsNum: number;
	employees: IEmployees[];
}) => {
	const formatTblDatas = [] as GrossProfitTableRow[];
	for (const employee of employees) {
		const {uuid} = employee;
		const filteredContracts = contractData.filter(({cocoAgIds}) => cocoAgIds?.includes(uuid.value));

		const formattingContracts = Object.values(contractsFormatGrossProfitTable({
			filteredContracts,
			monthsNum,
			cocoConstId: uuid.value,
		}));

		formatTblDatas.push(...formattingContracts);
	}

	return formatTblDatas;
};
