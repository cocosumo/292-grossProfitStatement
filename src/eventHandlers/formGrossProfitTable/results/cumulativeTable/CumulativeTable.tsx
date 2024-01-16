import {useMemo} from 'react';
import {getMembers} from '../helper/getMembers';
import {CumulativeTableAverage} from './CumulativeTableAverage';
import {CumulativeTableTotal} from './CumulativeTableTotal';
import {type IEmployees} from '@api/getEmployees';
import {useAreaNameById} from '../hooks/useAreaNameById';
import {getMonthsNum} from '../helper/getMonthsNum';
import {useCumulativeTableTotal} from '../hooks/useCumulativeTableTotal';
import {type SummaryContracts} from '@/eventHandlers/helpers/getSummaryContracts';
import {InputAdornment, Stack, TextField, Typography} from '@mui/material';

export const CumulativeTable = ({
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
	const cumulativeTableLabel = `${year}年度 ${storeNames ? storeNames : ''}	契約集計表`;
	const cumulativeTableDatas = useCumulativeTableTotal({
		contractData: summaryContracts,
		area,
		monthsNum,
	});

	const members = useMemo(() => {
		if (!employees) {
			return [] as IEmployees[];
		}

		return getMembers({
			employees,
			area,
		});
	}, [employees, area]);

	return (
		<Stack spacing={2}>
			<Stack direction={'row'} justifyContent={'space-between'}>
				<Typography variant='h5'>
					{cumulativeTableLabel}
				</Typography>
				<TextField
					variant='standard'
					value={members.length}
					size='small'
					InputProps={{
						startAdornment: <InputAdornment position='start'>対象人数</InputAdornment>,
						endAdornment: <InputAdornment position='end'>人</InputAdornment>,
					}}
					sx={{
						'& input': {
							textAlign: 'right',
						},
						width: '150px',
					}}
				/>
			</Stack>

			<CumulativeTableTotal
				cumulativeTableDatas={cumulativeTableDatas}
			/>
			<CumulativeTableAverage
				cumulativeTableDatas={cumulativeTableDatas}
				memberNum={members.length}
			/>
		</Stack>
	);
};
