import {client} from '@/configKintone';

export const appId = 190;
export type IProjTypes = ProjTypes.SavedFields;
export type KProjTypes = keyof IProjTypes;

export const getProjTypes = async (
	params?: Omit<Parameters<typeof client.record.getAllRecords>[0], 'app'>,
) => client.record.getAllRecords({
	...params,
	app: appId,
	orderBy: '作成日時 desc',
	withCursor: false, // 10000件を超えない想定でfalseとする
}).then(res => res as unknown as IProjTypes[]);
