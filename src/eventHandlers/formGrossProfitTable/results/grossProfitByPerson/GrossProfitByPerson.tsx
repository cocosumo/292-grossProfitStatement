import {type SummaryContracts} from '../../../helpers/getSummaryContracts';
import {type IEmployees} from '@api/getEmployees';
import {useAreaNameById} from '../hooks/useAreaNameById';
import {getMonthsNum} from '../helper/getMonthsNum';
import {useGrossProfitByPersonTable} from '../hooks/useGrossProfitByPersonTable';
import {Stack, Table, TableBody, TableHead, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {TableRowLayout} from './TableRowLayout';
import {tableLabelList, type KTableLabelList, projTypeList, type GrossProfitTableRow} from '../../config';
import {getViewData} from '../helper/getViewData';
import {getViewDataTotal} from '../helper/getViewDataTotal';
import {useMonths} from '../hooks/useMonths';

const StyledTableHead = styled(TableHead)({
	backgroundColor: 'aliceblue',
	fontSize: '14px',
	border: '1px solid #ddd',
	borderCollapse: 'collapse',
	borderSpacing: '0',
});

/** 担当者ごとの粗利表を表示する */
export const GrossProfitByPerson = ({
	area,
	periods,
	year,
	summaryContracts,
	members,
}: {
	area: string[];
	periods: string[];
	year: string;
	summaryContracts: SummaryContracts[];
	members: IEmployees[];
}) => {
	const storeNames = useAreaNameById(area);
	const tgtMonths = useMonths({
		periods,
		year,
	});
	const monthsNum = getMonthsNum(periods);
	const tableLabel = `${tgtMonths} ${storeNames} 担当者別粗利表 `;

	const viewDatas = useGrossProfitByPersonTable({
		contractData: summaryContracts,
		monthsNum,
		employees: members,
	});

	return (
		<Stack spacing={2}>
			<Typography variant='h5'>
				{tableLabel}
			</Typography>
			<Table size='small' aria-label='a dense table'>
				<StyledTableHead>
					<TableRowLayout
						key={'CumulativeTableTotal.header'}
						name={''}
						label={'(税抜)'}
						labelAlign='right'
						shinchiku={projTypeList[0]}
						reform={projTypeList[1]}
						shinchikuhutai={projTypeList[2]}
						taiyouko={projTypeList[3]}
						others={projTypeList[4]}
						total={'合計'}
						isHeader={true}
					/>
				</StyledTableHead>
				<TableBody>
					{members.map(({文字列＿氏名}) => {
						const memberViewDat = viewDatas
							.filter(({cocoConst}) => cocoConst === 文字列＿氏名.value)
							|| [] as GrossProfitTableRow[];

						return	Object.keys(tableLabelList).map((tableLabel: KTableLabelList, idx) => (
							<TableRowLayout
								key={`CumulativeTableTotal.${tableLabel}.${文字列＿氏名.value}`}
								isTop={!idx}
								name={文字列＿氏名.value}
								label={tableLabelList[tableLabel]}
								shinchiku={getViewData({
									datas: memberViewDat,
									projTypeForTotalization: projTypeList[0],
									tgtParam: tableLabel,
								})}
								reform={getViewData({
									datas: memberViewDat,
									projTypeForTotalization: projTypeList[1],
									tgtParam: tableLabel,
								})}
								shinchikuhutai={getViewData({
									datas: memberViewDat,
									projTypeForTotalization: projTypeList[2],
									tgtParam: tableLabel,
								})}
								taiyouko={getViewData({
									datas: memberViewDat,
									projTypeForTotalization: projTypeList[3],
									tgtParam: tableLabel,
								})}
								others={getViewData({
									datas: memberViewDat,
									projTypeForTotalization: projTypeList[4],
									tgtParam: tableLabel,
								})}
								total={getViewDataTotal({
									datas: memberViewDat,
									tgtParam: tableLabel,
								})}
							/>
						));
					})
					}
				</TableBody>
			</Table>
		</Stack>
	);
};
