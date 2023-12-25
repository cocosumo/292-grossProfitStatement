import {getProjTypes} from '@api/getProjTypes';
import {useQuery} from '@tanstack/react-query';

export const useProjTypes = () => useQuery({
	queryKey: ['projTypes'],
	queryFn: async () => getProjTypes(),
});
