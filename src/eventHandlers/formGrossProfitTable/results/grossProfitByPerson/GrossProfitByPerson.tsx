import {Stack} from '@mui/material';
import {type SummaryContracts} from '../../../helpers/getSummaryContracts';
import {type IEmployees} from '@api/getEmployees';
import {useAreaNameById} from '../hooks/useAreaNameById';
import {getMonthsNum} from '../helper/getMonthsNum';
import {useMemo} from 'react';
import {getMembers} from '../helper/getMembers';

/** 担当者ごとの粗利表を表示する */
export const GrossProfitByPerson = ({
	area,
	periods,
	year,
	summaryContracts,
	employees,
}: {
	area: string[];
	periods: string[];
	year: string;
	summaryContracts: SummaryContracts[];
	employees: IEmployees[] | undefined;
}) => {
	const storeNames = useAreaNameById(area);
	const monthsNum = getMonthsNum(periods);
	const tableLabel = '担当者別粗利表';

	const members = useMemo(() => {
		if (!employees) {
			return [] as IEmployees[];
		}

		return getMembers({
			employees,
			area,
		});
	}, [employees, area]);

	return	(
		<Stack spacing={2}>
      担当者ごとの粗利表
		</Stack>
	);
};
