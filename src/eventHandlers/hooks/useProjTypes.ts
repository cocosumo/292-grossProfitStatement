import { useQuery } from '@tanstack/react-query';
import { getProjTypes } from 'api-kintone';


export const useProjTypes = () => {
  return useQuery(
    ['projTypes'],
    () => getProjTypes(),
  );
};
