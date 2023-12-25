import {useQuery} from '@tanstack/react-query';
import {getLastDayOfMonth} from './helper/getLastDayOfMonth';
import {type KProcurement, getAllProcurementDetails} from '@api/getAllProcurementDetails';

const paymentDate: KProcurement = '支払日';

export const useAndpadProcurement = ({
	until,
}: {
	until: Date;
}) => {
	const queryTo = getLastDayOfMonth(until);

	return useQuery({
		queryKey: ['andpadProcurement', queryTo],
		queryFn: async () => getAllProcurementDetails({condition: `${paymentDate} <= "${queryTo}"`}),
	});
};
