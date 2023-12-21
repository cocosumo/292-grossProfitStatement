import { useQuery } from '@tanstack/react-query';
import { getAllContracts } from 'api-kintone';



export const useContracts = () => {
  
  return useQuery(
    ['contractsByCocoas'],
    () => getAllContracts(),
  );
};
