import {type SummaryContracts} from '../../../helpers/getSummaryContracts';
import {type IEmployees} from '@api/getEmployees';
import {useAreaNameById} from '../hooks/useAreaNameById';
import {getMonthsNum} from '../helper/getMonthsNum';
import {useGrossProfitByPersonTable} from '../hooks/useGrossProfitByPersonTable';
import {Stack, Typography} from '@mui/material';
import {useMonths} from '../hooks/useMonths';
import {GrossProfitByPersonPerArea} from './GrossProfitByPersonPerArea';
import {type Areas, areas} from '@/config';

/** 担当者ごとの粗利表を表示する */
export const GrossProfitByPerson = ({
	periods,
	summaryContracts,
	members,
}: {
	periods: string[];
	summaryContracts: SummaryContracts[];
	members: IEmployees[];
}) => {
	const storeNames = useAreaNameById();
	const tgtMonths = useMonths();
	const monthsNum = getMonthsNum(periods);
	const tableLabel = `${tgtMonths} ${storeNames} 担当者別粗利表 `;

	const viewDatas = useGrossProfitByPersonTable({
		contractData: summaryContracts,
		monthsNum,
		employees: members,
	});

	return (
		<Stack
			spacing={2}
			px={2}
			pt={2}
			pb={4}
		>
			<Typography variant='h5'>
				{tableLabel}
			</Typography>
			{Object.keys(areas).map(area => {
				const filterMembers = members
					.filter(({territory_v2}) => territory_v2.value === area);

				return (
					<GrossProfitByPersonPerArea
						key={`${area}MemberGrossProfit`}
						members={filterMembers}
						viewDatas={viewDatas}
						areaName={area as Areas}
					/>
				);
			})}
		</Stack>
	);
};
