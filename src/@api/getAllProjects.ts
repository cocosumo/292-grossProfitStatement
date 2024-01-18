import {client} from '@/configKintone';

export const appId = 209;
export type IProjects = Projects.SavedFields;
export type KProjects = keyof IProjects;

export const getAllProjects = async (
	params?: Omit<Parameters<typeof client.record.getAllRecords>[0], 'app'>,
) => client.record.getAllRecords({
	...params,
	app: appId,
	orderBy: '作成日時 desc',
	withCursor: false, // 10000件を超えない想定でfalseとする
}).then(res => res as unknown as IProjects[]);
