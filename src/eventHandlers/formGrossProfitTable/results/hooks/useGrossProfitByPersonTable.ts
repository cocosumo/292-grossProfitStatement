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
		const {文字列＿氏名} = employee;
		const filteredContracts = contractData.filter(({cocoAgs}) => cocoAgs?.includes(文字列＿氏名.value));

		const formattingContracts = contractsFormatGrossProfitTable({
			filteredContracts,
			monthsNum,
		});

		formatTblDatas.concat(Object.values(formattingContracts));
	}

	return formatTblDatas;
};
