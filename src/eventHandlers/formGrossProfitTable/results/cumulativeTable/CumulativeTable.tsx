import {CumulativeTableAverage} from './CumulativeTableAverage';
import {CumulativeTableTotal} from './CumulativeTableTotal';
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
	employeesNum,
}: {
	area: string[];
	periods: string[];
	year: string;
	summaryContracts: SummaryContracts[];
	employeesNum: number;
}) => {
	const storeNames = useAreaNameById();
	const monthsNum = getMonthsNum(periods);
	const cumulativeTableLabel = `${year}年度 ${storeNames ? storeNames : ''}	契約集計表`;
	const cumulativeTableDatas = useCumulativeTableTotal({
		contractData: summaryContracts,
		area,
		monthsNum,
	});

	return (
		<Stack
			spacing={2}
			px={2}
			pt={2}
			pb={4}
		>
			<Stack direction={'row'} justifyContent={'space-between'}>
				<Typography variant='h5'>
					{cumulativeTableLabel}
				</Typography>
				<TextField
					variant='standard'
					value={employeesNum}
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
				memberNum={employeesNum}
			/>
		</Stack>
	);
};
