import { useQuery } from '@tanstack/react-query';
import { getEmployees } from 'api-kintone';



export const useEmployees = () => {

  return useQuery(
    ['employees'],
    () => getEmployees(),
  );
};
