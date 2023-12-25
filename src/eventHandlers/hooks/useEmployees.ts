import {getEmployees} from '@api/getEmployees';
import {useQuery} from '@tanstack/react-query';

export const useEmployees = () => useQuery({
	queryKey: ['employees'],
	queryFn: async () => getEmployees(),
});
