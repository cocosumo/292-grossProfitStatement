import {client} from '@/configKintone';
import {type EmpStatus} from 'helpers/rolesMap';

export const appId = 34;
export type RecordType = Employees.SavedFields;
export type RecordKey = keyof RecordType;

/**
 * 社員名簿を取得する
 *
 * @param isActiveOnly デフォルト：true.
 * @returns
 */
export const getEmployees = async (
	isActiveOnly = true,
	statuses: EmpStatus[] = ['有効'],
) => {
	const queryArray: string[] = [];

	if (isActiveOnly) {
		queryArray.push(`状態 in ( ${statuses.map(s => `"${s}"`).join(',')})`);
	}

	return client.record.getAllRecords({
		app: appId,
		condition: queryArray.join(' and ') || undefined,
		orderBy: 'sort asc',
	}).then(res => res as unknown as RecordType[]);
};
