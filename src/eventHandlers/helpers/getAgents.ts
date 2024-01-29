import {type IProjects} from '@api/getAllProjects';
import {type Tagents} from '@/helpers/rolesMap';

export const getAgents = ({
	agents,
	relation,
}: {
	agents: IProjects['agents'];
	relation: Tagents;
}) => {
	const tgtAgents = agents.value
		.filter(({value}) => {
			const {
				agentType,
				agentName,
			} = value;

			return (agentType.value === relation) && (agentName.value !== '');
		})
		.map(({value}) => value.agentId.value);

	return tgtAgents;
};
