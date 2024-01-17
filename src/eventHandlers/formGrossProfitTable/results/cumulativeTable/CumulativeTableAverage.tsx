import {projTypeList, type GrossProfitTableRow, tableLabelList, type KTableLabelList, tableLabelListAve} from '../../config';
import {styled} from '@mui/material/styles';
import {Table, TableBody, TableHead} from '@mui/material';
import {TableRowLayout} from './TableRowLayout';
import {getViewData} from '../helper/getViewData';
import {getViewDataTotal} from '../helper/getViewDataTotal';

const StyledTableHead = styled(TableHead)({
	backgroundColor: 'aliceblue',
	fontSize: '14px',
	border: '1px solid #ddd',
	borderCollapse: 'collapse',
	borderSpacing: '0',
});

/** 対象期間の一人当たりの平均表 */
export const CumulativeTableAverage = ({
	cumulativeTableDatas,
	memberNum,
}: {
	cumulativeTableDatas: GrossProfitTableRow[];
	memberNum: number;
}) => (
	<Table size='small' aria-label='a dense table'>
		<StyledTableHead>
			<TableRowLayout
				key={'CumulativeTableTotal.header'}
				label={'(税抜)'}
				labelAlign='right'
				shinchiku={projTypeList[0]}
				reform={projTypeList[1]}
				shinchikuhutai={projTypeList[2]}
				taiyouko={projTypeList[3]}
				others={projTypeList[4]}
				total={'合計'}
			/>
		</StyledTableHead>
		<TableBody>
			{Object.keys(tableLabelList).map((tableLabel: KTableLabelList) => (
				<TableRowLayout
					key={`CumulativeTableTotal.${tableLabel}`}
					label={tableLabelListAve[tableLabel]}
					shinchiku={getViewData({
						datas: cumulativeTableDatas,
						projTypeForTotalization: projTypeList[0],
						tgtParam: tableLabel,
						memberNum,
					})}
					reform={getViewData({
						datas: cumulativeTableDatas,
						projTypeForTotalization: projTypeList[1],
						tgtParam: tableLabel,
						memberNum,
					})}
					shinchikuhutai={getViewData({
						datas: cumulativeTableDatas,
						projTypeForTotalization: projTypeList[2],
						tgtParam: tableLabel,
						memberNum,
					})}
					taiyouko={getViewData({
						datas: cumulativeTableDatas,
						projTypeForTotalization: projTypeList[3],
						tgtParam: tableLabel,
						memberNum,
					})}
					others={getViewData({
						datas: cumulativeTableDatas,
						projTypeForTotalization: projTypeList[4],
						tgtParam: tableLabel,
						memberNum,
					})}
					total={getViewDataTotal({
						datas: cumulativeTableDatas,
						tgtParam: tableLabel,
						memberNum,
					})}
				/>
			))}
		</TableBody>
	</Table>
);
