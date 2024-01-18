import {client} from '@/configKintone';

export type GetAllProcurementDetailsParams = Parameters<typeof getAllProcurementDetails>[0];

export const appId = 253;
export type IProcurements = Procurements.SavedFields;
export type KProcurements = keyof IProcurements;

export const getAllProcurementDetails = async (
	params?: Omit<Parameters<typeof client.record.getAllRecords>[0], 'app'>,
) => client.record.getAllRecords({
	...params,
	app: appId,
	orderBy: '作成日時 desc',
	withCursor: false,
}).then(res => res as unknown as IProcurements[]);
