import {type SummaryContracts} from '@/eventHandlers/helpers/getSummaryContracts';
import {useCumulativeTableAverage} from '../hooks/useCumulativeTableAverage';
import {type IEmployees} from '@api/getEmployees';
import {getMembers} from '../helper/getMembers';

/** 対象期間の一人当たりの平均表 */
export const CumulativeTableAverage = ({
	contractData,
	area,
	periods,
	year,
	employees,
}: {
	contractData: SummaryContracts[];
	area: string[];
	periods: string[];
	year: string;
	employees: IEmployees[];
}) => {
	const members = getMembers({
		employees,
		area,
	});

	const viewDate = useCumulativeTableAverage({
		contractData,
		area,
		periods,
		year,
		membersNum,
	});

	return (
		<>
		</>
	);
};
