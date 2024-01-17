import {TableCell, type TableCellProps, TableRow} from '@mui/material';
import {styled} from '@mui/material/styles';
import {type ReactNode} from 'react';
import {tableLabelList} from '../../config';

export type TableRowLayoutProps = {
	name?: ReactNode;
	label: ReactNode;
	shinchiku: ReactNode;
	reform: ReactNode;
	shinchikuhutai: ReactNode;
	taiyouko: ReactNode;
	others: ReactNode;
	total: ReactNode;
	labelAlign?: TableCellProps['align'];
	isTop?: boolean;
	isHeader?: boolean;
};

const StyledTableCell = styled(TableCell)({
	color: 'darkslategray',
	fontSize: '14px',
	border: '1px solid #ddd',
	borderCollapse: 'collapse',
	borderSpacing: '0',
	padding: '3px 8px',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
});

const rowSpanNum = Object.keys(tableLabelList).length;

export const TableRowLayout = (props: TableRowLayoutProps) => {
	const {
		name = '',
		label,
		shinchiku,
		reform,
		shinchikuhutai,
		taiyouko,
		others,
		total,
		labelAlign = 'left',
		isTop = false,
		isHeader = false,
	} = props;

	return (
		<TableRow>
			{isTop && <StyledTableCell align='left' width={'100px'} rowSpan={rowSpanNum}>
				{name}
			</StyledTableCell>}
			{!isHeader && <StyledTableCell align={labelAlign} width={'100px'}>
				{label}
			</StyledTableCell>}
			{isHeader && <StyledTableCell align={labelAlign} width={'100px'} colSpan={2}>
				{label}
			</StyledTableCell>}
			<StyledTableCell align='right' width={'160px'}>
				{shinchiku}
			</StyledTableCell>
			<StyledTableCell align='right' width={'160px'}>
				{reform}
			</StyledTableCell>
			<StyledTableCell align='right' width={'160px'}>
				{shinchikuhutai}
			</StyledTableCell>
			<StyledTableCell align='right' width={'160px'}>
				{taiyouko}
			</StyledTableCell>
			<StyledTableCell align='right' width={'160px'}>
				{others}
			</StyledTableCell>
			<StyledTableCell align='right' width={'160px'}>
				{total}
			</StyledTableCell>
		</TableRow>
	);
};
