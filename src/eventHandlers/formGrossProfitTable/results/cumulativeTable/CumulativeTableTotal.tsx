import {Table, TableBody, TableHead} from '@mui/material';
import {styled} from '@mui/material/styles';
import {TableRowLayout} from '../TableRowLayout';
import {getViewData} from '../helper/getViewData';
import {getViewDataTotal} from '../helper/getViewDataTotal';
import {type KTableLabelList, projTypeList, tableLabelList, type GrossProfitTableRow} from '../../config';

const StyledTableHead = styled(TableHead)({
	backgroundColor: 'aliceblue',
	fontSize: '14px',
	border: '1px solid #ddd',
	borderCollapse: 'collapse',
	borderSpacing: '0',
});

/** 対象期間の粗利集計表を表示する */
export const CumulativeTableTotal = ({
	cumulativeTableDatas,
}: {
	cumulativeTableDatas: GrossProfitTableRow[];
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
					label={tableLabelList[tableLabel]}
					shinchiku={getViewData({
						datas: cumulativeTableDatas,
						projTypeForTotalization: projTypeList[0],
						tgtParam: tableLabel,
					})}
					reform={getViewData({
						datas: cumulativeTableDatas,
						projTypeForTotalization: projTypeList[1],
						tgtParam: tableLabel,
					})}
					shinchikuhutai={getViewData({
						datas: cumulativeTableDatas,
						projTypeForTotalization: projTypeList[2],
						tgtParam: tableLabel,
					})}
					taiyouko={getViewData({
						datas: cumulativeTableDatas,
						projTypeForTotalization: projTypeList[3],
						tgtParam: tableLabel,
					})}
					others={getViewData({
						datas: cumulativeTableDatas,
						projTypeForTotalization: projTypeList[4],
						tgtParam: tableLabel,
					})}
					total={getViewDataTotal({
						datas: cumulativeTableDatas,
						tgtParam: tableLabel,
					})}
				/>
			))}
		</TableBody>
	</Table>
);
