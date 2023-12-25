import {type KStore, getAllStores} from '@api/getAllStores';
import {useQuery} from '@tanstack/react-query';

const meetingNumber: KStore = 'meetingNumber';

export const useStores = () => useQuery({
	queryKey: ['stores'],
	queryFn: async () => getAllStores(`${meetingNumber} > 0 order by ${meetingNumber} desc`),
});
