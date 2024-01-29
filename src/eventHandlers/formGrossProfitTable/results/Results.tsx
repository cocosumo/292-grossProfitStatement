import {GrossProfitByPerson} from './grossProfitByPerson/GrossProfitByPerson';
import {useContracts} from '../../hooks/useContracts';
import {useProjects} from '../../hooks/useProjects';
import {useTypedWatch} from '../../hooks/useTypedRHF';
import {useMemo} from 'react';
import {useAndpadProcurement} from '../../hooks/useAndpadProcurement';
import {useProjTypes} from '../../hooks/useProjTypes';
import {getDatePeriod} from './helper/getDatePeriod';
import {type SummaryContracts, getSummaryContracts} from '../../helpers/getSummaryContracts';
import {LinearProgress, Stack} from '@mui/material';
import {CumulativeTable} from './cumulativeTable/CumulativeTable';
import {type IEmployees} from '@api/getEmployees';
import {useMembers} from '@/eventHandlers/hooks/useMembers';

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

	const isLoading = !projects
		|| !contracts
		|| !andpadProcurement
		|| !projTypes;

	const summaryContracts = useMemo(() => {
		if (isLoading) {
			return [] as SummaryContracts[];
		}

		return getSummaryContracts({
			projects,
			contracts,
			andpadProcurement,
			projTypes,
		});
	}, [projects, contracts, andpadProcurement, projTypes, isLoading]);

	return (
		<Stack
			spacing={2}
			px={4}
			pt={2}
			pb={4}
		>
			{!isLoading
				&& <>
					<CumulativeTable
						area={area}
						periods={periods}
						year={year}
						summaryContracts={summaryContracts}
						employeesNum={members ? members.length : 0}
					/>
					<GrossProfitByPerson
						members={members || [] as IEmployees[]}
						periods={periods}
						summaryContracts={summaryContracts}
					/>
				</>}
			{isLoading && <LinearProgress color='primary' />}
		</Stack>
	);
};
