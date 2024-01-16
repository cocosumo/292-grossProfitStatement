import {getEmployees} from '@api/getEmployees';
import {useQuery} from '@tanstack/react-query';

type DefaultResult = Awaited<ReturnType<typeof getEmployees>>;

export const useEmployees = <T = DefaultResult>(select?: (data: DefaultResult) => T) => useQuery({
	queryKey: ['employees'],
	queryFn: async () => getEmployees(),
	select,
});
