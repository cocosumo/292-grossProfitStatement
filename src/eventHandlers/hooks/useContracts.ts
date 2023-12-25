import {getAllContracts} from '@api/getAllContracts';
import {useQuery} from '@tanstack/react-query';

export const useContracts = () => useQuery({
	queryKey: ['contractsByCocoas'],
	queryFn: async () => getAllContracts(),
});
