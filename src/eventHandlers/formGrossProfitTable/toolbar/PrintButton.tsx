import { Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from 'react-to-print';


export const PrintButton = () => {
  const handlePrint = useReactToPrint({
    content: () => document.getElementById('printNode') as HTMLElement,
  });

  return (
    <Button
      variant='contained'
      startIcon={<PrintIcon />}
      onClick={handlePrint}
    >
      印刷
    </Button>
  );
};