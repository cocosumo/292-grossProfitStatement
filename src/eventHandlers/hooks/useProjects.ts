import {useQuery} from '@tanstack/react-query';
import format from 'date-fns/format';
import {getLastDayOfMonth} from './helper/getLastDayOfMonth';
import {type KProjects, getAllProjects} from '@api/getAllProjects';

const projFinDate: KProjects = 'projFinDate';
const systemId: KProjects = 'andpadSystemId';
const systemIdForce: KProjects = 'forceLinkedAndpadSystemId';

export const useProjects = ({
	from,
	until,
}: {
	from: Date;
	until: Date;
}) => {
	const queryDateFrom = format(from, 'yyyy-MM-dd');
	const queryDateTo = getLastDayOfMonth(until);

	const queryFrom = `${projFinDate} >= "${queryDateFrom}"`;
	const queryTo = `${projFinDate} <= "${queryDateTo}"`;
	const queryAPConnection = `(${systemId} != "" or ${systemIdForce} != "")`;
	const query = [queryFrom, queryTo, queryAPConnection];

	return useQuery({
		queryKey: ['contractsByCocoas', from, until],
		queryFn: async () => getAllProjects({condition: query.join(' and ')}),
	});
};
