import {client} from '@/configKintone';

export const appId = 232;
export type IContracts = Contracts.SavedFields;
export type KContracts = keyof IContracts;

export const getAllContracts = async (
	params?: Omit<Parameters<typeof client.record.getAllRecords>[0], 'app'>,
) => client.record.getAllRecords({
	...params,
	app: appId,
	orderBy: '作成日時 desc',
	withCursor: false, // 10000件を超えない想定でfalseとする
}).then(res => res as unknown as IContracts[]);

export type GetAllContractsParams = Parameters<typeof getAllContracts>[0];
