import { useQuery } from '@tanstack/react-query';
import { getAllStores } from 'api-kintone';
import { KStores } from 'types';

const meetingNumber: KStores = 'meetingNumber';

export const useStores = () => {
  
  return useQuery(
    ['stores'],
    () => getAllStores(`${meetingNumber} > 0 order by ${meetingNumber} desc`),
  );
};
