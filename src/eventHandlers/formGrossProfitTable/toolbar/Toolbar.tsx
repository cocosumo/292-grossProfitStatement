import { Paper, Stack } from '@mui/material';
import { PrintButton } from './PrintButton';
import { Filter } from '../filter/Filter';

export const Toolbar = () => {


  return (
    <Stack
      direction='row'
      justifyContent={'space-between'}
      p={2}
      mb={2}
      component={Paper}
    >
      <Filter />
      <Stack 
        spacing={2}
      >
        <PrintButton />
        

      </Stack>
    </Stack>
  );
};