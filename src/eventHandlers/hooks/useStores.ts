import { useQuery } from '@tanstack/react-query';
import { KStores } from 'types';

const meetingNumber: KStores = 'meetingNumber';

export const useStores = () => {
  
  return useQuery(
    ['stores'],
    () => getAllStores(`${meetingNumber} > 0 order by ${meetingNumber} desc`),
  );
};
