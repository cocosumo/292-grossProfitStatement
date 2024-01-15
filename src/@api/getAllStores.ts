import {client} from '@/configKintone';

export const appId = 19;
export type IStore = Stores.SavedFields;
export type KStore = keyof IStore;

export const getAllStores = async (
	query = 'sortNumber > 0 order by sortNumber desc',
) => client.record.getRecords({
	app: appId,
	query,
}).then(({records}) => records as unknown as IStore[]);
