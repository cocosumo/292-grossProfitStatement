import {TableCell, type TableCellProps, TableRow} from '@mui/material';
import {styled} from '@mui/material/styles';
import {type ReactNode} from 'react';

export type TableRowLayoutProps = {
	label: ReactNode;
	shinchiku: ReactNode;
	reform: ReactNode;
	shinchikuhutai: ReactNode;
	taiyouko: ReactNode;
	others: ReactNode;
	total: ReactNode;
	labelAlign?: TableCellProps['align'];
};

const StyledTableCell = styled(TableCell)({
	color: 'darkslategray',
	fontSize: '14px',
	border: '1px solid #ddd',
	borderCollapse: 'collapse',
	borderSpacing: '0',
	padding: '3px 8px',
});

export const TableRowLayout = (props: TableRowLayoutProps) => {
	const {
		label,
		shinchiku,
		reform,
		shinchikuhutai,
		taiyouko,
		others,
		total,
		labelAlign = 'left',
	} = props;

	return (
		<TableRow>
			<StyledTableCell align={labelAlign} width={'200px'}>
				{label}
			</StyledTableCell>
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
