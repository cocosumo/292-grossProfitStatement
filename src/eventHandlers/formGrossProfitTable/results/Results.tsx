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
import {CumulativeTableTotal} from './cumulativeTableTotal/CumulativeTableTotal';
import {CumulativeTableAverage} from './cumulativeTableAverage/CumulativeTableAverage';

export const Results = () => {
	const [
		selectMonths,
		year,
	] = useTypedWatch({
		name: [
			'months',
			'year',
		],
	}) as [string[], string];

	const {
		finDate,
		startDate,
	} = getDatePeriod(selectMonths, year);

	const {data: projects} = useProjects({
		from: startDate,
		until: finDate,
	});

	const {data: contracts} = useContracts();
	const {data: andpadProcurement} = useAndpadProcurement({until: finDate});
	const {data: projTypes} = useProjTypes();

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
			<CumulativeTableTotal contractData={summaryContracts} />
			<CumulativeTableAverage contractData={summaryContracts} />
			<GrossProfitByPerson contractData={summaryContracts} />
		</Stack>
	);
};
