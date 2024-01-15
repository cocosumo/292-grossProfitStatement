import {client} from '@/configKintone';
import {type EmpStatus} from 'helpers/rolesMap';

export const appId = 34;
export type IEmployees = Employees.SavedFields;
export type KEmployees = keyof IEmployees;

/**
 * 社員名簿を取得する
 *
 * @param isActiveOnly デフォルト：true.
 * @returns
 */
export const getEmployees = async (
	isActiveOnly = true,
	statuses: EmpStatus[] = ['有効'],
	isSalesPosOnly = true,
) => {
	const queryArray: string[] = [];

	if (isActiveOnly) {
		queryArray.push(`状態 in ( ${statuses.map(s => `"${s}"`).join(',')})`);
	}

	if (isSalesPosOnly) {
		queryArray.push('職種 in( "営業","営業・工務")');
	}

	return client.record.getAllRecords({
		app: appId,
		condition: queryArray.join(' and ') || undefined,
		orderBy: 'sort asc',
	}).then(res => res as unknown as IEmployees[]);
};
