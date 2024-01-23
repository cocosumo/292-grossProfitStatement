import {type IEmployees} from '@api/getEmployees';
import {Stack, Table, TableBody, TableHead, Typography} from '@mui/material';
import {TableRowLayout} from './TableRowLayout';
import {tableLabelList, type KTableLabelList, projTypeList, type GrossProfitTableRow} from '../../config';
import {getViewData} from '../helper/getViewData';
import {getViewDataTotal} from '../helper/getViewDataTotal';
import {styled} from '@mui/material/styles';
import {areas, type Areas} from '@/config';

const StyledTableHead = styled(TableHead)({
	backgroundColor: 'aliceblue',
	fontSize: '14px',
	border: '1px solid #ddd',
	borderCollapse: 'collapse',
	borderSpacing: '0',
});

/** 担当者ごとの粗利表を表示する */
export const GrossProfitByPersonPerArea = ({
	viewDatas,
	members,
	areaName,
}: {
	viewDatas: GrossProfitTableRow[];
	members: IEmployees[];
	areaName: Areas;
}) => (
	<Stack spacing={2}>
		<Typography variant='h6' key={`${areaName}subtitle`}>
			{areas[areaName]}
		</Typography>
		<Table size='small' aria-label='a dense table'>
			<StyledTableHead>
				<TableRowLayout
					key={`CumulativeTableTotal.header.${areaName}`}
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

					return Object.keys(tableLabelList).map((tableLabel: KTableLabelList, idx) => (
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
