import { TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

export interface TableRowLayoutProps {
  label: ReactNode,
  shinchiku: ReactNode,
  reform: ReactNode,
  shinchikuhutai: ReactNode,
  taiyouko: ReactNode,
  others: ReactNode,
  total: ReactNode,
}

const StyledTableCell = styled(TableCell)({  
  color: 'darkslategray',
  fontSize: '14px',
  border: '1px solid #ddd',
  borderCollapse: 'collapse',
  borderSpacing: '0',
  padding: '6px 16px',
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
  } = props;


  return (
    <TableRow>
      <StyledTableCell align='left'>
        {label}
      </StyledTableCell>
      <StyledTableCell align='right'>
        {shinchiku}
      </StyledTableCell>
      <StyledTableCell align='right'>
        {reform}
      </StyledTableCell>
      <StyledTableCell align='right'>
        {shinchikuhutai}
      </StyledTableCell>
      <StyledTableCell align='right'>
        {taiyouko}
      </StyledTableCell>
      <StyledTableCell align='right'>
        {others}
      </StyledTableCell>
      <StyledTableCell align='right'>
        {total}
      </StyledTableCell>
    </TableRow>
  );
};