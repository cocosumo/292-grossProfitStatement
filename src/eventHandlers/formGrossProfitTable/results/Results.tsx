import {GrossProfitByPerson} from './grossProfitByPerson/GrossProfitByPerson';
import {useContracts} from '../../hooks/useContracts';
import {useProjects} from '../../hooks/useProjects';
import {useTypedWatch} from '../../hooks/useTypedRHF';
import {useMemo} from 'react';
import {useAndpadProcurement} from '../../hooks/useAndpadProcurement';
import {useProjTypes} from '../../hooks/useProjTypes';
import {getDatePeriod} from './helper/getDatePeriod';
import {type SummaryContracts, getSummaryContracts} from '../../helpers/getSummaryContracts';
import {Stack} from '@mui/material';
import {CumulativeTable} from './cumulativeTable/CumulativeTable';
import {useMembers} from '@/eventHandlers/hooks/useMembers';
import {type IEmployees} from '@api/getEmployees';

export const Results = () => {
	const [
		periods,
		year,
		area,
	] = useTypedWatch({
		name: [
			'months',
			'year',
			'storeIds',
		],
	}) as [string[], string, string[]];

	const {
		finDate,
		startDate,
	} = getDatePeriod(periods, year);

	const {data: projects} = useProjects({
		from: startDate,
		until: finDate,
	});

	const {data: contracts} = useContracts();
	const {data: andpadProcurement} = useAndpadProcurement({until: finDate});
	const {data: projTypes} = useProjTypes();
	const {data: members} = useMembers({area});

	const summaryContracts = useMemo(() => {
		if (
			!projects
			|| !contracts
			|| !andpadProcurement
			|| !projTypes
		) {
			return [] as SummaryContracts[];
		}

		return getSummaryContracts({
			projects,
			contracts,
			andpadProcurement,
			projTypes,
		});
	}, [projects, contracts, andpadProcurement, projTypes]);

	return (
		<Stack spacing={2}>
			<CumulativeTable
				area={area}
				periods={periods}
				year={year}
				summaryContracts={summaryContracts}
				employeesNum={members ? members.length : 0}
			/>
			<GrossProfitByPerson
				area={area}
				members={members || [] as IEmployees[]}
				periods={periods}
				year={year}
				summaryContracts={summaryContracts}
			/>
		</Stack>
	);
};
