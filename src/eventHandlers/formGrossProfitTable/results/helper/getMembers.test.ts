import {describe, it, expect} from '@jest/globals';
import {type AreaLabelList} from '../../config';
import {getMembers} from './getMembers';
import {type IEmployees} from '@api/getEmployees';
import path from 'path';
import fs from 'fs';

describe('getMembers', () => {
	// Set output file of getEmployees.test.ts
	const employeesPath = path.join(__dirname, '../../../../@api/__TEST__/getEmployees.json');
	const employeesDat = JSON.parse(fs.readFileSync(employeesPath, 'utf8')) as IEmployees[];
	const employees = employeesDat.filter(({
		職種,
		affiliation,
	}) => affiliation.value === 'ここすも' && ['営業', '営業・工務', '工務'].includes(職種.value));
	console.log('salesDat.length', employees.length);

	it('全エリアのメンバー情報を取得する', () => {
		const result = getMembers({
			employees: employees || [] as unknown as IEmployees[],
			area: ['全店舗' as AreaLabelList],
		});

		expect(result.length).toBe(15);
	}, 10000);

	it('西エリアのメンバー情報を取得する', () => {
		const result = getMembers({
			employees: employees || [] as unknown as IEmployees[],
			area: ['西エリア' as AreaLabelList],
		});

		expect(result.length).toBe(8);
	}, 10000);

	it('東エリアのメンバー情報を取得する', () => {
		const result = getMembers({
			employees: employees || [] as unknown as IEmployees[],
			area: ['東エリア' as AreaLabelList],
		});

		expect(result.length).toBe(7);
	}, 10000);

	it('対象店舗のメンバー情報を取得する', () => {
		const result = getMembers({
			employees: employees || [] as unknown as IEmployees[],
			area: [
				'83128853-98af-47af-9e5a-9d711bee4a43',
				'8a5b9969-39e2-4faa-9095-60f10ad30e7a',
			],
		});

		expect(result.length).toBe(7);
	}, 10000);
});
