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
import {useEmployees} from '@/eventHandlers/hooks/useEmployees';
import {type IEmployees} from '@api/getEmployees';
import {useAreaNameById} from './hooks/useAreaNameById';
import {getMonthsNum} from './helper/getMonthsNum';
import {useCumulativeTableTotal} from './hooks/useCumulativeTableTotal';

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
	const {data: employees} = useEmployees();

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

	// CumulativeTable用の演算処理
	const storeNames = useAreaNameById(area);
	const monthsNum = getMonthsNum(periods);
	const cumulativeTableLabel = `${year}年度 ${storeNames ? storeNames : ''}	契約集計表`;
	const cumulativeTableDatas = useCumulativeTableTotal({
		contractData: summaryContracts,
		area,
		monthsNum,
	});

	return (
		<Stack spacing={2}>
			<CumulativeTableTotal
				cumulativeTableDatas={cumulativeTableDatas}
				cumulativeTableLabel={cumulativeTableLabel}
			/>
			<CumulativeTableAverage
				contractData={summaryContracts}
				area={area}
				periods={periods}
				year={year}
				employees={employees || [] as unknown as IEmployees[]}
			/>
			<GrossProfitByPerson contractData={summaryContracts} />
		</Stack>
	);
};
