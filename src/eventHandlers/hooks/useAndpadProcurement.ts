import { useQuery } from '@tanstack/react-query';
import { getAllProcurementDetails } from 'api-kintone';
import { KAndpadprocurements } from 'types';
import { getLastDayOfMonth } from './helper/getLastDayOfMonth';

const paymentDate: KAndpadprocurements = '支払日';

export const useAndpadProcurement = ({
  until,
}: {
  until: Date
}) => {

  const queryTo = getLastDayOfMonth(until);

  return useQuery(
    ['andpadProcurement', until],
    () => getAllProcurementDetails({ condition: `${paymentDate} <= "${queryTo}"` }),
  );
};
